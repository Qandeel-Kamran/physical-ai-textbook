<!-- Sync Impact Report:
Version change: 1.0.0 → 1.1.0
Modified principles: Replaced existing software principles with academic research principles.
Added sections: Academic Standards, Document Constraints.
Removed sections: Modular Design, API-First Approach, Test-Driven Development (TDD), Robust Integration, Observability & Monitoring, Simplicity and Maintainability (as core principles).
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending (review for alignment with academic principles)
- .specify/templates/spec-template.md: ⚠ pending (review for alignment with academic principles)
- .specify/templates/tasks-template.md: ⚠ pending (review for alignment with academic principles)
- .claude/commands/sp.clarify.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.tasks.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.phr.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.checklist.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.analyze.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.adr.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.plan.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.specify.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.git.commit_pr.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.constitution.md: ✅ updated (general command, no specific alignment needed)
- .claude/commands/sp.implement.md: ✅ updated (general command, no specific alignment needed)
- CLAUDE.md: ✅ updated (general guidance, no specific alignment needed)
Follow-up TODOs: Review and update dependent templates to align with new academic-focused principles and standards.
-->
# Physical AI & Humanoid Robotics Course - Project Constitution

## Core Principles

### I. Accuracy through Primary Source Verification
All factual claims and technical assertions MUST be directly verifiable against primary, authoritative sources. Reliance on secondary sources is permissible only when primary sources are inaccessible or where secondary sources themselves are peer-reviewed and comprehensively cite primaries.

### II. Clarity for Academic Audience (Computer Science Background)
The content MUST be written with clarity and precision, assuming a target audience with a computer science background. Technical concepts must be explained rigorously, avoiding ambiguity and ensuring accessibility for advanced students and researchers.

### III. Reproducibility (All Claims Cited and Traceable)
Every significant claim, experimental result, or theoretical assertion MUST be supported by proper citations, enabling readers to trace back to the original source. The methodology for any presented research MUST be sufficiently detailed to allow for independent reproduction.

### IV. Rigor (Peer-Reviewed Sources Preferred)
The highest standard of academic rigor MUST be maintained. Evidence, arguments, and conclusions must be logically sound and empirically supported. Preference MUST be given to peer-reviewed articles, established textbooks, and reputable academic publications as source material.

## Academic Standards

- **Source Traceability:** All factual claims MUST be traceable to original sources.
- **Citation Format:** All citations and references MUST adhere strictly to APA style guidelines.
- **Source Types:** A minimum of 50% of all cited sources MUST be peer-reviewed academic articles.
- **Plagiarism Check:** The final document MUST pass a plagiarism check with 0% tolerance before submission.
- **Writing Clarity:** The text MUST achieve a Flesch-Kincaid grade level between 10-12 to ensure appropriate academic readability.

## Document Constraints

- **Word Count:** The total word count for the book MUST be between 5,000 and 7,000 words.
- **Minimum Sources:** The book MUST include a minimum of 15 distinct sources.
- **Format:** The final output MUST be in PDF format with all citations correctly embedded.

## Development Workflow

- **Content Review:** All content must undergo review to ensure adherence to academic principles, standards, and factual accuracy.
- **Citation Verification:** A dedicated step for verifying all citations against their respective sources is mandatory.
- **Plagiarism Scan:** Automated and manual plagiarism checks are required before finalization.
- **Documentation:** The process of content creation, source integration, and review must be documented.

## Governance

This constitution serves as the ultimate source of truth for the "Physical AI & Humanoid Robotics Course" project principles and practices, superseding all other informal guidelines.
Amendments to this constitution require a formal proposal, review by core contributors, and approval by project leadership.
Each amendment must be documented with a clear rationale, version bump, and a plan for propagating changes across dependent artifacts.
Compliance with these principles will be regularly reviewed as part of content reviews and project audits.
Use `CLAUDE.md` for specific agent runtime development guidance.

**Version**: 1.1.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07
