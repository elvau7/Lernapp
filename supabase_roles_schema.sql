create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  status text not null default 'pending' check (status in ('pending', 'active', 'blocked')),
  role text not null default 'molekularbiologie' check (role in ('admin', 'economics', 'molekularbiologie')),
  requested_at timestamptz not null default now(),
  approved_at timestamptz,
  approved_by uuid references auth.users(id)
);

alter table public.profiles enable row level security;

create or replace function public.is_active_user(p_user_id uuid default auth.uid())
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = p_user_id
      and p.status = 'active'
  );
$$;

create or replace function public.is_admin_user(p_user_id uuid default auth.uid())
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = p_user_id
      and p.status = 'active'
      and p.role = 'admin'
  );
$$;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "profiles_select_admin_all" on public.profiles;
create policy "profiles_select_admin_all"
on public.profiles
for select
to authenticated
using (public.is_admin_user(auth.uid()));

drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  uname text;
begin
  uname := lower(split_part(new.email, '@', 1));

  insert into public.profiles (id, username, status, role)
  values (new.id, uname, 'pending', 'molekularbiologie')
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
after insert on auth.users
for each row execute function public.handle_new_user_profile();

create or replace function public.admin_list_pending_users()
returns table (
  id uuid,
  username text,
  role text,
  requested_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_user(auth.uid()) then
    raise exception 'Nicht berechtigt';
  end if;

  return query
  select p.id, p.username, p.role, p.requested_at
  from public.profiles p
  where p.status = 'pending'
  order by p.requested_at asc;
end;
$$;

create or replace function public.admin_list_all_users()
returns table (
  id uuid,
  username text,
  status text,
  role text,
  requested_at timestamptz,
  approved_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_user(auth.uid()) then
    raise exception 'Nicht berechtigt';
  end if;

  return query
  select p.id, p.username, p.status, p.role, p.requested_at, p.approved_at
  from public.profiles p
  order by p.requested_at desc nulls last;
end;
$$;

create or replace function public.admin_update_user_status(
  p_user_id uuid,
  p_status text,
  p_role text default 'molekularbiologie'
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_user(auth.uid()) then
    raise exception 'Nicht berechtigt';
  end if;

  if p_status not in ('pending', 'active', 'blocked') then
    raise exception 'Ungueltiger Status';
  end if;

  if p_role not in ('admin', 'economics', 'molekularbiologie') then
    raise exception 'Ungueltige Rolle';
  end if;

  update public.profiles
  set status = p_status,
      role = case when p_status = 'active' then p_role else role end,
      approved_at = case when p_status = 'active' then now() else null end,
      approved_by = case when p_status = 'active' then auth.uid() else null end
  where id = p_user_id;
end;
$$;

grant execute on function public.admin_list_pending_users() to authenticated;
grant execute on function public.admin_list_all_users() to authenticated;
grant execute on function public.admin_update_user_status(uuid, text, text) to authenticated;
revoke all on function public.admin_list_pending_users() from public;
revoke all on function public.admin_list_all_users() from public;
revoke all on function public.admin_update_user_status(uuid, text, text) from public;
