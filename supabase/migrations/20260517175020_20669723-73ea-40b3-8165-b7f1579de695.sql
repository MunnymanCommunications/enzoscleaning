
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'trident_member');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Members
CREATE TABLE public.trident_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL UNIQUE,
  name text NOT NULL,
  company_name text NOT NULL,
  phone text NOT NULL,
  title text,
  address_line1 text,
  address_line2 text,
  city text,
  state text,
  postal_code text,
  country text,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.trident_members ENABLE ROW LEVEL SECURITY;

CREATE INDEX trident_members_email_idx ON public.trident_members (lower(email));

CREATE POLICY "Members can read own profile"
  ON public.trident_members FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Members can update own profile"
  ON public.trident_members FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER trident_members_set_updated_at
BEFORE UPDATE ON public.trident_members
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Member events (analytics)
CREATE TABLE public.trident_member_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  event_data jsonb NOT NULL DEFAULT '{}'::jsonb,
  page_path text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.trident_member_events ENABLE ROW LEVEL SECURITY;
CREATE INDEX trident_member_events_user_idx ON public.trident_member_events (user_id, created_at DESC);

CREATE POLICY "Members can insert own events"
  ON public.trident_member_events FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Members can read own events"
  ON public.trident_member_events FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

-- Order requests
CREATE TABLE public.trident_order_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  member_snapshot jsonb NOT NULL,
  notes text,
  total_items integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'submitted',
  crm_status text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.trident_order_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members read own orders"
  ON public.trident_order_requests FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.trident_order_request_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES public.trident_order_requests(id) ON DELETE CASCADE,
  product_name text NOT NULL,
  product_sku text,
  category text,
  quantity integer NOT NULL CHECK (quantity > 0),
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.trident_order_request_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members read own order items"
  ON public.trident_order_request_items FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.trident_order_requests o
      WHERE o.id = order_id
        AND (o.user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))
    )
  );
