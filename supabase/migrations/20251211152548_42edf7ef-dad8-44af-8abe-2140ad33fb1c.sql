-- Fix infinite recursion in user_roles RLS policies
-- Drop affected policies that use EXISTS subqueries on the same table
DROP POLICY IF EXISTS "Admins can view all roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can insert roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can delete roles" ON user_roles;

-- Recreate policies using the has_role() security definer function
CREATE POLICY "Admins can view all roles" ON user_roles
  FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert roles" ON user_roles
  FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles" ON user_roles
  FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));