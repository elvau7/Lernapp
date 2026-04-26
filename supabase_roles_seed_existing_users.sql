-- Existing users: create/update initial status and roles.
-- Run this after supabase_roles_schema.sql.

insert into public.profiles (id, username, status, role, requested_at, approved_at, approved_by)
select
  au.id,
  lower(split_part(au.email, '@', 1)) as username,
  'active' as status,
  case
    when lower(split_part(au.email, '@', 1)) in ('admin', 'lion') then 'admin'
    else 'molekularbiologie'
  end as role,
  now(),
  now(),
  au.id
from auth.users au
where lower(split_part(au.email, '@', 1)) in ('admin', 'lion', 'elisabeth', 'julia')
on conflict (id) do update
set status = excluded.status,
    role = excluded.role,
    approved_at = excluded.approved_at,
    approved_by = excluded.approved_by;

-- Manual approval template for future users:
-- update public.profiles
-- set status = 'active',
--     role = 'molekularbiologie',
--     approved_at = now(),
--     approved_by = '<your-admin-user-id>'
-- where username = '<new-username>';
