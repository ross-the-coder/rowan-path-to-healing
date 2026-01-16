-- Add plaintext fields for KidSafeHQ questions intended for public sharing

alter table public.kidsafe_questions
  add column if not exists question_text text,
  add column if not exists contact_email text,
  add column if not exists consent_public boolean not null default false,
  add column if not exists search_query text;

create index if not exists kidsafe_questions_created_at_desc_idx on public.kidsafe_questions (created_at desc);
