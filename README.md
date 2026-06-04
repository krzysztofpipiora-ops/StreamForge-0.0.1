# StreamForge 🎮

[![Next.js](https://img.shields.io/badge/Next.js-15.2.5-black?style=flat-square)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy%20on-Vercel-black?style=flat-square)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/streamforge)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/YOUR_USERNAME/streamforge/ci.yml?branch=main&style=flat-square)](https://github.com/YOUR_USERNAME/streamforge/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/YOUR_USERNAME/streamforge/pulls)

StreamForge is an all-in-one streaming hub built with Next.js 14, a liquid glass UI, and an AI assistant for modern broadcast workflows. Manage Twitch, YouTube, Kick, Discord, TikTok, and Facebook from one polished dashboard.

## ✨ Features

- **Multi-platform streaming**
  - Unified Twitch, YouTube, Kick, Discord, TikTok and Facebook account management
  - Single dashboard for titles, categories, and stream metadata
  - Real-time status and viewer previews
- **AI workflow assistant**
  - Smart title and chat moderation suggestions
  - Broadcast scheduler recommendations
  - Automated streamer prompts and productivity workflows
- **Professional studio tools**
  - Liquid glass UI with custom motion and responsive layout
  - Secure authentication via NextAuth and Prisma
  - Performance-first app architecture with server rendering and caching

## 🖥️ Screenshots

![Dashboard](https://placehold.co/1200x630?text=Dashboard)
![Stream Manager](https://placehold.co/1200x630?text=Stream+Manager)
![Moderation](https://placehold.co/1200x630?text=Moderation)
![Schedule](https://placehold.co/1200x630?text=Schedule)
![AI Bot](https://placehold.co/1200x630?text=AI+Bot)

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| --- | --- | --- |
| Frontend | Next.js 14 | Server components, app router, and production build |
| Styling | Tailwind CSS | Responsive UI with glassmorphism and custom animations |
| Auth | NextAuth.js | OAuth authentication for Twitch, Google, and more |
| Database | Prisma + PostgreSQL | Typed models and schema migrations |
| Testing | Vitest + jsdom | Unit testing with coverage reports |
| CI/CD | GitHub Actions + Vercel | Automated validation and deploys |

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm 9+
- PostgreSQL 16+
- Redis (or Upstash account)

### Installation

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/streamforge.git
cd streamforge

# 2. Install dependencies
pnpm install

# 3. Setup environment
cp .env.example .env.local
# Edit .env.local with your values

# 4. Setup database
pnpm db:push
pnpm db:seed

# 5. Start dev server
pnpm dev
```

## 📦 Scripts

- `pnpm dev` — start development server
- `pnpm build` — build production assets
- `pnpm start` — start production server
- `pnpm lint` — run ESLint checks
- `pnpm lint:fix` — auto-fix lint issues
- `pnpm format` — format source files
- `pnpm typecheck` — run TypeScript checks
- `pnpm test` — run unit tests
- `pnpm db:push` — update database schema
- `pnpm db:seed` — seed database with sample data

## 📄 Contributing

Contributions are welcome. Please use conventional commit messages and open pull requests against `main`.


