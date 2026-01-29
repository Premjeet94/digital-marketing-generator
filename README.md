AI Marketing Asset Generator

A simple full-stack web application that uses AI to generate structured marketing copy (headline, caption, and call-to-action) based on user input.

This project demonstrates frontend + backend integration with an AI model, focusing on clean architecture, prompt control, and real-world usability.

🚀 What This App Does

Users provide basic marketing context such as:

Business type

Platform (Instagram, Website, Ads)

Tone

Goal

Product name (optional)

The app then uses an AI model to generate:

Headline

Caption

Call-to-Action (CTA)

All outputs are returned in a structured JSON format and displayed in a clean UI with copy-to-clipboard support.

🧠 Why This Is Useful

Small businesses and creators often struggle to write effective marketing copy.
This app reduces that friction by turning plain inputs into ready-to-use content in seconds.

🏗️ Tech Stack

Frontend

Next.js (App Router)

React

TypeScript

Tailwind CSS

Backend

Next.js API Routes

AI Integration

OpenRouter API (OpenAI-compatible)

Model: LLaMA 3.1 (70B Instruct)

🧩 Architecture Overview
Browser (UI)
   ↓
Next.js Page (Form + State)
   ↓
POST /api/generate
   ↓
AI Provider (via OpenRouter)
   ↓
Structured JSON Response
   ↓
UI Output Cards

Key design decisions:

AI calls are handled only on the backend

API keys are never exposed to the browser

AI output is strictly controlled using prompt design

✨ Key Features

Clean, single-page UI

Structured AI output (JSON)

Copy-to-clipboard with feedback

Loading, empty, and error states

Provider-agnostic AI integration

📂 Project Structure
app/
  ├── page.tsx
  └── api/generate/route.ts
components/
  ├── Form.tsx
  └── Header.tsx
  └── Output.tsx
lib/
  └── openai.ts

  🔧 Running Locally
1. Clone the repository
git clone <your-repo-url>
cd ai-marketing-generator

2. Install dependencies
npm install

3. Add environment variables

Create a .env.local file in the root:

OPENROUTER_API_KEY=your_openrouter_api_key_here

4. Start the dev server
npm run dev


Open http://localhost:3000
 in your browser.

⚠️ Limitations

No user authentication

No history or saved results

Basic styling by design (focus on functionality)

These were intentional to keep the scope tight and execution focused.

📌 Learnings

Building secure AI-powered backends

Prompt engineering for structured outputs

Separating client and server responsibilities in Next.js

Handling AI latency, errors, and UX states

📄 License

This project is for learning and demonstration purposes.