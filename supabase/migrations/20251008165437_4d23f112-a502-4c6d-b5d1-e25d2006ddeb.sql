-- Create student advisory board applications table
CREATE TABLE public.student_advisory_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  school_name TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  town TEXT NOT NULL,
  parent_guardian_name TEXT NOT NULL,
  parent_guardian_email TEXT NOT NULL,
  parent_guardian_phone TEXT NOT NULL,
  why_interested TEXT NOT NULL,
  confirmed_grade_requirement BOOLEAN NOT NULL DEFAULT false,
  confirmed_school_location BOOLEAN NOT NULL DEFAULT false,
  confirmed_monthly_meetings BOOLEAN NOT NULL DEFAULT false,
  confirmed_confidentiality BOOLEAN NOT NULL DEFAULT false,
  additional_comments TEXT,
  form_language TEXT NOT NULL DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.student_advisory_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for public form submissions)
CREATE POLICY "Allow public insert for student advisory applications"
ON public.student_advisory_applications
FOR INSERT
TO anon
WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX idx_student_advisory_created_at ON public.student_advisory_applications(created_at DESC);
CREATE INDEX idx_student_advisory_email ON public.student_advisory_applications(email);