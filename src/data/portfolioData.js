export const portfolioData = {
  // Projects — order: TaskBoard, Euka AI, Hisaab Calculator Hub, AdFree Tube
  projects: [
    {
      title: 'TaskBoard',
      description: 'Production-grade real-time collaborative task management with live board sync, JWT auth, Google OAuth, role-based access control, and email notifications.',
      technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Redis', 'Docker'],
      imageUrl: '/images/taskboard.png',
      date: 'May 2026 – September 2026',
      github: null,
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
      description: 'An AI-powered Product Manager interview prep platform that generates a personalized 12-module full guide or a quick cheat-sheet from your resume, job description, and company name — covering everything from company research to behavioral, product sense, and technical rounds.',
      technologies: [
        'Next.js 16',
        'React 19',
        'Tailwind CSS v4',
        'Redux Toolkit',
        'Framer Motion',
        'BlockNote (rich text editor)',
        'Google OAuth (@react-oauth/google)',
        'Node.js / Express 5',
        'MongoDB / Mongoose',
        'OpenRouter API (Gemini 2.5 Flash)',
        'Stripe',
        'Multer / pdf-parse (PDF resume ingestion)',
        'JWT / bcryptjs',
        'Nodemailer',
      ],
      imageUrl: '/images/eukaai.png',
      date: 'April 2025 – Present',
      github: 'https://github.com/aletishiva218/Interview-Guide',
      website: 'https://www.eukaai.com',
      markdownContent: `## Overview

Euka AI is a full-stack SaaS platform that eliminates the 4+ hours of scattered research that goes into prepping for a Product Manager interview. You paste a job description, optionally upload a PDF resume, and Euka fires 12 parallel LLM calls to build a structured, company-specific interview guide in one shot. A lighter "Quick Guide" mode generates a single-page cheat-sheet with key facts, product focus areas, and round-by-round interview questions.

## Features

- **Full Guide (12 modules)** — Know the Company, Product Research, Recruiter Screen Prep, JD Analysis, Resume Experience to Stand Out, Favourite Product Question, Product Design, Behavioral & Leadership, Analytical Estimation, Product Strategy, Product Sense, and Technical — all generated in parallel
- **Source-backed modules** — the company research, product research, and recruiter-screen modules use Gemini's online mode and return live web citations attached to each section
- **AI summaries** — each source-backed module also gets a synthesised HTML summary generated concurrently as soon as its LLM call resolves
- **Quick Guide** — instant single-page cheat-sheet with key facts, product focus, and interview questions by round
- **PDF resume ingestion** — upload a PDF resume (up to 5 MB); text is extracted server-side and stored against the user so future guides don't require a re-upload
- **Notes per module** — each module ships with a blank notebook backed by the BlockNote rich-text editor
- **Practice questions** — static and AI-generated Q&A sets scoped to each module
- **Freemium + Stripe** — one free guide, then Stripe Checkout / webhook for paid access; subscription cancellation handled via webhook
- **Google OAuth** — one-click sign-in; no passwords
- **Waitlist** — landing-page email capture before account creation

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router), React 19, Tailwind CSS v4 |
| State | Redux Toolkit + React-Redux |
| UI | MUI v7, Radix UI, Lucide icons, Framer Motion |
| Rich text | BlockNote 0.44 |
| Auth (client) | @react-oauth/google, Google OAuth implicit flow |
| Backend | Node.js, Express 5, ES Modules |
| Database | MongoDB Atlas via Mongoose 8 |
| AI | OpenRouter → Google Gemini 2.5 Flash (offline) + Gemini 2.5 Flash Online (live web search + citations) |
| Payments | Stripe (Checkout Sessions + webhooks) |
| File handling | Multer (disk storage), pdf-parse / pdf2json |
| Email | Nodemailer |
| Validation | Joi |
| Auth (server) | JWT (httpOnly cookie), bcryptjs |

## Architecture

The backend is organised as a feature-module monolith — each domain (fullGuide, quickGuide, module, subModule, subModuleContent, moduleSummary, moduleQuestion, moduleQuestionContent, moduleSources, moduleNote, quickGuideKeyFact, quickGuideProductFocus, quickGuideInterviewQuestionsByRound, user, auth, stripe, waitList) lives in its own folder with model / service / controller / routes / validators.

The \`createFullGuide\` controller is the centrepiece: it fires all 12 LLM calls with \`Promise.allSettled\` so a single slow or failing module never blocks the others. The three source modules chain their summary generation directly onto their own promise so summaries start the moment their parent call resolves. Only after all 12 settle does the controller open a MongoDB transaction and bulk-write every document atomically.

## LLM Integration

\`\`\`
OpenRouter (Gemini 2.5 Flash)
  ├── offline model  → structured JSON (Joi schema enforcement via json_schema response format)
  └── online model   → structured JSON + URL citations (web search annotations)
\`\`\`

Responses are constrained with OpenRouter's \`json_schema\` response format and the \`response-healing\` plugin so malformed JSON is automatically repaired before it reaches the application layer.

## Running Locally

\`\`\`bash
# Backend
cd backend-node.js
npm install
npm run dev        # nodemon src/server.js

# Frontend
cd "frontend - next"
npm install
npm run dev        # next dev → http://localhost:3000
\`\`\`

Required env vars: \`MONGODB_URI\`, \`JWT_SECRET\`, \`OPENROUTER_API_KEY\`, \`STRIPE_SECRET_KEY\`, \`STRIPE_WEBHOOK_SECRET\`, \`NEXT_PUBLIC_GOOGLE_CLIENT_ID\`, \`NEXT_PUBLIC_BACKEND_URL\`.`,
    },
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
      title: 'AdFree Tube',
      description: 'An Android app that loads the real YouTube mobile site with uBlock Origin bundled to strip ads, plus true background play — audio keeps going with the screen off or app hidden, with lock-screen and Bluetooth controls.',
      technologies: [
        'Kotlin',
        'Android SDK',
        'GeckoView (Firefox engine)',
        'uBlock Origin (bundled .xpi)',
        'MediaSession API',
        'Foreground Service',
        'Gradle / Kotlin DSL',
      ],
      imageUrl: '/images/adfree-tube.jpeg',
      date: 'October 2026',
      github: 'https://github.com/aletishiva218/youtube-without-ads',
      website: null,
      markdownContent: `## Overview

AdFree Tube is a minimal Android app that wraps the real YouTube mobile site (m.youtube.com) inside Mozilla's GeckoView engine — the same rendering core as Firefox. Because GeckoView is a full browser engine rather than Android's system WebView, Google sign-in works normally, and it can run browser extensions. uBlock Origin is bundled and installed automatically on first launch, stripping every ad before the video player ever sees it. Filter lists update themselves; the extension checks for its own updates once a day.

## Features

- **Ad blocking** — uBlock Origin (.xpi, Mozilla-signed) removes pre-roll, mid-roll and overlay ads
- **Background play** — audio continues with the screen off or the app minimised; a built-in content script keeps YouTube's visibility API "visible" so it never self-pauses
- **Media controls** — playback notification, lock-screen controls, Bluetooth headset buttons, and smartwatch integration via Android's MediaSession API
- **Audio focus** — pauses automatically for phone calls or other audio apps; resumes after short interruptions
- **Headphone unplug** — pauses when wired or Bluetooth audio disconnects
- **Deep links** — YouTube links from any app open directly in AdFree Tube ("Open with")
- **Share target** — share a YouTube link from any app and it loads immediately
- **Crash recovery** — if the GeckoView process dies (e.g. low memory) the app silently reopens the last URL in a fresh tab
- **Single-tab, no chrome** — full-screen edge-to-edge layout with a thin loading progress bar; no address bar or UI clutter

## Tech Stack

| Technology | Purpose |
|---|---|
| Kotlin | App source language |
| Android SDK (API 26–36) | Platform target |
| GeckoView 158 | Firefox rendering engine; enables extensions & Google sign-in |
| uBlock Origin (.xpi) | Bundled ad blocker, auto-updating filter lists |
| MediaSession API | Lock-screen controls, Bluetooth, smartwatch |
| Foreground Service | Background audio keep-alive |
| Gradle Kotlin DSL | Build system with per-ABI APK splits |

## Architecture

The app is intentionally small — six Kotlin files:

- **\`App\`** — holds the single \`GeckoRuntime\` and \`GeckoSession\` across configuration changes
- **\`MainActivity\`** — attaches GeckoView, handles fullscreen, back navigation, deep links, and screen/surface lifecycle
- **\`MediaPlayback\`** — singleton bridge between GeckoView's \`MediaSession\` events and \`PlaybackService\`
- **\`PlaybackService\`** — foreground media service: notification, audio focus, wake/Wi-Fi locks, headphone unplug receiver
- **\`Extensions\`** — installs and updates uBlock Origin and the background-play script into the engine
- **\`UrlPolicy\`** — decides which URLs stay in-app (YouTube/Google) and which open in external apps

## Build

\`\`\`
set JAVA_HOME=%USERPROFILE%\\.jdks\\jdk-21.0.12.1+1
gradlew assembleRelease
\`\`\`

Produces three small APKs split by CPU architecture (arm64-v8a, armeabi-v7a, x86_64). Sideload the arm64 build on any modern Android phone.`,
    },
  ],

  // Education — all 3 entries kept; B.Sc. IT updated with university + CGPI
  education: [
    {
      school: 'M.L. Dahanukar College of Commerce, University of Mumbai',
      degree: 'Bachelor of Science in Information Technology (B.Sc. IT) | CGPI: 8.53/10',
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

  // Certifications — reordered: Azure AI first, then MOS
  certifications: [
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

  // Activities — moved from certifications; same logos/links kept
  activities: [
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
  ],
};

export default portfolioData;
