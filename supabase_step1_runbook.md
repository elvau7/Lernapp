## Step 1 Runbook (SQL Re-Deploy + Smoke Tests)

Execute in Supabase SQL Editor in this exact order:

1. `supabase_roles_schema.sql`
2. `supabase_roles_seed_existing_users.sql`
3. `supabase_progress_schema.sql`

### 1) `supabase_roles_schema.sql`
- **Purpose**
  - Creates `public.profiles`
  - Creates role helper functions (`is_active_user`, `is_admin_user`)
  - Configures RLS policies for profile reads
  - Creates admin RPCs and grants/revokes execute permissions
- **Run again when**
  - Role model, status workflow, admin RPC behavior changes
  - You adjust RLS or function logic for profiles/admin
- **Expected result**
  - Script succeeds without errors
  - Admin RPCs callable only by authenticated admins

### 2) `supabase_roles_seed_existing_users.sql`
- **Purpose**
  - Initializes known existing users in `public.profiles`
  - Ensures initial status/role assignment for migrated users
- **Run again when**
  - You add additional predefined users
  - You need to repair/update baseline role assignment
- **Expected result**
  - Existing target users have `active` status and expected role
  - No duplicate rows due to upsert

### 3) `supabase_progress_schema.sql`
- **Purpose**
  - Creates `public.user_progress`
  - Enables RLS and own-row policies for active users
  - Restricts table grants to authenticated clients
- **Run again when**
  - Progress table schema or policy logic changes
  - You update privilege setup for progress access
- **Expected result**
  - Active users can read/write own progress only
  - Pending/blocked users are denied

## Manual smoke tests (15-30 minutes)

1. **Active standard user**
   - Login works
   - App opens
   - Progress save/reload works
   - No admin panel visibility

2. **Pending user**
   - Login attempt returns pending/freischaltung message
   - App stays on login screen

3. **Admin user**
   - Admin panel is visible
   - `pending -> active` update works
   - User appears correctly in all-users list after refresh

4. **Blocked user**
   - Login/session is denied with blocked message
   - App access is not possible
