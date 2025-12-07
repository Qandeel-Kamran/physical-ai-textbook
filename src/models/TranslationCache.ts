/**
 * TranslationCache Entity Model
 * Represents cached translations to reduce API costs and improve performance
 */

export type TranslationModel = 'gpt-4o' | 'gemini-1.5-flash';
export type ContentOriginType = 'chapter' | 'element';

export interface TranslationCache {
  id: string; // UUID
  user_id: string; // foreign key
  original_content_id: string; // chapter_id or element_id
  original_content_type: ContentOriginType;
  original_text: string;
  translated_text: string;
  target_language: string; // default: 'ur' for Urdu
  model_used: TranslationModel;
  created_at: string; // ISO 8601
  expires_at: string; // ISO 8601
  user_profile?: UserProfile; // many to 1 relationship
}