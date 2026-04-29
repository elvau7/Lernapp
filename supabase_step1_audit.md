## Step 1 Security Audit (RLS/Policy)

Scope:
- `public.profiles`
- `public.user_progress`
- Admin RPCs (`admin_list_pending_users`, `admin_list_all_users`, `admin_update_user_status`)

### `public.profiles`
- **Table privileges**
  - `authenticated`: `SELECT`
  - `anon`/`public`: no direct table privileges
- **Policies**
  - `profiles_select_own`: authenticated user can read own profile row (`auth.uid() = id`)
  - `profiles_select_admin_all`: admin can read all profiles (`is_admin_user(auth.uid())`)
- **Expected access**
  - Normal user: own status/role visible, cannot write profile
  - Admin: can read all profiles, writes only through RPC

### `public.user_progress`
- **Table privileges**
  - `authenticated`: `SELECT`, `INSERT`, `UPDATE`
  - `anon`/`public`: no direct table privileges
- **Policies**
  - `user_progress_select_own`: own row only + active profile required
  - `user_progress_insert_own`: own row only + active profile required
  - `user_progress_update_own`: own row only + active profile required
- **Expected access**
  - Active user: read/write own progress
  - Pending/blocked user: denied by `is_active_user(...)` check
  - No cross-user reads/writes

### Admin RPCs
- `security definer`, execute granted to `authenticated`, public revoked
- Each function enforces admin role via `is_admin_user(auth.uid())`
- Expected behavior:
  - Non-admin call -> exception `Nicht berechtigt`
  - Admin call -> succeeds with controlled behavior

### Manual verification checklist
1. Login as active standard user:
   - Own profile readable
   - Own progress read/write succeeds
   - Other user progress inaccessible
2. Login as pending user:
   - App denies protected access
   - Progress operations blocked
3. Login as blocked user:
   - App forces sign-out and denies access
4. Login as admin:
   - Admin user lists work
   - Status updates apply and persist
