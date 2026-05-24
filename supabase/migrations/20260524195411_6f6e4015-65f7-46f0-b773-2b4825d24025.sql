-- 1. Drop all anon policies on Trident tracking tables
DROP POLICY IF EXISTS "Allow anonymous reads to trident_visitors" ON public.trident_visitors;
DROP POLICY IF EXISTS "Allow anonymous updates to trident_visitors" ON public.trident_visitors;
DROP POLICY IF EXISTS "Allow anonymous inserts to trident_visitors" ON public.trident_visitors;

DROP POLICY IF EXISTS "Allow anonymous reads to trident_page_views" ON public.trident_page_views;
DROP POLICY IF EXISTS "Allow anonymous updates to trident_page_views" ON public.trident_page_views;
DROP POLICY IF EXISTS "Allow anonymous inserts to trident_page_views" ON public.trident_page_views;

DROP POLICY IF EXISTS "Allow anonymous reads to trident_product_views" ON public.trident_product_views;
DROP POLICY IF EXISTS "Allow anonymous inserts to trident_product_views" ON public.trident_product_views;

DROP POLICY IF EXISTS "Allow anonymous reads to trident_events" ON public.trident_events;
DROP POLICY IF EXISTS "Allow anonymous inserts to trident_events" ON public.trident_events;

-- 2. Admin-only SELECT policies (service role bypasses RLS automatically)
CREATE POLICY "Admins can read trident_visitors"
  ON public.trident_visitors FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can read trident_page_views"
  ON public.trident_page_views FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can read trident_product_views"
  ON public.trident_product_views FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can read trident_events"
  ON public.trident_events FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 3. Restrict has_role direct execution via PostgREST (RLS policies still work; they run as table owner)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;