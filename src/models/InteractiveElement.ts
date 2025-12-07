/**
 * InteractiveElement Entity Model
 * Represents interactive elements within chapters (quizzes, acknowledgments, videos)
 */

export type InteractiveElementType = 'quiz' | 'acknowledgment' | 'video';

export interface InteractiveElement {
  id: string; // UUID
  type: InteractiveElementType;
  content: string; // HTML/MDX
  position: number;
  chapter_id: string; // foreign key
  chapter?: Chapter; // many to 1 relationship
}