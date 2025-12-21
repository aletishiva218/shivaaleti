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
      technologies: ['React','Node.js','Express','Scratch','MUI','onrender'],
      imageUrl: todolist,
      date: 'June 2024 - June 2024',
      website: 'https://todo-listwebapplication.netlify.app/',
    },
    {
      title: 'Tic Tac Toe',
      description: 'Built fully responsive tic-tac-toe with game logic, win detection, sound effects, and intuitive UI design.',
      technologies: ['HTML', 'CSS', 'JavaScript','Logic Building','DOM Manipulation'],
      imageUrl: tictactoe,
      date: 'March 2024 - March 2024',
      website: 'https://ticgametacgametoegamenew.netlify.app/',
    },
  ],

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