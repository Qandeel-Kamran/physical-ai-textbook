# Research Findings: Physical AI & Humanoid Robotics Textbook

## Decision: Docusaurus Configuration
- **Rationale**: Docusaurus 3.x provides excellent support for documentation sites with built-in search, versioning, and responsive design. For a textbook with 13 chapters, we'll use the docs plugin with a custom sidebar structure to organize content by modules. The static site generation ensures fast loading times and SEO benefits.
- **Alternatives considered**:
  - GitBook: Good for books but less flexible for custom components
  - VitePress: Newer but less mature ecosystem
  - Custom React app: More control but more development overhead

## Decision: Qdrant Schema Design
- **Rationale**: For the RAG system, we'll structure content in Qdrant with textbook sections as individual vectors. Each chapter will be broken into smaller chunks (sentences or paragraphs) with metadata including chapter, module, and section information. This allows for precise retrieval of relevant content when users ask questions.
- **Schema structure**:
  - Content chunks as vectors
  - Metadata: {chapter_id, module_id, section_title, text}
  - Payload: {content, chapter, module, page_reference}
- **Alternatives considered**:
  - Storing entire chapters as single vectors: Less precise retrieval
  - Storing sentences individually: More granular but potentially fragmented responses

## Decision: Authentication Implementation
- **Rationale**: Better-Auth provides a secure, customizable authentication solution that can be extended to collect additional user information through custom fields. We'll implement a multi-step registration process where users first sign up with basic info (name, email) and then complete the hardware/software questionnaire in their profile.
- **Implementation approach**:
  - Custom user model extending Better-Auth defaults
  - Middleware to ensure questionnaire completion
  - Privacy-compliant data storage
- **Alternatives considered**:
  - Auth.js: More complex setup
  - Custom authentication: Higher security risk, more development time

## Decision: Translation Service Integration
- **Rationale**: For Urdu translation, we'll implement a client-side service that sends content to either GPT-4o or Gemini-1.5-flash based on availability and performance. We'll cache translations to reduce API costs and improve response times. The service will handle technical terms by preserving code and special terminology while translating general text.
- **Implementation approach**:
  - Client-side translation button triggering API call
  - Fallback mechanism between GPT-4o and Gemini-1.5-flash
  - Translation caching with cache invalidation
- **Alternatives considered**:
  - Pre-translated content: Would require double storage and maintenance
  - Browser translation: Lower quality for technical content

## Decision: PDF Export Configuration
- **Rationale**: For comprehensive PDF export including all content elements, we'll use Puppeteer to generate PDFs from the web content. This approach preserves formatting, code blocks, and images while allowing for proper citation linking. We'll implement a server-side endpoint that renders the textbook content in a print-friendly format.
- **Implementation approach**:
  - Server-side rendering with print-optimized CSS
  - Proper handling of code blocks and technical diagrams
  - Clickable links preservation in PDF
- **Alternatives considered**:
  - Client-side PDF generation: Performance issues with large content
  - Markdown to PDF: Less control over formatting
  - Docusaurus built-in PDF: Limited customization options

## Decision: OpenVLA-7B for VLA Implementation
- **Rationale**: OpenVLA-7B is an open-source vision-language-action model that allows for local inference without proprietary restrictions. This is more suitable for educational purposes and ensures long-term maintainability of the textbook examples.
- **Alternatives considered**:
  - RT-2 models: Proprietary and limited access
  - Custom models: Development overhead beyond scope

## Decision: Simulators - Gazebo + Unity
- **Rationale**: Using both Gazebo and Unity provides comprehensive coverage of simulation approaches. Gazebo offers realistic physics simulation for robotics algorithms, while Unity provides high-fidelity rendering for synthetic data generation. This dual approach aligns with industry practices.
- **Alternatives considered**:
  - Single simulator approach: Less comprehensive coverage
  - Other simulators: Less documentation and community support

## Decision: Deployment - GitHub Pages + Vercel Hybrid
- **Rationale**: Static textbook content on GitHub Pages ensures reliability and cost-effectiveness, while dynamic services (RAG API, authentication) on Vercel provide the necessary server-side functionality. This separation of concerns allows for independent scaling and maintenance.
- **Alternatives considered**:
  - All-in-one hosting: Less flexibility and potential performance issues
  - Full server-side solution: Higher costs and complexity

## Decision: ROS 2 Distro - Iron Irwini
- **Rationale**: ROS 2 Iron Irwini on Ubuntu 22.04 provides the best balance of features and stability for educational content. It has long-term support and extensive documentation, making it ideal for textbook examples that need to remain relevant.
- **Alternatives considered**:
  - Jazzy Jalisco: Newer but less stable for educational content
  - Humble Hawksbill: Older but LTS - considered but Iron provides better features