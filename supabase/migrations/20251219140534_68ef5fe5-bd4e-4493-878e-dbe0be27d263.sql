-- Create table to store FAQ search queries
CREATE TABLE public.faq_search_queries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query text NOT NULL,
  had_faq_results boolean NOT NULL DEFAULT false,
  had_resource_results boolean NOT NULL DEFAULT false,
  matched_topics text[] DEFAULT '{}',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.faq_search_queries ENABLE ROW LEVEL SECURITY;

-- Allow public insert (anyone can submit a search)
CREATE POLICY "Allow public insert for faq searches"
ON public.faq_search_queries
FOR INSERT
TO public
WITH CHECK (true);

-- Only admins can view the search queries
CREATE POLICY "Admins can view faq search queries"
ON public.faq_search_queries
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for common queries
CREATE INDEX idx_faq_search_queries_created_at ON public.faq_search_queries(created_at DESC);
CREATE INDEX idx_faq_search_queries_query ON public.faq_search_queries(query);