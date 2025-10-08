-- Create crisis counseling intake table
CREATE TABLE public.crisis_counseling_intake (
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

-- Create trauma recovery clinic intake table
CREATE TABLE public.trauma_recovery_intake (
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
  is_18_or_older BOOLEAN NOT NULL DEFAULT false,
  has_husky_insurance BOOLEAN NOT NULL DEFAULT false,
  form_language TEXT NOT NULL DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.crisis_counseling_intake ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trauma_recovery_intake ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts from anyone (for public form submissions)
CREATE POLICY "Allow public insert for crisis counseling"
ON public.crisis_counseling_intake
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public insert for trauma recovery"
ON public.trauma_recovery_intake
FOR INSERT
TO anon
WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX idx_crisis_counseling_created_at ON public.crisis_counseling_intake(created_at DESC);
CREATE INDEX idx_trauma_recovery_created_at ON public.trauma_recovery_intake(created_at DESC);