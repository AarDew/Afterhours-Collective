# Supabase Backend Setup Guide — Afterhours Collective

This guide outlines the setup required to connect Afterhours Collective to a live Supabase PostgreSQL backend.

---

## 1. Supabase Project Creation

1. Go to [supabase.com](https://supabase.com) and sign in or create an account.
2. Click **New Project**.
3. Set your project details:
   - **Name**: `afterhours-collective`
   - **Database Password**: Generate and securely store a strong password.
   - **Region**: Choose the closest region to your primary audience (e.g., `South Asia (Mumbai)` for India).
4. Wait for the database provisioning to complete (1–2 minutes).

---

## 2. Environment Variables Configuration

In the Supabase Dashboard, navigate to **Project Settings &rarr; API**.

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in the corresponding values:
- `NEXT_PUBLIC_SUPABASE_URL`: Found under **Project URL**.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Found under **Project API keys** &rarr; `anon` `public`.
- `SUPABASE_SERVICE_ROLE_KEY`: Found under **Project API keys** &rarr; `service_role` (Click reveal).

> [!CAUTION]
> **Security Rule**: The `SUPABASE_SERVICE_ROLE_KEY` bypasses all Row-Level Security policies.
> Never prefix it with `NEXT_PUBLIC_` and never import it into client-side components (`"use client"`).

---

## 3. Database Schema Migration

Navigate to **SQL Editor** in your Supabase dashboard and run the following migration script to initialize the tables with Row-Level Security (RLS):

```sql
-- 1. Products Table
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  fandom TEXT NOT NULL,
  fandom_slug TEXT NOT NULL,
  product_type TEXT NOT NULL,
  product_type_label TEXT NOT NULL,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  edition_note TEXT,
  badge TEXT,
  is_new_drop BOOLEAN DEFAULT false,
  is_limited BOOLEAN DEFAULT false,
  in_stock BOOLEAN DEFAULT true,
  images JSONB NOT NULL,
  gallery JSONB,
  sizes JSONB,
  variants JSONB,
  dimensions TEXT,
  material TEXT,
  finish TEXT,
  specs JSONB,
  whats_included TEXT[],
  short_description TEXT NOT NULL,
  long_description TEXT,
  popularity INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  shipping_address JSONB NOT NULL,
  subtotal NUMERIC NOT NULL,
  shipping_cost NUMERIC NOT NULL DEFAULT 0,
  total_amount NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  payment_status TEXT NOT NULL DEFAULT 'unpaid',
  payment_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Order Items Table
CREATE TABLE IF NOT EXISTS public.order_items (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  title TEXT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  unit_price NUMERIC NOT NULL,
  selected_size JSONB,
  selected_variant JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Wall of Fame Table
CREATE TABLE IF NOT EXISTS public.wall_of_fame (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  collector_name TEXT NOT NULL,
  collector_handle TEXT NOT NULL,
  location TEXT NOT NULL,
  image_url TEXT NOT NULL,
  tagged_product_titles TEXT[] DEFAULT '{}',
  likes_count INT DEFAULT 0,
  featured_quote TEXT NOT NULL,
  is_verified_setup BOOLEAN DEFAULT false,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row-Level Security (RLS) on all tables
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wall_of_fame ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public products are viewable by everyone"
  ON public.products FOR SELECT USING (true);

CREATE POLICY "Approved Wall of Fame posts are viewable by everyone"
  ON public.wall_of_fame FOR SELECT USING (is_approved = true);

-- Orders: Service role has full access; anon users cannot read arbitrary orders
CREATE POLICY "Service role manages orders"
  ON public.orders FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role manages order items"
  ON public.order_items FOR ALL USING (auth.role() = 'service_role');
```

---

## 4. Current Architecture & Fallback Behavior

* **Storefront Safety**:
  The application uses `isSupabaseConfigured()` in `src/lib/supabase/server.ts`.
  When environment variables are unconfigured or placeholder values are present, the client safely returns `null` without fabricating fake DB data.
  The storefront continues to use the existing static dataset in `src/data/mock-data.ts`.
