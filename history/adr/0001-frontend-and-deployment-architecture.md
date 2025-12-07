# ADR-0001: Frontend and Deployment Architecture

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** Physical AI & Humanoid Robotics Textbook
- **Context:** The project requires a static documentation site that can handle a comprehensive textbook with 13 chapters organized in 4 modules. The solution must support interactive elements, search functionality, and be cost-effective to deploy and maintain. The architecture must also support the integration of dynamic services like authentication and RAG chatbot.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Framework: Docusaurus 3.x with docs plugin for textbook organization
- Content Management: Markdown/MDX files organized by modules and chapters
- Styling: Docusaurus built-in themes with custom CSS for textbook styling
- Deployment: GitHub Pages for static content, Vercel for dynamic services (RAG API, auth)
- Search: Built-in Docusaurus search functionality
- Interactive Elements: Spekit Plus components embedded in content

## Consequences

### Positive

- Fast static site loading with excellent SEO
- Cost-effective hosting on GitHub Pages
- Excellent documentation tooling with built-in features like search, versioning, and responsive design
- Clear separation of concerns between static content and dynamic services
- Well-established ecosystem with good community support
- Built-in support for documentation sites with sidebar navigation for textbook modules

### Negative

- Hybrid deployment model adds operational complexity
- Dependency on Docusaurus ecosystem and upgrade path
- Potential limitations in custom UI interactions compared to custom React apps
- Requires separate management of GitHub Pages and Vercel deployments
- Possible limitations in customizing the user experience for advanced features

## Alternatives Considered

Alternative Stack A: GitBook + Custom Hosting
- Why rejected: Less flexible for custom components and interactive elements, vendor lock-in to GitBook platform

Alternative Stack B: VitePress + Netlify
- Why rejected: Less mature ecosystem for documentation sites, fewer built-in features for textbook organization

Alternative Stack C: Custom React App with Gatsby/Next.js
- Why rejected: Higher development overhead for features that Docusaurus provides out-of-the-box, more complex build and deployment process

## References

- Feature Spec: specs/001-physical-ai-textbook-lock/spec.md
- Implementation Plan: specs/001-physical-ai-textbook-lock/plan.md
- Related ADRs: ADR-0002 (RAG System Architecture), ADR-0003 (Authentication and User Data Architecture)
- Evaluator Evidence: specs/001-physical-ai-textbook-lock/research.md
