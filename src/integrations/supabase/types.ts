export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      trident_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          visitor_id: string
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          visitor_id: string
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          visitor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trident_events_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "trident_visitors"
            referencedColumns: ["id"]
          },
        ]
      }
      trident_member_events: {
        Row: {
          created_at: string
          event_data: Json
          event_type: string
          id: string
          page_path: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          event_data?: Json
          event_type: string
          id?: string
          page_path?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          event_data?: Json
          event_type?: string
          id?: string
          page_path?: string | null
          user_id?: string
        }
        Relationships: []
      }
      trident_members: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          city: string | null
          company_name: string
          country: string | null
          created_at: string
          email: string
          id: string
          name: string
          notes: string | null
          phone: string
          postal_code: string | null
          state: string | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          company_name: string
          country?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          notes?: string | null
          phone: string
          postal_code?: string | null
          state?: string | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          company_name?: string
          country?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          notes?: string | null
          phone?: string
          postal_code?: string | null
          state?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      trident_order_request_items: {
        Row: {
          category: string | null
          created_at: string
          id: string
          notes: string | null
          order_id: string
          product_name: string
          product_sku: string | null
          quantity: number
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          order_id: string
          product_name: string
          product_sku?: string | null
          quantity: number
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          order_id?: string
          product_name?: string
          product_sku?: string | null
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "trident_order_request_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "trident_order_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      trident_order_requests: {
        Row: {
          created_at: string
          crm_status: string | null
          id: string
          member_snapshot: Json
          notes: string | null
          status: string
          total_items: number
          user_id: string
        }
        Insert: {
          created_at?: string
          crm_status?: string | null
          id?: string
          member_snapshot: Json
          notes?: string | null
          status?: string
          total_items?: number
          user_id: string
        }
        Update: {
          created_at?: string
          crm_status?: string | null
          id?: string
          member_snapshot?: Json
          notes?: string | null
          status?: string
          total_items?: number
          user_id?: string
        }
        Relationships: []
      }
      trident_page_views: {
        Row: {
          created_at: string
          duration_seconds: number | null
          entered_at: string
          id: string
          page_path: string
          section_viewed: string | null
          visitor_id: string
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          entered_at?: string
          id?: string
          page_path: string
          section_viewed?: string | null
          visitor_id: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          entered_at?: string
          id?: string
          page_path?: string
          section_viewed?: string | null
          visitor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trident_page_views_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "trident_visitors"
            referencedColumns: ["id"]
          },
        ]
      }
      trident_product_views: {
        Row: {
          category: string | null
          id: string
          product_name: string
          product_sku: string | null
          viewed_at: string
          visitor_id: string
        }
        Insert: {
          category?: string | null
          id?: string
          product_name: string
          product_sku?: string | null
          viewed_at?: string
          visitor_id: string
        }
        Update: {
          category?: string | null
          id?: string
          product_name?: string
          product_sku?: string | null
          viewed_at?: string
          visitor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trident_product_views_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "trident_visitors"
            referencedColumns: ["id"]
          },
        ]
      }
      trident_visitors: {
        Row: {
          company_name: string
          created_at: string
          email: string
          id: string
          ip_address: string | null
          last_visit_at: string
          name: string
          phone: string
        }
        Insert: {
          company_name: string
          created_at?: string
          email: string
          id?: string
          ip_address?: string | null
          last_visit_at?: string
          name: string
          phone: string
        }
        Update: {
          company_name?: string
          created_at?: string
          email?: string
          id?: string
          ip_address?: string | null
          last_visit_at?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "trident_member"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "trident_member"],
    },
  },
} as const
