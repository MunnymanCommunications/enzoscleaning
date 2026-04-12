
-- Create visitors table
CREATE TABLE public.trident_visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_visit_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.trident_visitors ENABLE ROW LEVEL SECURITY;

-- Allow inserts from edge functions (anon key)
CREATE POLICY "Allow anonymous inserts to trident_visitors"
  ON public.trident_visitors FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow updates from edge functions (for last_visit_at)
CREATE POLICY "Allow anonymous updates to trident_visitors"
  ON public.trident_visitors FOR UPDATE
  TO anon
  USING (true);

-- Allow reads from edge functions (to check returning visitors)
CREATE POLICY "Allow anonymous reads to trident_visitors"
  ON public.trident_visitors FOR SELECT
  TO anon
  USING (true);

-- Create page views table
CREATE TABLE public.trident_page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id UUID NOT NULL REFERENCES public.trident_visitors(id) ON DELETE CASCADE,
  page_path TEXT NOT NULL,
  section_viewed TEXT,
  entered_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  duration_seconds INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.trident_page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts to trident_page_views"
  ON public.trident_page_views FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous updates to trident_page_views"
  ON public.trident_page_views FOR UPDATE
  TO anon
  USING (true);

CREATE POLICY "Allow anonymous reads to trident_page_views"
  ON public.trident_page_views FOR SELECT
  TO anon
  USING (true);

-- Create product views table
CREATE TABLE public.trident_product_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id UUID NOT NULL REFERENCES public.trident_visitors(id) ON DELETE CASCADE,
  product_name TEXT NOT NULL,
  product_sku TEXT,
  category TEXT,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.trident_product_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts to trident_product_views"
  ON public.trident_product_views FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous reads to trident_product_views"
  ON public.trident_product_views FOR SELECT
  TO anon
  USING (true);

-- Create events table
CREATE TABLE public.trident_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id UUID NOT NULL REFERENCES public.trident_visitors(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  event_data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.trident_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts to trident_events"
  ON public.trident_events FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous reads to trident_events"
  ON public.trident_events FOR SELECT
  TO anon
  USING (true);

-- Indexes for performance
CREATE INDEX idx_trident_page_views_visitor ON public.trident_page_views(visitor_id);
CREATE INDEX idx_trident_product_views_visitor ON public.trident_product_views(visitor_id);
CREATE INDEX idx_trident_events_visitor ON public.trident_events(visitor_id);
CREATE INDEX idx_trident_visitors_email ON public.trident_visitors(email);
