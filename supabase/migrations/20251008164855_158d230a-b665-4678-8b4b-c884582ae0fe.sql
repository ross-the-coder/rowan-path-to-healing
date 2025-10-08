-- Create victim advocacy intake table (same structure as crisis counseling)
CREATE TABLE public.victim_advocacy_intake (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  town_of_residence TEXT NOT NULL,
  preferred_language TEXT NOT NULL,
  voicemail_permission BOOLEAN NOT NULL DEFAULT false,
  request_description TEXT NOT NULL,
  is_client BOOLEAN NOT NULL DEFAULT true,
  referrer_name TEXT,
  referrer_phone TEXT,
  referrer_email TEXT,
  referrer_organization TEXT,
  form_language TEXT NOT NULL DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.victim_advocacy_intake ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for public form submissions)
CREATE POLICY "Allow public insert for victim advocacy"
ON public.victim_advocacy_intake
FOR INSERT
TO anon
WITH CHECK (true);

-- Create index for better query performance
CREATE INDEX idx_victim_advocacy_created_at ON public.victim_advocacy_intake(created_at DESC);