-- Remove the UPDATE policy that allows unauthorized file modifications
-- Resume files should not be modified after upload
DROP POLICY IF EXISTS "Allow public to update their own resumes" ON storage.objects;