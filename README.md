# Modern Portfolio Website

A clean, modern portfolio website built with React and Tailwind CSS, inspired by the best developer portfolios on the web.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by top developer portfolios
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle animations and transitions for better UX
- **Fast Performance**: Optimized for speed and performance
- **Easy Customization**: Simple data-driven configuration
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   │   └── Button.jsx
│   └── features/     # Main portfolio sections
│       ├── Navigation.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── data/
│   └── portfolioData.js  # All portfolio content
├── App.js
├── index.css
└── index.js
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/data/portfolioData.js` to update your personal information:

```javascript
personal: {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  location: 'Your Location',
  bio: 'Your bio...',
  about: [
    'Your about paragraph 1...',
    'Your about paragraph 2...',
    // Add more paragraphs as needed
  ]
}
```

### 2. Social Links

Update your social media links:

```javascript
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com'
}
```

### 3. Skills & Technologies

Customize your skills by editing the `skills` section:

```javascript
skills: {
  categories: [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'Angular', 'Tailwind CSS']
    }
    // Add more categories
  ],
  additional: [
    'Docker', 'AWS', 'Git', 'Jest'
    // Add more skills
  ]
}
```

### 4. Projects

Update your projects in the `projects` array:

```javascript
projects: [
  {
    title: 'Your Project Name',
    description: 'Detailed description of your project...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '🛒', // Emoji or image URL
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com',
    featured: true // Set to true for featured projects
  }
]
```

### 5. Styling & Colors

Customize the theme colors in the `theme` section:

```javascript
theme: {
  colors: {
    primary: '#2563eb',    // Main brand color
    secondary: '#64748b',  // Secondary color
    accent: '#3b82f6',     // Accent color
    background: '#ffffff',  // Background color
    text: '#1f2937',       // Text color
    textLight: '#6b7280'   // Light text color
  }
}
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- **Mobile-first design**: Optimized for mobile devices
- **Tablet support**: Responsive layouts for tablets
- **Desktop optimization**: Enhanced layouts for larger screens
- **Touch-friendly**: Proper touch targets and interactions

## 🎯 Performance Optimizations

- **Code splitting**: Components are lazy-loaded
- **Image optimization**: Optimized images and icons
- **Minified CSS**: Tailwind CSS is purged and minified
- **Fast loading**: Optimized bundle size

## 🔧 Technologies Used

- **React 19**: Latest React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript features
- **Google Fonts**: Inter font family
- **Responsive Design**: Mobile-first approach

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:

- Open an issue on GitHub
- Contact me at [your-email@example.com]
- Check the documentation for common questions

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build your project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure your domain

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/portfolio"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

---

**Happy coding! 🎉**
