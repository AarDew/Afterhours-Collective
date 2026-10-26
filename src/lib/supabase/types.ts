export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          title: string;
          slug: string;
          fandom: string;
          fandom_slug: string;
          product_type: string;
          product_type_label: string;
          price: number;
          original_price: number | null;
          edition_note: string | null;
          badge: string | null;
          is_new_drop: boolean;
          is_limited: boolean;
          in_stock: boolean;
          images: Json;
          gallery: Json | null;
          sizes: Json | null;
          variants: Json | null;
          dimensions: string | null;
          material: string | null;
          finish: string | null;
          specs: Json | null;
          whats_included: string[] | null;
          short_description: string;
          long_description: string | null;
          popularity: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          fandom: string;
          fandom_slug: string;
          product_type: string;
          product_type_label: string;
          price: number;
          original_price?: number | null;
          edition_note?: string | null;
          badge?: string | null;
          is_new_drop?: boolean;
          is_limited?: boolean;
          in_stock?: boolean;
          images: Json;
          gallery?: Json | null;
          sizes?: Json | null;
          variants?: Json | null;
          dimensions?: string | null;
          material?: string | null;
          finish?: string | null;
          specs?: Json | null;
          whats_included?: string[] | null;
          short_description: string;
          long_description?: string | null;
          popularity?: number;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
      };
      orders: {
        Row: {
          id: string;
          customer_name: string;
          customer_email: string;
          customer_phone: string;
          shipping_address: Json;
          subtotal: number;
          shipping_cost: number;
          total_amount: number;
          status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
          payment_status: "unpaid" | "paid" | "failed";
          payment_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          customer_name: string;
          customer_email: string;
          customer_phone: string;
          shipping_address: Json;
          subtotal: number;
          shipping_cost: number;
          total_amount: number;
          status?: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
          payment_status?: "unpaid" | "paid" | "failed";
          payment_id?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["orders"]["Insert"]>;
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          title: string;
          quantity: number;
          unit_price: number;
          selected_size: Json | null;
          selected_variant: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          title: string;
          quantity: number;
          unit_price: number;
          selected_size?: Json | null;
          selected_variant?: Json | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["order_items"]["Insert"]>;
      };
      wall_of_fame: {
        Row: {
          id: string;
          title: string;
          collector_name: string;
          collector_handle: string;
          location: string;
          image_url: string;
          tagged_product_titles: string[];
          likes_count: number;
          featured_quote: string;
          is_verified_setup: boolean;
          is_approved: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          collector_name: string;
          collector_handle: string;
          location: string;
          image_url: string;
          tagged_product_titles?: string[];
          likes_count?: number;
          featured_quote: string;
          is_verified_setup?: boolean;
          is_approved?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["wall_of_fame"]["Insert"]>;
      };
    };
  };
}
