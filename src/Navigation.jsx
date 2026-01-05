import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navigation({ dark, setDark, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Handle navigation - either scroll on home page or navigate to home + scroll
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    
    if (isHomePage) {
      // Already on home page, just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      // Small delay to ensure page is loaded before scrolling
      setTimeout(() => scrollToSection(sectionId), 100);
    }
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/40 shadow-sm p-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-sm items-center justify-between">
        {/* Left aligned navigation links */}
        <div className="flex gap-6 items-center">
          <a
            href="#summary"
            onClick={(e) => handleNavigation(e, 'summary')}
            className={`px-3 py-2 rounded transition-all ${
              isHomePage && activeSection === 'summary'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:underline hover:bg-blue-50 dark:hover:bg-gray-800'
            }`}
          >
            Summary
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavigation(e, 'skills')}
            className={`px-3 py-2 rounded transition-all ${
              isHomePage && activeSection === 'skills'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:underline hover:bg-blue-50 dark:hover:bg-gray-800'
            }`}
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => handleNavigation(e, 'experience')}
            className={`px-3 py-2 rounded transition-all ${
              isHomePage && activeSection === 'experience'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:underline hover:bg-blue-50 dark:hover:bg-gray-800'
            }`}
          >
            Experience
          </a>
          <Link
            to="/projects"
            className={`px-3 py-2 rounded transition-all ${
              location.pathname === '/projects'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:underline hover:bg-blue-50 dark:hover:bg-gray-800'
            }`}
          >
            Projects
          </Link>
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, 'contact')}
            className={`px-3 py-2 rounded transition-all ${
              isHomePage && activeSection === 'contact'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:underline hover:bg-blue-50 dark:hover:bg-gray-800'
            }`}
          >
            Contact
          </a>
          <a
            href="/Full_time_Resume_DataEngg_final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:bg-blue-50 dark:hover:bg-gray-800 px-3 py-2 rounded transition-all"
          >
            Resume
          </a>
        </div>

        {/* Right aligned theme toggle button */}
        <button
          onClick={() => setDark((s) => !s)}
          className="px-3 py-1 rounded border bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
          title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-lg font-semibold"
          aria-label="Toggle menu"
        >
          ☰ Menu
        </button>
        <button
          onClick={() => setDark((s) => !s)}
          className="px-3 py-1 rounded border bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
          title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="flex flex-col gap-4 text-sm">
            <a 
              href="#summary" 
              onClick={(e) => handleNavigation(e, 'summary')}
              className={`${isHomePage && activeSection === 'summary' ? 'font-bold text-blue-600' : ''}`}
            >
              Summary
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavigation(e, 'skills')}
              className={`${isHomePage && activeSection === 'skills' ? 'font-bold text-blue-600' : ''}`}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleNavigation(e, 'experience')}
              className={`${isHomePage && activeSection === 'experience' ? 'font-bold text-blue-600' : ''}`}
            >
              Experience
            </a>
            <Link 
              to="/projects" 
              onClick={() => setMenuOpen(false)}
              className={`${location.pathname === '/projects' ? 'font-bold text-blue-600' : ''}`}
            >
              Projects
            </Link>
            <a 
              href="#contact" 
              onClick={(e) => handleNavigation(e, 'contact')}
              className={`${isHomePage && activeSection === 'contact' ? 'font-bold text-blue-600' : ''}`}
            >
              Contact
            </a>
            <a 
              href="/Full_time_Resume_DataEngg_final.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

