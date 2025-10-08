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
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      crisis_counseling_intake: {
        Row: {
          created_at: string
          email: string
          first_name: string
          form_language: string
          id: string
          is_client: boolean
          last_name: string
          phone: string
          preferred_language: string
          referrer_email: string | null
          referrer_name: string | null
          referrer_organization: string | null
          referrer_phone: string | null
          request_description: string
          town_of_residence: string
          voicemail_permission: boolean
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          form_language?: string
          id?: string
          is_client?: boolean
          last_name: string
          phone: string
          preferred_language: string
          referrer_email?: string | null
          referrer_name?: string | null
          referrer_organization?: string | null
          referrer_phone?: string | null
          request_description: string
          town_of_residence: string
          voicemail_permission?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          form_language?: string
          id?: string
          is_client?: boolean
          last_name?: string
          phone?: string
          preferred_language?: string
          referrer_email?: string | null
          referrer_name?: string | null
          referrer_organization?: string | null
          referrer_phone?: string | null
          request_description?: string
          town_of_residence?: string
          voicemail_permission?: boolean
        }
        Relationships: []
      }
      student_advisory_applications: {
        Row: {
          additional_comments: string | null
          confirmed_confidentiality: boolean
          confirmed_grade_requirement: boolean
          confirmed_monthly_meetings: boolean
          confirmed_school_location: boolean
          created_at: string
          email: string
          first_name: string
          form_language: string
          grade_level: string
          id: string
          last_name: string
          parent_guardian_email: string
          parent_guardian_name: string
          parent_guardian_phone: string
          phone: string
          school_name: string
          town: string
          why_interested: string
        }
        Insert: {
          additional_comments?: string | null
          confirmed_confidentiality?: boolean
          confirmed_grade_requirement?: boolean
          confirmed_monthly_meetings?: boolean
          confirmed_school_location?: boolean
          created_at?: string
          email: string
          first_name: string
          form_language?: string
          grade_level: string
          id?: string
          last_name: string
          parent_guardian_email: string
          parent_guardian_name: string
          parent_guardian_phone: string
          phone: string
          school_name: string
          town: string
          why_interested: string
        }
        Update: {
          additional_comments?: string | null
          confirmed_confidentiality?: boolean
          confirmed_grade_requirement?: boolean
          confirmed_monthly_meetings?: boolean
          confirmed_school_location?: boolean
          created_at?: string
          email?: string
          first_name?: string
          form_language?: string
          grade_level?: string
          id?: string
          last_name?: string
          parent_guardian_email?: string
          parent_guardian_name?: string
          parent_guardian_phone?: string
          phone?: string
          school_name?: string
          town?: string
          why_interested?: string
        }
        Relationships: []
      }
      trauma_recovery_intake: {
        Row: {
          created_at: string
          email: string
          first_name: string
          form_language: string
          has_husky_insurance: boolean
          id: string
          is_18_or_older: boolean
          is_client: boolean
          last_name: string
          phone: string
          preferred_language: string
          referrer_email: string | null
          referrer_name: string | null
          referrer_organization: string | null
          referrer_phone: string | null
          request_description: string
          town_of_residence: string
          voicemail_permission: boolean
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          form_language?: string
          has_husky_insurance?: boolean
          id?: string
          is_18_or_older?: boolean
          is_client?: boolean
          last_name: string
          phone: string
          preferred_language: string
          referrer_email?: string | null
          referrer_name?: string | null
          referrer_organization?: string | null
          referrer_phone?: string | null
          request_description: string
          town_of_residence: string
          voicemail_permission?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          form_language?: string
          has_husky_insurance?: boolean
          id?: string
          is_18_or_older?: boolean
          is_client?: boolean
          last_name?: string
          phone?: string
          preferred_language?: string
          referrer_email?: string | null
          referrer_name?: string | null
          referrer_organization?: string | null
          referrer_phone?: string | null
          request_description?: string
          town_of_residence?: string
          voicemail_permission?: boolean
        }
        Relationships: []
      }
      victim_advocacy_intake: {
        Row: {
          created_at: string
          email: string
          first_name: string
          form_language: string
          id: string
          is_client: boolean
          last_name: string
          phone: string
          preferred_language: string
          referrer_email: string | null
          referrer_name: string | null
          referrer_organization: string | null
          referrer_phone: string | null
          request_description: string
          town_of_residence: string
          voicemail_permission: boolean
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          form_language?: string
          id?: string
          is_client?: boolean
          last_name: string
          phone: string
          preferred_language: string
          referrer_email?: string | null
          referrer_name?: string | null
          referrer_organization?: string | null
          referrer_phone?: string | null
          request_description: string
          town_of_residence: string
          voicemail_permission?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          form_language?: string
          id?: string
          is_client?: boolean
          last_name?: string
          phone?: string
          preferred_language?: string
          referrer_email?: string | null
          referrer_name?: string | null
          referrer_organization?: string | null
          referrer_phone?: string | null
          request_description?: string
          town_of_residence?: string
          voicemail_permission?: boolean
        }
        Relationships: []
      }
      volunteer_applications: {
        Row: {
          additional_comments: string | null
          address: string
          age: number
          best_skills: string
          created_at: string
          current_occupation: string
          difficulties: string
          educational_background: string
          email: string
          first_name: string
          form_language: string
          hobbies_and_interests: string
          how_did_you_hear: string
          id: string
          last_name: string
          perception_shaped: string
          phone: string
          previous_volunteer_experience: string
          resume_url: string | null
          why_interested: string
        }
        Insert: {
          additional_comments?: string | null
          address: string
          age: number
          best_skills: string
          created_at?: string
          current_occupation: string
          difficulties: string
          educational_background: string
          email: string
          first_name: string
          form_language?: string
          hobbies_and_interests: string
          how_did_you_hear: string
          id?: string
          last_name: string
          perception_shaped: string
          phone: string
          previous_volunteer_experience: string
          resume_url?: string | null
          why_interested: string
        }
        Update: {
          additional_comments?: string | null
          address?: string
          age?: number
          best_skills?: string
          created_at?: string
          current_occupation?: string
          difficulties?: string
          educational_background?: string
          email?: string
          first_name?: string
          form_language?: string
          hobbies_and_interests?: string
          how_did_you_hear?: string
          id?: string
          last_name?: string
          perception_shaped?: string
          phone?: string
          previous_volunteer_experience?: string
          resume_url?: string | null
          why_interested?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
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
