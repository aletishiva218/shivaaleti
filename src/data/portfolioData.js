export const portfolioData = {
  // Projects
  projects: [
    {
      title: 'Hisaab Calculator Hub',
      description: 'Ten everyday Indian calculators in one fast single-page app — EMI, SIP, Income Tax, GST, and more. Runs fully in the browser with no server.',
      technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Google Analytics', 'GitHub Pages'],
      imageUrl: '/images/hisaab-calculator-hub.png',
      date: 'October 2026',
      github: 'https://github.com/aletishiva218/Caclulator',
      website: 'https://aletishiva218.github.io/Caclulator/#emi',
      markdownContent: `## Overview

Hisaab Calculator Hub is a clean, fast single-page application featuring ten everyday Indian calculators, built entirely with vanilla web technologies and running fully in the browser — no server required.

## Calculators Included

- **EMI & Loan** — Monthly instalment, total interest, and full repayment breakdown
- **SIP & FD** — Projected returns for Systematic Investment Plans and Fixed Deposits
- **Income Tax** — Old vs New regime comparison with accurate slab-based calculations
- **GST** — Inclusive and exclusive GST computation across all tax slabs (5%, 12%, 18%, 28%)
- **Percentage & Discount** — Quick percentage, discount, and markup calculations
- **Tip & Bill Split** — Fair bill splitting with customizable tip percentage
- **Amount in Words** — Cheque-ready number-to-words conversion in Indian format (lakhs, crores)
- **Age & Date** — Exact age and date difference down to days
- **Unit Converter** — Supports Indian units (gaj, tola, bigha) alongside standard SI units
- **BMI** — Body Mass Index with WHO health category classification

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and accessibility |
| CSS3 | Responsive, mobile-first styling |
| Vanilla JavaScript | All calculator logic and real-time updates |
| Google Analytics | Usage and engagement tracking |
| GitHub Pages | Free static hosting and CI/CD |

## Key Highlights

- **Zero dependencies** — entirely vanilla JS, no frameworks or libraries
- **Indian number formatting** — lakhs, crores, paise handled natively
- **Instant calculations** — real-time updates on every keypress
- **Privacy-first** — no data ever leaves the browser
- **Mobile-first** — fully responsive on all screen sizes`,
    },
    {
      title: 'TaskBoard',
      description: 'Production-grade real-time collaborative task management with live board sync, JWT auth, Google OAuth, role-based access control, and email notifications.',
      technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Redis', 'Docker'],
      imageUrl: '/images/taskboard.png',
      date: 'May 2026 – September 2026',
      website: 'https://taskboard-murex-nu.vercel.app/',
      markdownContent: `## Overview

TaskBoard is a production-grade real-time collaborative task management application built to handle team workflows with live board synchronization, enterprise-grade authentication, and automated notifications. Deployed to Vercel and ready for real teams.

## Features

- **Real-time Collaboration** — Live board sync across all connected users powered by Socket.io, with optimistic UI updates for zero perceived latency
- **Authentication** — JWT-based auth with Google OAuth integration for frictionless sign-in
- **Role-Based Access Control** — Granular permissions at board and project level (owner, editor, viewer)
- **Email Notifications** — Automated alerts for task assignments, mentions, and approaching deadlines
- **Drag & Drop** — Intuitive Kanban-style card management across columns
- **Responsive UI** — Seamless experience across desktop, tablet, and mobile

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend with SSR and API routes |
| Node.js + Express | REST API backend |
| PostgreSQL | Relational data — users, boards, tasks |
| Socket.io | Real-time bi-directional communication |
| Redis | Session caching and Socket.io adapter |
| Docker | Containerized development and deployment |

## Architecture

The application is built around a clear separation of concerns:

- **Next.js frontend** deployed on Vercel with server-side rendering for fast initial loads
- **Node.js/Express API** handling all business logic and database queries
- **PostgreSQL** managing relational data with proper foreign keys and indexes
- **Redis** caching sessions and acting as the Socket.io adapter for horizontal scaling
- **Docker Compose** ensuring environment parity from local dev to production

## Key Highlights

- Handles concurrent users with conflict-free optimistic UI updates
- Full Google OAuth + JWT refresh token rotation
- Email notification queue with retry logic for reliability
- Containerized deployment with Docker for production consistency`,
    },
    {
      title: 'Euka AI',
      description: 'Full-stack AI web app with user auth, blog, SEO, analytics, and an intelligent interview module that generates custom question sets per role.',
      technologies: ['React', 'Python', 'FastAPI', 'MongoDB', 'TailwindCSS'],
      imageUrl: '/images/eukaai.png',
      date: 'April 2025 – July 2025',
      website: 'https://www.eukaai.com/',
      markdownContent: `## Overview

Euka AI is a full-stack AI-powered web platform designed for intelligent interview preparation and professional development. It features an AI-driven question generation engine that creates tailored question sets based on role, experience level, and skill area.

## Features

- **AI Interview Engine** — Generates custom interview question sets tailored to job role and skill level using large language models
- **User Authentication** — Secure signup and login with session-based authentication and protected routes
- **Blog Platform** — SEO-optimized content management for articles, guides, and resources
- **Analytics Dashboard** — Track user engagement, question attempts, and platform usage metrics
- **Responsive Design** — Fully adaptive layout across all device sizes

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend SPA with component-driven UI |
| Python + FastAPI | High-performance async REST API |
| MongoDB | Flexible document storage for users and content |
| TailwindCSS | Utility-first styling for rapid UI development |

## Architecture

- **Frontend**: React SPA with TailwindCSS delivering a fast, modern interface
- **Backend**: Python FastAPI providing async REST endpoints with Pydantic validation
- **Database**: MongoDB for schema-flexible storage of users, questions, and blog content
- **AI Layer**: LLM integration generating context-aware, role-specific interview questions
- **SEO**: Structured metadata and server-rendered content for organic discoverability

## Key Highlights

- AI generates role-specific questions dynamically — not a static question bank
- End-to-end authentication with secure session handling and protected API routes
- Integrated blog drives organic traffic through SEO-optimized content
- Modular FastAPI architecture allows independent scaling of AI and content services`,
    },
  ],

  // Education
  education: [
    {
      school: 'M.L. Dahanukar College of Commerce',
      degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
      period: '2022 – 2025',
      logo: '/images/mldc.webp',
      website: 'http://www.mldcc.com/',
    },
    {
      school: 'The Greater Mumbai Education Societys School',
      degree: 'Schooling (11th to 12th)',
      period: '2020 – 2022',
      logo: '/images/gmes.webp',
      website:
        'https://www.justdial.com/Mumbai/The-Greater-Education-Societys-School-Near-Siddhartha-Society-Vile-Parle-East/022PXX22-XX22-180223222717-B3H6_BZDET',
    },
    {
      school: 'Dixit Road BMC School',
      degree: 'Schooling (1st to 10th)',
      period: '2010 – 2020',
      logo: '/images/dixit.webp',
      website:
        'https://www.justdial.com/Mumbai/Dixit-Road-School-Near-Nehru-Road-Vile-Parle-East/022PXX22-XX22-190715162554-U8L6_BZDET',
    },
  ],

  // Certifications
  certifications: [
    {
      organization: 'M.L. Dahanukar College of Commerce',
      title: 'National Service Scheme',
      period: '2022 – 2024',
      logo: '/images/nsslogo.webp',
      website: '/pdf/nss.pdf',
    },
    {
      organization: 'M.L. Dahanukar College of Commerce',
      title: 'Principal of Research',
      period: '2024',
      logo: '/images/mldc.webp',
      website: '/pdf/principalofresearch.pdf',
    },
    {
      organization: 'Microsoft',
      title: 'Microsoft Certified: Azure AI Fundamentals',
      period: '2023',
      logo: '/images/microsoft.webp',
      website: '/pdf/AzureAI.pdf',
    },
    {
      organization: 'Microsoft',
      title: 'Microsoft Office Specialist',
      period: '2022',
      logo: '/images/microsoft1.webp',
      website: '/pdf/excel.pdf',
    },
  ],
};

export default portfolioData;
