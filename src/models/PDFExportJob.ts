/**
 * PDFExportJob Entity Model
 * Represents a PDF export job for generating textbook PDFs
 */

export type PDFExportType = 'full_book' | 'single_chapter' | 'custom_selection';
export type PDFExportStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface PDFExportJob {
  id: string; // UUID
  user_id?: string; // optional
  export_type: PDFExportType;
  chapter_ids?: string[]; // for non-full book exports
  status: PDFExportStatus;
  download_url?: string; // optional, when completed
  created_at: string; // ISO 8601
  completed_at?: string; // optional, ISO 8601
}

/**
 * State transition validation for PDFExportJob
 */
export const canTransitionTo = (currentStatus: PDFExportStatus, newStatus: PDFExportStatus): boolean => {
  const validTransitions: Record<PDFExportStatus, PDFExportStatus[]> = {
    pending: ['processing', 'failed'],
    processing: ['completed', 'failed'],
    completed: [],
    failed: [] // In some systems, you might allow retrying failed jobs
  };

  return validTransitions[currentStatus]?.includes(newStatus) || false;
};