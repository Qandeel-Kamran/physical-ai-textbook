/**
 * ContentPreference Entity Model
 * Represents user's content preferences (difficulty level, language, etc.)
 */

export type DifficultyLevel = 'beginner' | 'intermediate' | 'expert';
export type LanguageCode = string; // e.g., 'en', 'ur', etc.

export interface ContentPreference {
  id: string; // UUID
  user_id: string; // foreign key
  difficulty_level: DifficultyLevel;
  language_preferences: LanguageCode[];
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
  user_profile?: UserProfile; // many to 1 relationship
}

/**
 * Validation rules for ContentPreference entity
 */
export const validateContentPreference = (preference: ContentPreference): string[] => {
  const errors: string[] = [];

  const validDifficultyLevels: DifficultyLevel[] = ['beginner', 'intermediate', 'expert'];
  if (!validDifficultyLevels.includes(preference.difficulty_level)) {
    errors.push(`Difficulty level must be one of: ${validDifficultyLevels.join(', ')}`);
  }

  if (!Array.isArray(preference.language_preferences) || preference.language_preferences.length === 0) {
    errors.push('Language preferences must be an array with at least one valid language code');
  }

  return errors;
};