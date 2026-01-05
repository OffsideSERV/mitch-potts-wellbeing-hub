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
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      above_and_beyond_roofing_quotes: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          postcode: string
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          email: string
          id: string
          password_hash: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          password_hash: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          password_hash?: string
          updated_at?: string
        }
        Relationships: []
      }
      apex_roofing_contact: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string | null
          service: string | null
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string | null
          service?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string | null
          service?: string | null
        }
        Relationships: []
      }
      apex_roofing_quotes: {
        Row: {
          address: string
          budget_range: string | null
          contact_preference: string
          created_at: string
          email: string
          id: number
          name: string
          phone: string
          project_description: string | null
          service_type: string
          urgency: string | null
        }
        Insert: {
          address?: string
          budget_range?: string | null
          contact_preference?: string
          created_at?: string
          email?: string
          id?: number
          name?: string
          phone?: string
          project_description?: string | null
          service_type?: string
          urgency?: string | null
        }
        Update: {
          address?: string
          budget_range?: string | null
          contact_preference?: string
          created_at?: string
          email?: string
          id?: number
          name?: string
          phone?: string
          project_description?: string | null
          service_type?: string
          urgency?: string | null
        }
        Relationships: []
      }
      device_tokens: {
        Row: {
          created_at: string
          device_type: string
          id: string
          last_used_at: string | null
          token: string
          updated_at: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          device_type: string
          id?: string
          last_used_at?: string | null
          token: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          device_type?: string
          id?: string
          last_used_at?: string | null
          token?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      impeccable_roofing_quotes: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          postcode: string
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
        }
        Relationships: []
      }
      "ipro-quotes": {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          postcode: string
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
        }
        Relationships: []
      }
      new_look_roofing_quotes: {
        Row: {
          created_at: string
          description: string | null
          email: string
          id: number
          name: string
          phone: string
          postcode: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          email?: string
          id?: number
          name?: string
          phone?: string
          postcode?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          email?: string
          id?: number
          name?: string
          phone?: string
          postcode?: string
        }
        Relationships: []
      }
      nxtlvlhealth_keywords: {
        Row: {
          category: string | null
          competition: string | null
          cpc: string | null
          difficulty: string | null
          gbp_rank_brisbane: string | null
          intent: string | null
          internally_linked_status: string | null
          keyword_se_ranking: string | null
          primary_or_secondary: string | null
          search_intent: string | null
          serp_features: string | null
          status: string | null
          "sub-category": string | null
          target_keyword: string | null
          target_url: string | null
          volume: string | null
        }
        Insert: {
          category?: string | null
          competition?: string | null
          cpc?: string | null
          difficulty?: string | null
          gbp_rank_brisbane?: string | null
          intent?: string | null
          internally_linked_status?: string | null
          keyword_se_ranking?: string | null
          primary_or_secondary?: string | null
          search_intent?: string | null
          serp_features?: string | null
          status?: string | null
          "sub-category"?: string | null
          target_keyword?: string | null
          target_url?: string | null
          volume?: string | null
        }
        Update: {
          category?: string | null
          competition?: string | null
          cpc?: string | null
          difficulty?: string | null
          gbp_rank_brisbane?: string | null
          intent?: string | null
          internally_linked_status?: string | null
          keyword_se_ranking?: string | null
          primary_or_secondary?: string | null
          search_intent?: string | null
          serp_features?: string | null
          status?: string | null
          "sub-category"?: string | null
          target_keyword?: string | null
          target_url?: string | null
          volume?: string | null
        }
        Relationships: []
      }
      pro_roof_care_quotes: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          postcode: string | null
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string | null
        }
        Relationships: []
      }
      pro_roof_care_website_leads: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          postcode: string | null
          services: string[] | null
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string | null
          services?: string[] | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string | null
          services?: string[] | null
        }
        Relationships: []
      }
      stateoftheartroofing_quotes: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          postcode: string
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
        }
        Relationships: []
      }
      tarzans_roofing_quotes: {
        Row: {
          address: string
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          service: string
        }
        Insert: {
          address?: string
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          service?: string
        }
        Update: {
          address?: string
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          service?: string
        }
        Relationships: []
      }
      terra_firma_waterproofing_quotes: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          zip_code: string
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          zip_code?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          zip_code?: string
        }
        Relationships: []
      }
      topline_installation_quotes: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          postcode: string | null
          roof_type: string | null
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string | null
          roof_type?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          postcode?: string | null
          roof_type?: string | null
        }
        Relationships: []
      }
      topline_roofing_quote_requests: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string
          postcode: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone: string
          postcode: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string
          postcode?: string
          updated_at?: string
        }
        Relationships: []
      }
      weathertech_quote_requests: {
        Row: {
          address: string
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string
          updated_at: string
        }
        Insert: {
          address: string
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone: string
          updated_at?: string
        }
        Update: {
          address?: string
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string
          updated_at?: string
        }
        Relationships: []
      }
      weatherwise_repair_quotes: {
        Row: {
          created_at: string
          email: string | null
          id: number
          message: string | null
          name: string
          phone: string
          suburb: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          message?: string | null
          name?: string
          phone?: string
          suburb?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          message?: string | null
          name?: string
          phone?: string
          suburb?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin_user: { Args: never; Returns: boolean }
      verify_admin_password: {
        Args: { admin_email: string; admin_password: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
