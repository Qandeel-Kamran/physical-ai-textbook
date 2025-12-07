---
id: 3
title: "Textbook Implementation Plan"
stage: "plan"
date: "2025-12-07"
surface: "agent"
model: "claude-sonnet-4-5-20250929"
feature: "physical-ai-textbook-lock"
branch: "001-physical-ai-textbook-lock"
user: "user"
command: "/sp.plan"
labels: ["planning", "textbook", "physical-ai", "architecture"]
links:
  spec: "specs/001-physical-ai-textbook-lock/spec.md"
  plan: "specs/001-physical-ai-textbook-lock/plan.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/001-physical-ai-textbook-lock/plan.md"
  - "specs/001-physical-ai-textbook-lock/research.md"
  - "specs/001-physical-ai-textbook-lock/data-model.md"
  - "specs/001-physical-ai-textbook-lock/contracts/textbook-api.yaml"
  - "specs/001-physical-ai-textbook-lock/quickstart.md"
tests: []
---

# Textbook Implementation Plan

## Prompt Text

```

Section Structure (exact hierarchy – must be followed 1:1)
/docs
├── 01-module-1-ros2
│   ├── 01-introduction.mdx
│   ├── 02-ros2-architecture.mdx
│   ├── 03-urdf-xacro.mdx
│   └── 04-rclpy-programming.mdx
├── 02-module-2-digital-twin
│   ├── 05-gazebo.mdx
│   └── 06-unity.mdx
├── 03-module-3-nvidia-isaac
│   ├── 07-isaac-sim.mdx
│   ├── 08-isaac-ros.mdx
│   └── 09-rl-sim2real.mdx
├── 04-module-4-vla
│   ├── 10-vla-models.mdx
│   ├── 11-conversational-robotics.mdx
│   ├── 12-capstone-project.mdx
│   └── 13-hardware-lab-2025.mdx
└── appendices
    ├── A-urdf-full.mdx
    ├── B-cheat-sheet.mdx
    ├── C-faq.mdx
    ├── D-references.mdx
    └── E-glossary.mdx

Research Approach (concurrent – never block writing)
- One Claude Code subagent per module running in parallel
- Real-time source gathering: web_search + browse_page on NVIDIA, ROS.org, IEEE Xplore, arXiv sanity
- Target: ≥22 total sources, ≥15 peer-reviewed by final submission
- Every factual claim gets an APA citation immediately during writing (no post-facto pass)

Quality Validation Checklist (run after every module)
- Word count: 5,800–7,200 total (exclude code/references)
- Readability: Hemingway App → Flesch-Kincaid Grade 10–12
- Plagiarism: GPTZero + manual Turnitin-style check → 0 %
- Citation audit: 100 % of claims have inline APA with DOI/URL
- Spekit Plus: ≥1 interactive element per chapter (quiz / acknowledgment / video)

Decisions Needing Documentation (with chosen option)
1. Primary VLA model → OpenVLA-7B (open-source, local inference) instead of RT-2 (proprietary)
2. Simulators → Gazebo (physics) + Unity (synthetic data) instead of single simulator
3. Deployment → GitHub Pages (book) + Vercel (RAG API) hybrid instead of Pages-only
4. All 4 bonus features → Implement all (+200 points) instead of skipping any
5. ROS 2 distro → Iron Irwini on Ubuntu 22.04 instead of newer Jazzy (stability)

Testing Strategy (aligned with acceptance criteria)
- Code snippets: Run every ROS 2 example in Docker container
- RAG chatbot: 20 test questions (10 whole-book, 10 selected-text only) → ≥95 % correct
- Personalization: Login → select "beginner" → verify simpler explanations appear
- Urdu translation: Click button → verify Gemini-1.5-flash output is accurate
- End-to-end user flow: Fresh browser → signup → read → interact → download PDF
- Final regression: Deploy to GitHub Pages → open on mobile + desktop → all Spekit elements work

Technical Details & Phasing
Phase 1 – Research (concurrent)        → Subagents active during all writing
Phase 2 – Foundation (Modules 1–2)     → Complete ROS 2 + simulation core
Phase 3 – Analysis (Module 3)          → NVIDIA Isaac deep dive
Phase 4 – Synthesis (Module 4 + bonuses + appendices) → VLA, capstone, hardware, RAG, auth

All writing must respect /sp.constitution (APA, ≥50 % peer-reviewed, 0 % plagiarism, Grade 10–12).

Ready for /sp.implement when you approve this plan.
```

## Response Text

Created comprehensive implementation plan for the Physical AI & Humanoid Robotics Textbook project. Key artifacts generated include:

1. Implementation Plan (plan.md) - Complete architecture and development strategy
2. Research Findings (research.md) - Technical decisions and rationale for all major components
3. Data Model (data-model.md) - Complete entity relationships and validation rules
4. API Contracts (contracts/textbook-api.yaml) - Full OpenAPI 3.0 specification
5. Quickstart Guide (quickstart.md) - Development, testing, and deployment instructions

The plan addresses all specified requirements including Docusaurus 3.x deployment, RAG chatbot with GPT-4o, Better-Auth integration, Urdu translation service, and PDF export functionality. All technical decisions are documented with alternatives considered and rationale for the chosen approach.