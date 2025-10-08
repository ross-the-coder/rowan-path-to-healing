-- Create storage bucket for volunteer resumes
INSERT INTO storage.buckets (id, name, public) 
VALUES ('volunteer-resumes', 'volunteer-resumes', false)
ON CONFLICT (id) DO NOTHING;

-- Create volunteer applications table
CREATE TABLE public.volunteer_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  age INTEGER NOT NULL,
  resume_url TEXT,
  educational_background TEXT NOT NULL,
  current_occupation TEXT NOT NULL,
  previous_volunteer_experience TEXT NOT NULL,
  hobbies_and_interests TEXT NOT NULL,
  how_did_you_hear TEXT NOT NULL,
  why_interested TEXT NOT NULL,
  perception_shaped TEXT NOT NULL,
  best_skills TEXT NOT NULL,
  difficulties TEXT NOT NULL,
  additional_comments TEXT,
  form_language TEXT NOT NULL DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.volunteer_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for public form submissions)
CREATE POLICY "Allow public insert for volunteer applications"
ON public.volunteer_applications
FOR INSERT
TO anon
WITH CHECK (true);

-- Create index for better query performance
CREATE INDEX idx_volunteer_applications_created_at ON public.volunteer_applications(created_at DESC);
CREATE INDEX idx_volunteer_applications_email ON public.volunteer_applications(email);

-- Storage policies for volunteer resumes (private - only authenticated users can view)
CREATE POLICY "Allow public upload of resumes"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'volunteer-resumes');

CREATE POLICY "Allow public to update their own resumes"
ON storage.objects
FOR UPDATE
TO anon
USING (bucket_id = 'volunteer-resumes');

-- Only authenticated staff can view resumes
CREATE POLICY "Only authenticated users can view resumes"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'volunteer-resumes');