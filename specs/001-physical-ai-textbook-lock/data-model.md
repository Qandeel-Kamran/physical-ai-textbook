# Data Model: Physical AI & Humanoid Robotics Textbook

## Entity: Textbook
- **Fields**:
  - id: string (UUID)
  - title: string
  - author: string
  - word_count: number
  - readability_score: number (Flesch-Kincaid Grade)
  - publication_date: string (ISO 8601)
  - total_sources: number
  - peer_reviewed_sources: number
- **Relationships**:
  - modules: Module[] (1 to many)

## Entity: Module
- **Fields**:
  - id: string (UUID)
  - name: string
  - description: string
  - order: number
  - textbook_id: string (foreign key)
- **Relationships**:
  - textbook: Textbook (many to 1)
  - chapters: Chapter[] (1 to many)

## Entity: Chapter
- **Fields**:
  - id: string (UUID)
  - title: string
  - content: string (Markdown/MDX)
  - word_count: number
  - chapter_number: number
  - readability_score: number
  - module_id: string (foreign key)
  - sources_count: number
- **Relationships**:
  - module: Module (many to 1)
  - interactive_elements: InteractiveElement[] (1 to many)
  - citations: Citation[] (1 to many)

## Entity: InteractiveElement
- **Fields**:
  - id: string (UUID)
  - type: string (enum: "quiz", "acknowledgment", "video")
  - content: string (HTML/MDX)
  - position: number
  - chapter_id: string (foreign key)
- **Relationships**:
  - chapter: Chapter (many to 1)

## Entity: Citation
- **Fields**:
  - id: string (UUID)
  - title: string
  - authors: string[]
  - journal: string
  - year: number
  - doi: string (optional)
  - url: string (optional)
  - citation_type: string (enum: "peer_reviewed", "book", "web", "other")
  - apa_format: string
  - chapter_id: string (foreign key)
- **Relationships**:
  - chapter: Chapter (many to 1)

## Entity: UserProfile
- **Fields**:
  - id: string (UUID, from auth system)
  - name: string
  - email: string
  - institution: string (optional)
  - hardware_background: string (optional)
  - software_background: string (optional)
  - created_at: string (ISO 8601)
  - updated_at: string (ISO 8601)
- **Relationships**:
  - preferences: ContentPreference (1 to 1)
  - translations: TranslationCache[] (1 to many)

## Entity: ContentPreference
- **Fields**:
  - id: string (UUID)
  - user_id: string (foreign key)
  - difficulty_level: string (enum: "beginner", "intermediate", "expert")
  - language_preferences: string[] (default: ["en"])
  - created_at: string (ISO 8601)
  - updated_at: string (ISO 8601)
- **Relationships**:
  - user_profile: UserProfile (many to 1)

## Entity: TranslationCache
- **Fields**:
  - id: string (UUID)
  - user_id: string (foreign key)
  - original_content_id: string (chapter_id or element_id)
  - original_content_type: string (enum: "chapter", "element")
  - original_text: string
  - translated_text: string
  - target_language: string (default: "ur")
  - model_used: string (enum: "gpt-4o", "gemini-1.5-flash")
  - created_at: string (ISO 8601)
  - expires_at: string (ISO 8601)
- **Relationships**:
  - user_profile: UserProfile (many to 1)

## Entity: RAGSession
- **Fields**:
  - id: string (UUID)
  - user_id: string (optional, for logged-in users)
  - session_id: string (for anonymous users)
  - query: string
  - response: string
  - sources: string[] (IDs of cited content)
  - model_used: string (default: "gpt-4o")
  - created_at: string (ISO 8601)
  - response_time_ms: number
- **Relationships**: None

## Entity: PDFExportJob
- **Fields**:
  - id: string (UUID)
  - user_id: string (optional)
  - export_type: string (enum: "full_book", "single_chapter", "custom_selection")
  - chapter_ids: string[] (for non-full book exports)
  - status: string (enum: "pending", "processing", "completed", "failed")
  - download_url: string (optional, when completed)
  - created_at: string (ISO 8601)
  - completed_at: string (optional, ISO 8601)
- **Relationships**: None

## Validation Rules

### Textbook
- word_count must be between 5,800 and 7,200
- readability_score must be between 10 and 12 (Flesch-Kincaid Grade)
- peer_reviewed_sources must be at least 15 if total_sources is 22

### Chapter
- word_count must contribute to overall textbook target
- chapter_number must be unique within module
- content must include APA citations for all claims

### Citation
- doi or url must be present for peer-reviewed sources
- apa_format must follow APA 7th edition guidelines
- citation_type must match source characteristics

### UserProfile
- email must be valid email format
- hardware_background and software_background are optional but recommended
- All personal information must comply with privacy regulations

### ContentPreference
- difficulty_level must be one of the allowed values
- language_preferences must include at least one valid language code

## State Transitions

### PDFExportJob
- pending → processing → completed/failed
- Status transitions are managed by the PDF generation service