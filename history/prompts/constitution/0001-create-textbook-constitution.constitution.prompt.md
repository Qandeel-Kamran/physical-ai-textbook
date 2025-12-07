---
id: 0001
title: Create Textbook Constitution
stage: constitution
date: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20251101
feature: none
branch: master
user: user
command: /sp.constitution Create a Textbook for Teaching Physical AI & Humanoid Robotics Course\n\n1. AI/Spec-Driven Book Creation: Write a book using Docusaurus and deploy it to GitHub Pages. You will use Spec-Kit Plus ( https://github.panaversity/spec-kit-plus/ ) and Claude Code ( https://www.claude.com/product/claude-code ) to write the book.\n\nProject: \nPhysical AI & Humanoid Robotics Course\n\nCore principles:\n- Accuracy through primary source verification\n- Clarity for academic audience (computer science background)\n- Reproducibility (all claims cited and traceable)\n- Rigor (peer-reviewed sources preferred)\n\nKey standards:\n- All factual claims must be traceable to sources\n- Citation format: APA style\n- Source types: minimum 50% peer-reviewed articles\n- Plagiarism check: 0% tolerance before submission\n- Writing clarity: Flesch-Kincaid grade 10-12\n\nConstraints:\n- Word count: 5,000-7,000 words\n- Minimum 15 sources\n- Format: PDF with embedded citations\n\nSuccess criteria:\n- All claims verified against sources\n- Zero plagiarism detected\n- Passes fact-checking review
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:

---

## Prompt

 Create a Textbook for Teaching Physical AI & Humanoid Robotics Course

1. AI/Spec-Driven Book Creation: Write a book using Docusaurus and deploy it to GitHub Pages. You will use Spec-Kit Plus ( https://github.com/panaversity/spec-kit-plus/ ) and Claude Code ( https://www.claude.com/product/claude-code ) to write the book.

Project:
Physical AI & Humanoid Robotics Course

Core principles:
- Accuracy through primary source verification
- Clarity for academic audience (computer science background)
- Reproducibility (all claims cited and traceable)
- Rigor (peer-reviewed sources preferred)

Key standards:
- All factual claims must be traceable to sources
- Citation format: APA style
- Source types: minimum 50% peer-reviewed articles
- Plagiarism check: 0% tolerance before submission
- Writing clarity: Flesch-Kincaid grade 10-12

Constraints:
- Word count: 5,000-7,000 words
- Minimum 15 sources
- Format: PDF with embedded citations

Success criteria:
- All claims verified against sources
- Zero plagiarism detected
- Passes fact-checking review

## Response snapshot

Updated project constitution to v1.1.0 with academic principles, standards, and constraints.

## Outcome

- ✅ Impact: Successfully updated the project constitution for academic textbook creation.
- 🧪 Tests: N/A (no tests for constitution update)
- 📁 Files: Updated .specify/memory/constitution.md
- 🔁 Next prompts: Review and update dependent templates; proceed with book content creation.
- 🧠 Reflection: Ensured all academic requirements from the user prompt were incorporated.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
