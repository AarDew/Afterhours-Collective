import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "./types";

/**
 * Checks whether public Supabase environment variables are available.
 */
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(
    url &&
      anonKey &&
      !url.includes("your-project-id") &&
      !anonKey.includes("your-anon-key")
  );
}

/**
 * Checks whether the server-only Supabase Service Role key is available.
 */
export function isSupabaseAdminConfigured(): boolean {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return Boolean(
    isSupabaseConfigured() &&
      serviceKey &&
      !serviceKey.includes("your-service-role-key")
  );
}

/**
 * Creates a typed Supabase client for server-side usage using the anon key.
 * Respects Row-Level Security (RLS) policies.
 * Returns null if Supabase environment variables are unconfigured.
 */
export function createServerClient(): SupabaseClient<Database> | null {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/**
 * Creates an admin Supabase client using the server-only Service Role Key.
 *
 * CRITICAL SECURITY INVARIANT:
 * - This function MUST ONLY run in a server environment (Node.js runtime / Server Actions / Route Handlers).
 * - The SUPABASE_SERVICE_ROLE_KEY bypasses Row Level Security (RLS) and must NEVER be exposed to the browser.
 */
export function createAdminClient(): SupabaseClient<Database> | null {
  if (typeof window !== "undefined") {
    throw new Error(
      "SECURITY ERROR: createAdminClient() cannot be invoked in a client/browser environment."
    );
  }

  if (!isSupabaseAdminConfigured()) {
    return null;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
