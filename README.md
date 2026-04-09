# Anli's Blog

A clean and minimal AI-powered blog built with Next.js, React, and Markdown.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 14](https://nextjs.org/) |
| **UI Library** | [React 18](https://react.dev/) |
| **Styling** | Custom CSS |
| **Content** | Markdown (`.md` files via gray-matter) |
| **Rendering** | [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) |
| **Code Highlighting** | [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) |

## AI Model

This blog is powered by **Qwen** (通义千问) by Alibaba Cloud for content generation and full-stack development assistance.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog in your browser.

### Build

```bash
npm run build
npm start
```

## Adding Posts

Create a new `.md` file in the `posts/` directory with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-04-09"
excerpt: "A brief description of the post."
---

# Your Post Title

Content goes here...
```

## Project Structure

```
├── components/        # React components (Header, Footer, Layout)
├── lib/               # Utility functions (posts.js)
├── pages/             # Next.js pages (index, _app, dynamic routes)
├── posts/             # Markdown blog posts
├── styles/            # Global CSS
└── public/            # Static assets
```

## License

MIT
