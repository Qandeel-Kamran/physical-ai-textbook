/**
 * Citation Entity Model
 * Represents citations within chapters following APA 7th edition format
 */

export type CitationType = 'peer_reviewed' | 'book' | 'web' | 'other';

export interface Citation {
  id: string; // UUID
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string; // optional
  url?: string; // optional
  citation_type: CitationType;
  apa_format: string;
  chapter_id: string; // foreign key
  chapter?: Chapter; // many to 1 relationship
}

/**
 * Validation rules for Citation entity
 */
export const validateCitation = (citation: Citation): string[] => {
  const errors: string[] = [];

  if (citation.citation_type === 'peer_reviewed' && !citation.doi && !citation.url) {
    errors.push('Peer-reviewed sources must have either a DOI or URL');
  }

  if (!citation.apa_format || citation.apa_format.trim() === '') {
    errors.push('APA format is required and cannot be empty');
  }

  return errors;
};