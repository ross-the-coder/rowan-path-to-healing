-- Drop the existing restrictive SELECT policy if it exists
DROP POLICY IF EXISTS "Admins can view victim advocacy intake" ON public.victim_advocacy_intake;

-- Create a permissive SELECT policy that only allows admins to read
CREATE POLICY "Admins can view victim advocacy intake" 
ON public.victim_advocacy_intake 
FOR SELECT 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));