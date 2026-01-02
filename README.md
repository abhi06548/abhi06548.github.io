# Abhishek Datta - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, projects, and contact information.

## Features

- **Multi-Page Routing**: Separate pages for main content and detailed career timeline using React Router
- **Top Navigation Bar**: Clean, left-aligned navigation with section highlighting
- **Time-Based Theme**: Automatically switches between light and dark mode based on local time with manual toggle option
- **Scroll Spy**: Navigation automatically highlights the current section as you scroll
- **Responsive Design**: Mobile-friendly with a collapsible menu
- **Interactive Timeline**: Beautiful career & projects timeline with alternating left/right layout and animations
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **GitHub Pages SPA Support**: Client-side routing works seamlessly on GitHub Pages

## Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing for single-page applications
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **PostCSS & Autoprefixer** - CSS processing tools

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abhi06548/abhi06548.github.io.git
cd abhi06548.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This will generate optimized production files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── App.jsx          # Home page component (Summary, Skills, Experience, Contact)
│   ├── Timeline.jsx     # Career & Projects timeline page
│   ├── main.jsx         # React entry point with React Router setup
│   └── index.css        # Global styles, Tailwind imports, and custom animations
├── public/
│   ├── Full_time_Resume_DataEngg_final.pdf
│   ├── favicon.svg                         # Site favicon
│   ├── 404.html                            # GitHub Pages SPA fallback
│   └── icon-*.svg                          # Various project/skill icons
├── dist/                # Production build output
├── index.html           # HTML template with SPA redirect script
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## Pages

### Home Page (`/`)
Main landing page with quick overview:
- Professional Summary
- Technical Skills
- Work Experience (condensed)
- Contact Information

### Timeline Page (`/timeline`)
Detailed career and projects timeline with:
- Interactive alternating left/right layout
- Industrial/Professional projects (left-aligned)
- Academic history and projects (right-aligned)
- Year-based navigation with sticky badges
- Smooth animations and transitions

## Key Features Explained

### Time-Based Theme System

The application automatically adjusts the theme based on the local time:
- **Light Mode**: 6:00 AM - 5:59 PM
- **Dark Mode**: 6:00 PM - 5:59 AM

Users can also manually toggle the theme using the button in the top-right corner of the navigation bar.

### Navigation Scroll Alignment

The navigation system includes:
- Scroll offset adjustment for precise section alignment
- Active state highlighting for the current section
- Smooth scrolling behavior
- Mobile-responsive collapsible menu

### Responsive Sidebar

- Desktop: Fixed left sidebar (256px wide)
- Mobile: Collapsible overlay menu with hamburger toggle
- Main content automatically adjusts margin on desktop

## Customization

### Updating Content

Edit `src/App.jsx` to update:
- Personal information
- Professional experience
- Skills and technologies
- Project details
- Contact information

### Styling

Modify `tailwind.config.js` for theme customization:
- Colors
- Fonts
- Spacing
- Breakpoints

### Assets

Place images, PDFs, and other static files in the `public/` directory.

## Deployment

This project is configured for GitHub Pages deployment. The built files from the `dist/` directory can be deployed to any static hosting service.

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist/` directory to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

**Abhishek Datta**
- Email: abhi06548@yahoo.com
- Phone: +1 682-256-9224
- LinkedIn: [linkedin.com/in/abhishek06548](https://www.linkedin.com/in/abhishek06548)

---

Built with ❤️ using React, Vite, and Tailwind CSS

