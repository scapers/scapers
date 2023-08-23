export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      discord_profiles: {
        Row: {
          discord_id: string
          display_name: string | null
        }
        Insert: {
          discord_id: string
          display_name?: string | null
        }
        Update: {
          discord_id?: string
          display_name?: string | null
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
