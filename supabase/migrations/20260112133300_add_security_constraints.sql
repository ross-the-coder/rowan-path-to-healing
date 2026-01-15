-- Add security constraints to intake tables

-- Crisis Counseling Intake
ALTER TABLE public.crisis_counseling_intake
  ADD CONSTRAINT crisis_counseling_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT crisis_counseling_first_name_length CHECK (char_length(first_name) <= 100),
  ADD CONSTRAINT crisis_counseling_last_name_length CHECK (char_length(last_name) <= 100);

-- Trauma Recovery Intake
ALTER TABLE public.trauma_recovery_intake
  ADD CONSTRAINT trauma_recovery_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT trauma_recovery_first_name_length CHECK (char_length(first_name) <= 100),
  ADD CONSTRAINT trauma_recovery_last_name_length CHECK (char_length(last_name) <= 100);

-- Victim Advocacy Intake
ALTER TABLE public.victim_advocacy_intake
  ADD CONSTRAINT victim_advocacy_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT victim_advocacy_first_name_length CHECK (char_length(first_name) <= 100),
  ADD CONSTRAINT victim_advocacy_last_name_length CHECK (char_length(last_name) <= 100);
