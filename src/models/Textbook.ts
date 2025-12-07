/**
 * Textbook Entity Model
 * Represents the main textbook with metadata and module relationships
 */

export interface Textbook {
  id: string; // UUID
  title: string;
  author: string;
  word_count: number;
  readability_score: number; // Flesch-Kincaid Grade
  publication_date: string; // ISO 8601
  total_sources: number;
  peer_reviewed_sources: number;
  modules?: Module[]; // 1 to many relationship
}

/**
 * Validation rules for Textbook entity
 */
export const validateTextbook = (textbook: Textbook): string[] => {
  const errors: string[] = [];

  if (textbook.word_count < 5800 || textbook.word_count > 7200) {
    errors.push('Word count must be between 5,800 and 7,200');
  }

  if (textbook.readability_score < 10 || textbook.readability_score > 12) {
    errors.push('Readability score must be between 10 and 12 (Flesch-Kincaid Grade)');
  }

  if (textbook.peer_reviewed_sources < 15 && textbook.total_sources === 22) {
    errors.push('Must have at least 15 peer-reviewed sources if total sources is 22');
  }

  return errors;
};