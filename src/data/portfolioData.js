/**
 * Portfolio data configuration
 * Update this file to customize your portfolio content
 */

import dixitlogo from '../assets/images/dixit.webp'
import mldclogo from '../assets/images/mldc.webp'
import gmeslogo from '../assets/images/gmes.webp'
import nsslogo from '../assets/images/nsslogo.webp'
import eukaai from '../assets/images/eukaai.png';
import todolist from '../assets/images/todolist.png';
import tictactoe from '../assets/images/tictactoe.png';
import microsoft from "../assets/images/microsoft.webp";
import microsoft1 from "../assets/images/microsoft1.webp";
import azureAI from "../assets/pdf/AzureAI.pdf";
import excel from "../assets/pdf/excel.pdf";
import principalofresearch from "../assets/pdf/principalofresearch.pdf";
import nss from "../assets/pdf/nss.pdf";

export const portfolioData = {
  // Personal Information
  personal: {
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'hello@example.com',
    location: 'San Francisco, CA',
    bio: "I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
    about: [
      "Hello! I'm John, a software engineer who enjoys creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
      "Fast-forward to today, and I've had the privilege of building software for an advertising agency, a startup, a huge corporation, and a student-led design studio.",
      "My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
      "I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React."
    ],
    status: {
      available: true,
      message: 'Available for new opportunities',
      details: 'Open to full-time positions and interesting projects'
    }
  },

  // Social Links
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:hello@example.com'
  },

  // Skills & Technologies
  skills: {
    categories: [
      {
        title: 'Languages',
        skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML', 'CSS', 'SQL']
      },
      {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Sass']
      },
      {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL']
      },
      {
        title: 'Tools',
        skills: ['Git', 'Docker', 'AWS', 'Figma', 'Postman']
      }
    ],
    additional: [
      'REST APIs', 'GraphQL', 'MongoDB', 'Redis', 'Jest', 'Cypress',
      'Webpack', 'Vite', 'NPM', 'Yarn', 'Linux', 'MacOS',
      'Agile', 'Scrum', 'JIRA', 'Slack', 'Zoom', 'Teams'
    ]
  },

  // Projects
  projects: [
    {
      title: 'Euka AI',
      description: 'Full-stack AI web app with user auth, blog, SEO, analytics, and intelligent interview module generation.',
      technologies: ['React','Python','FastAPI','MongoDB','TailwindCSS'],
      imageUrl: eukaai,
      date: 'April 2025 - Present',
      website: 'https://www.eukaai.com/',
    },
    {
      title: 'To Do List',
      description: 'To-do app with auth, CRUD tasks, date restrictions, status updates, and robust input validation handling.',
      technologies: ['React','Node.js','Express','Scratch','MUI'],
      imageUrl: todolist,
      date: 'June 2024 - June 2024',
      website: 'https://todo-listwebapplication.netlify.app/',
    },
    {
      title: 'Tic Tac Toe',
      description: 'Built responsive tic-tac-toe with game logic, win detection, sound effects, and intuitive UI design.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: tictactoe,
      date: 'March 2024 - March 2024',
      website: 'https://ticgametacgametoegamenew.netlify.app/',
    },
    // Add more projects as needed, following the same structure
  ],

  // Contact Information
  contact: {
    title: "Get In Touch",
    subtitle: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    form: {
      title: "Send me a message",
      fields: [
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com', required: true },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message...', required: true }
      ]
    }
  },

  // Navigation
  navigation: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ],

  // Theme Configuration
  theme: {
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#3b82f6',
      background: '#ffffff',
      text: '#1f2937',
      textLight: '#6b7280'
    },
    fonts: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif'
    }
  },

  // Education
  education: [
    {
      school: 'M.L. Dahanukar College of Commerce',
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      period: '2022 - 2025',
      logo: mldclogo,
      website: "http://www.mldcc.com/"
    },
    {
      school: 'The Greater Mumbai Education Societys School',
      degree: "Schooling (11th to 12th)",
      period: '2020 - 2022',
      logo: gmeslogo,
      website: "https://www.justdial.com/Mumbai/The-Greater-Education-Societys-School-Near-Siddhartha-Society-Vile-Parle-East/022PXX22-XX22-180223222717-B3H6_BZDET"
    },
    {
      school: 'Dixit Road BMC School',
      degree: "Schooling (1st to 10th)",
      period: '2010 - 2020',
      logo: dixitlogo,
      website: 'https://www.justdial.com/Mumbai/Dixit-Road-School-Near-Nehru-Road-Vile-Parle-East/022PXX22-XX22-190715162554-U8L6_BZDET'
    },
  ],

  // Certifications
  certifications: [
    {
      organization: 'M.L. Dahanukar College of Commerce',
      title: "National Service Scheme",
      period: '2022 - 2024',
      logo: nsslogo,
      website: nss
    },
    {
      organization: 'M.L. Dahanukar College of Commerce',
      title: "Principal of Research",
      period: '2024',
      logo: mldclogo,
      website: principalofresearch
    },
    {
      organization: 'Microsoft',
      title: "Microsoft Certified: Azure AI Fundamentals",
      period: '2023',
      logo: microsoft,
      website: azureAI
    },
    {
      organization: 'Microsoft',
      title: "Microsoft Office Specialist",
      period: '2022',
      logo: microsoft1,
      website: excel
    }
  ]
};

export default portfolioData; 