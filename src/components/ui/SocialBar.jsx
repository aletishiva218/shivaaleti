import React from 'react';
import ThemeToggle from './ThemeToggle';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/aletishiva218',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
    ),
    tooltip: 'GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/shiva-aleti',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.36v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
    ),
    tooltip: 'LinkedIn',
  },
  {
    name: 'Email',
    href: 'mailto:aletishiva218@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4-4m4 4l-4 4" /></svg>
    ),
    tooltip: 'Email',
  },
];

const SocialBar = () => (
  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
    <div className="flex items-center bg-white dark:bg-gray-900 rounded-full shadow-lg px-3 py-2 space-x-3 border border-gray-200 dark:border-gray-700">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : undefined}
          rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="relative group text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {social.icon}
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-gray-900 text-white text-xs rounded px-2 py-0.5 pointer-events-none whitespace-nowrap z-50">
            {social.tooltip}
          </span>
        </a>
      ))}
      {/* Resume Icon Only */}
      <a
        href="/pdf/Shiva_Aleti.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-gray-900 text-white text-xs rounded px-2 py-0.5 pointer-events-none whitespace-nowrap z-50">
          Resume
        </span>
      </a>
      {/* Divider before ThemeToggle */}
      <span className="h-5 w-px bg-gray-200 dark:bg-gray-700 mx-2" />
      {/* Theme Toggle */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </div>
  </div>
);

export default SocialBar; 