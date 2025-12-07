/**
 * UserProfile Entity Model
 * Represents user profile information collected during registration
 */

export interface UserProfile {
  id: string; // UUID, from auth system
  name: string;
  email: string;
  institution?: string; // optional
  hardware_background?: string; // optional
  software_background?: string; // optional
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
  preferences?: ContentPreference; // 1 to 1 relationship
  translations?: TranslationCache[]; // 1 to many relationship
}

/**
 * Validation rules for UserProfile entity
 */
export const validateUserProfile = (profile: UserProfile): string[] => {
  const errors: string[] = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(profile.email)) {
    errors.push('Email must be a valid email format');
  }

  return errors;
};