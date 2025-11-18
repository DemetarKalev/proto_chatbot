# Proto Chatbot

A responsive, production-style chatbot interface built with **React**, **Vite**, **Tailwind CSS**, **shadcn/ui**, and **Bun**.  
It features real-time messaging, a typing indicator, markdown-rendered responses, sound effects, and clean form handling.

---

## Features

- 💬 **Chat-style interface** with user and bot message bubbles
- ⌨️ **Enter-to-send** with Shift+Enter for new lines
- ✨ **Animated typing indicator** for bot responses
- 📝 **Markdown support** for rich bot messages
- 🎵 **Sound effect** on responses to enhance feedback
- ✅ **Form validation** using `react-hook-form`
- 📜 **Scroll-to-latest-message** behavior for long conversations
- 🎨 **Modern UI** with Tailwind + shadcn/ui components
- 🧩 **Modular components** (`ChatBot`, `ChatInput`, `TypingIndicator`, etc.)

---

## Tech Stack

**Frontend**

- React (with functional components and hooks)
- Vite (bundler/dev server)
- Tailwind CSS
- shadcn/ui
- React Hook Form
- React Markdown
- React Icons

**Tooling**

- Bun (runtime/package manager)
- Husky (Git hooks)
- Prettier (code formatting)

**Backend (API)**

- `/api/chat` endpoint returning structured JSON responses
- Axios-based client for making chat requests

---

## Getting Started

### Prerequisites

- **Node.js** or **Bun** installed
- **Git** installed
- A clone of this repository

### Installation

```bash
# Clone the repository
git clone https://github.com/DemetarKalev/proto_chatbot.git
cd proto_chatbot

# Install dependencies (choose one)
# With Bun
bun install

# Or with npm
npm install
```
