-- Drop the existing restrictive SELECT policy
DROP POLICY IF EXISTS "Admins can view victim advocacy intake" ON public.victim_advocacy_intake;

-- Create a proper PERMISSIVE SELECT policy for admins only
CREATE POLICY "Admins can view victim advocacy intake"
ON public.victim_advocacy_intake
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));