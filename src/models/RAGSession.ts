/**
 * RAGSession Entity Model
 * Represents a session with the Retrieval-Augmented Generation system
 */

export type RAGModel = 'gpt-4o' | 'gpt-3.5-turbo' | 'other';

export interface RAGSession {
  id: string; // UUID
  user_id?: string; // optional, for logged-in users
  session_id: string; // for anonymous users
  query: string;
  response: string;
  sources: string[]; // IDs of cited content
  model_used: RAGModel; // default: 'gpt-4o'
  created_at: string; // ISO 8601
  response_time_ms: number;
}