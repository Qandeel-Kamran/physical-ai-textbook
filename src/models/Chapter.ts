/**
 * Chapter Entity Model
 * Represents a chapter within a module containing content and related elements
 */

export interface Chapter {
  id: string; // UUID
  title: string;
  content: string; // Markdown/MDX
  word_count: number;
  chapter_number: number;
  readability_score: number;
  module_id: string; // foreign key
  sources_count: number;
  module?: Module; // many to 1 relationship
  interactive_elements?: InteractiveElement[]; // 1 to many relationship
  citations?: Citation[]; // 1 to many relationship
}

/**
 * Validation rules for Chapter entity
 */
export const validateChapter = (chapter: Chapter): string[] => {
  const errors: string[] = [];

  if (chapter.chapter_number <= 0) {
    errors.push('Chapter number must be greater than 0');
  }

  // Additional validation can be added based on context and textbook requirements

  return errors;
};