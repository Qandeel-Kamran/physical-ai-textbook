# Physical AI & Humanoid Robotics Textbook

Complete AI-Native Textbook - Final Content Lock

## Project Overview

This project contains a comprehensive Physical AI & Humanoid Robotics textbook with 13 chapters organized in 4 modules:

- Module 1: The Robotic Nervous System (ROS 2) → Chapters 1–4
- Module 2: The Digital Twin (Gazebo & Unity) → Chapters 5–6
- Module 3: The AI-Robot Brain (NVIDIA Isaac™) → Chapters 7–9
- Module 4: Vision-Language-Action (VLA) → Chapters 10–13

## Features

- Interactive Spekit elements (quizzes, acknowledgments, videos)
- Urdu translation capability
- Personalization (beginner ↔ expert mode)
- RAG chatbot for Q&A
- PDF export with clickable citations
- Better-Auth with hardware/software background questionnaire

## Setup

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Architecture

- Frontend: Docusaurus 3.x
- RAG Chatbot: OpenAI Agents/ChatKit + FastAPI + Neon + Qdrant
- Authentication: Better-Auth
- Translation: GPT-4o/Gemini-1.5-flash
- Deployment: GitHub Pages + Vercel hybrid