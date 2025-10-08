-- Create prevention_education_contact table
CREATE TABLE public.prevention_education_contact (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  organization TEXT,
  message TEXT NOT NULL,
  form_language TEXT NOT NULL DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.prevention_education_contact ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert
CREATE POLICY "Allow public insert for prevention education contact"
ON public.prevention_education_contact
FOR INSERT
TO anon
WITH CHECK (true);