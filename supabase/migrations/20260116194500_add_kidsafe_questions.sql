-- Add encrypted KidSafeHQ anonymous questions table

create table if not exists public.kidsafe_questions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  encrypted_payload text not null,
  iv text not null,
  wants_response boolean not null default false
);

create index if not exists kidsafe_questions_created_at_idx on public.kidsafe_questions (created_at desc);
create index if not exists kidsafe_questions_wants_response_idx on public.kidsafe_questions (wants_response);

alter table public.kidsafe_questions enable row level security;
