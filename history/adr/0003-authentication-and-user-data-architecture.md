# ADR-0003: Authentication and User Data Architecture

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** Physical AI & Humanoid Robotics Textbook
- **Context:** The project requires user authentication to enable personalized content, track user progress, and collect background information for content customization. The system must handle user registration, profile management with hardware/software background questionnaire, and maintain privacy compliance. The architecture must support integration with the textbook content personalization and translation features.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Authentication Provider: Better-Auth for secure, customizable authentication
- Database: Neon PostgreSQL for user data storage
- User Profile Structure: Extended Better-Auth user model with custom fields
- Questionnaire Integration: Multi-step registration with hardware/software background collection
- Content Preferences: User-specific difficulty level and language preferences
- Translation Caching: User-specific translation cache with expiration
- Privacy Compliance: GDPR-compliant data handling and storage

## Consequences

### Positive

- Secure, well-maintained authentication solution with good documentation
- Customizable fields for collecting specific user background information
- Privacy-compliant data handling with proper consent mechanisms
- Efficient caching reduces API costs for translation services
- Integration with personalization features for tailored content experience
- Standardized approach to user data management

### Negative

- Additional complexity of managing authentication system
- Need for privacy compliance monitoring and maintenance
- Potential user friction with multi-step registration process
- Data storage costs for user profiles and preferences
- Need for secure handling of background questionnaire data

## Alternatives Considered

Alternative Stack A: Auth.js (NextAuth.js) with custom database
- Why rejected: More complex setup and less flexible for custom questionnaire fields

Alternative Stack B: Custom authentication implementation
- Why rejected: Higher security risk, more development time, potential vulnerabilities

Alternative Stack C: Third-party auth providers only (Google, GitHub)
- Why rejected: Doesn't support collection of specific hardware/software background information required for personalization

## References

- Feature Spec: specs/001-physical-ai-textbook-lock/spec.md
- Implementation Plan: specs/001-physical-ai-textbook-lock/plan.md
- Related ADRs: ADR-0001 (Frontend and Deployment Architecture), ADR-0002 (RAG System Architecture)
- Evaluator Evidence: specs/001-physical-ai-textbook-lock/research.md
