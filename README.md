🤖 Proto Chatbot


A production-ready AI chatbot with stateful conversations, markdown rendering, and serverless architecture.


✨ Features
User Experience

💬 Real-time AI Responses - Powered by OpenAI GPT-4o-mini
🔄 Stateful Conversations - Maintains context across messages
⌨️ Smart Input - Enter to send, Shift+Enter for new lines
📝 Rich Text Support - Full markdown rendering for bot responses
🎵 Audio Feedback - Sound effects for enhanced user interaction
✨ Typing Indicator - Animated loading state during bot processing

Technical Excellence

🏗️ Monorepo Architecture - Clean separation of client/server concerns
⚡ Serverless Backend - Scalable Vercel functions with auto-deployment
🛡️ Type Safety - End-to-end TypeScript with Zod schema validation implemented with Vite
🎨 Modern UI - Tailwind CSS + shadcn/ui component library
📱 Fully Responsive - Optimized for mobile, tablet, and desktop
🔒 Input Validation - React Hook Form with comprehensive error handling

🚀 Live Demo
Try it live here → https://proto-chatbot-two.vercel.app/

🛠️ Tech Stack
Frontend
TechnologyPurposeReact 18UI framework with hooksTypeScriptType safety and developer experienceViteLightning-fast build toolTailwind CSSUtility-first stylingshadcn/uiAccessible component libraryReact Hook FormForm state managementReact MarkdownMarkdown renderingAxiosHTTP client
Backend
TechnologyPurposeNode.jsJavaScript runtimeExpressWeb frameworkOpenAI APIGPT-4o-mini integrationZodRuntime type validationVercel FunctionsServerless deployment
Developer Tools
ToolPurposeBunFast JavaScript runtimeHuskyGit hooksPrettierCode formattingESLintCode linting

📦 Project Structure
proto_chatbot/
├── Packages/
│   ├── Client/          # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   └── assets/
│   │   └── package.json
│   └── Server/          # Express backend
│       ├── controllers/
│       ├── services/
│       ├── repositories/
│       └── package.json
├── api/                 # Vercel serverless functions
│   └── chat.ts
├── vercel.json         # Vercel configuration
└── package.json        # Root dependencies
🏃‍♂️ Getting Started
Prerequisites

Bun (v1.0+) or Node.js (v18+)
OpenAI API key (Get one here)
Git

Installation

Clone the repository

bashgit clone https://github.com/DemetarKalev/proto_chatbot.git
cd proto_chatbot

Install root dependencies

bashbun install

Install package dependencies

bash# Server dependencies
cd Packages/Server
bun install

# Client dependencies
cd ../Client
bun install
cd ../..

Set up environment variables

Create .env in Packages/Server/:
envKEY=your_openai_api_key_here
PORT=3000
Running Locally
Option 1: Run both services (recommended)
bash# Terminal 1 - Start backend server
cd Packages/Server
bun run dev

# Terminal 2 - Start frontend dev server
cd Packages/Client
bun run dev
Option 2: Using concurrently (if configured)
bashbun run dev
Open your browser to http://localhost:5173
Building for Production
bash# Build client
cd Packages/Client
bun run build

# Preview production build
bun run preview
🌐 Deployment
This project is configured for seamless deployment on Vercel.
Deploy to Vercel
Show Image
Manual Deployment:

Fork this repository
Sign up for Vercel
Import your forked repository
Configure build settings:

Build Command: cd Packages/Client && bun install && bun run build
Output Directory: Packages/Client/dist
Install Command: bun install


Add environment variable:

OPENAI_API_KEY: Your OpenAI API key


Deploy!

Environment Variables
VariableDescriptionRequiredOPENAI_API_KEYYour OpenAI API keyYesPORTServer port (local dev only)No (default: 3000)
🎯 Key Technical Implementations
1. Stateful Conversation Management
Utilizes OpenAI's responses API to maintain conversation context across multiple messages, providing coherent, context-aware responses.
2. Monorepo Architecture
Clean separation of concerns with dedicated client and server packages, each with independent dependencies and build processes.
3. Serverless API Functions
Express application converted to Vercel serverless functions for scalable, cost-effective backend infrastructure.
4. Type-Safe API Layer
End-to-end type safety with TypeScript and Zod schema validation, catching errors at compile-time and runtime.
5. Optimized User Experience

Real-time typing indicators
Markdown-rendered responses
Audio feedback for interactions
Smooth scroll-to-bottom behavior
Responsive design across all devices



🧪 API Documentation
POST /api/chat
Send a message to the chatbot.
Request Body:
json{
  "prompt": "Your message here",
  "conversationId": "uuid-v4-string"
}
Response:
json{
  "message": "AI response text"
}
Error Responses:

400 - Invalid request body (validation error)
500 - Server error or OpenAI API failure

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request


👨‍💻 Author
Demetar Kalev


💼 LinkedIn: https://www.linkedin.com/in/demetar-kalev-0ba0aa345/
🐱 GitHub: https://github.com/DemetarKalev
📧 Email: kalevdemetar@gmail.com

🙏 Acknowledgments

OpenAI for the GPT-4o-mini API
shadcn/ui for beautiful components
Vercel for seamless deployment