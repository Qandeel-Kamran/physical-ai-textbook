/**
 * Module Entity Model
 * Represents a module within the textbook containing multiple chapters
 */

export interface Module {
  id: string; // UUID
  name: string;
  description: string;
  order: number;
  textbook_id: string; // foreign key
  textbook?: Textbook; // many to 1 relationship
  chapters?: Chapter[]; // 1 to many relationship
}