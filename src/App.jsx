import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

export default function App() {
  // Initialize theme based on local time (6 AM - 6 PM = light, otherwise dark)
  const [dark, setDark] = useState(() => {
    const hour = new Date().getHours();
    return hour < 6 || hour >= 18; // Dark mode from 6 PM to 6 AM
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');

  // Update theme based on local time
  useEffect(() => {
    const updateThemeByTime = () => {
      const hour = new Date().getHours();
      const shouldBeDark = hour < 6 || hour >= 18;
      setDark(shouldBeDark);
    };

    // Check every minute for time-based theme changes
    const interval = setInterval(updateThemeByTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Track active section on scroll (scroll spy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['summary', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150;

      // Check if we're at the bottom of the page for contact section
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledToBottom = windowHeight + window.scrollY >= documentHeight - 50;

      if (scrolledToBottom) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll with offset for fixed sidebar
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Increased offset for better alignment
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-light dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Shared Navigation Component */}
      <Navigation dark={dark} setDark={setDark} activeSection={activeSection} />

      <header className="header-gradient text-white py-16 text-center">
        <h1 className="text-4xl font-extrabold fade-in">Abhishek Datta</h1>
        <p className="mt-2 opacity-90 fade-in-delay">Senior Data Engineer • AWS • Spark • Airflow • ETL • AI-driven Analytics</p>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">

        <section id="summary" className="mb-6 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-3">Professional Summary</h2>
          <p>Senior Data Engineer with expertise in large-scale Spark pipelines, AWS analytics, Airflow orchestration, and AI-driven wireless optimization. Delivered 50% latency improvements and modernized observability for production workloads.</p>
        </section>

        <section id="skills" className="mb-8 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-3">Technical Stack</h2>
          <p><strong>Languages:</strong> Python, Java, SQL, Shell scripting</p>
          <p><strong>Frameworks / Big Data:</strong> Apache Spark, PySpark, Pandas, Airflow, Hudi, Kafka</p>
          <p><strong>Cloud:</strong> AWS (S3, Glue, Lambda, EMR, CloudWatch), Databricks, Snowflake</p>
          <p><strong>Databases:</strong> PostgreSQL, MySQL, OpenSearch, PrestoSQL</p>
          <p><strong>DevOps / Infra:</strong> Docker, Kubernetes, GitLab CI/CD, Terraform, Jenkins</p>
          <p><strong>GenAI:</strong> ChatGPT, Gemini, Copilot, Cursor (Prompt engineering & pipeline automation)</p>
        </section>

        <section id="experience" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-3">Experience</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-indigo-600">
              <h3 className="font-semibold text-xl mb-2">Senior Data Engineer — Intuit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">08/2025 – Present</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Go-To-Market Tech team, building data pipelines and analytics solutions for business intelligence.</li>
                <li>Developing scalable data infrastructure to drive customer insights and revenue optimization.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-blue-600">
              <h3 className="font-semibold text-xl mb-2">Senior Data Engineer — Cisco Systems</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">02/2021 – 04/2025</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Developed and optimized scalable ETL pipelines in PySpark/Pandas for multi-GB wireless RF telemetry.</li>
                <li>Designed PostgreSQL schemas and high-performance SQL functions on AWS RDS for trend-based RRM insights.</li>
                <li>Engineered CI/CD and Airflow orchestration for periodic Spark tasks, achieving ~50% latency reduction.</li>
                <li>Owned production monitoring and observability with Datadog, ensuring 99.5%+ reliability.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-green-600">
              <h3 className="font-semibold text-xl mb-2">Software Development Engineer — Cisco Systems</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">07/2019 – 01/2021</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Built REST API microservices for IoT Operations Center, automated PyATS tests, and containerized services on Kubernetes.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-yellow-600">
              <h3 className="font-semibold text-xl mb-2">Graduate Student-Assistant — Distributed Systems Lab, UT Dallas</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">07/2017 – 06/2019</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Modeled IoT sensor firmware and embedded Java modules integrating with backend analytics for smart agriculture.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-purple-600">
              <h3 className="font-semibold text-xl mb-2">Senior Software Developer — Tata Consultancy Services</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">04/2010 – 07/2016</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Developed Java & C services for telecom Order Service Management, improving data latency and customer retention.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-32 mb-20 scroll-mt-24">
          <div className="flex justify-center items-center gap-8">
            {/* Email */}
            <a 
              href="mailto:abhi06548@yahoo.com" 
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              title="Email: abhi06548@yahoo.com"
              aria-label="Email"
            >
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Phone */}
            <a 
              href="tel:+16822569224" 
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              title="Phone: +1 682-256-9224"
              aria-label="Phone"
            >
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/abhishek06548" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              title="LinkedIn: abhishek06548"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/abhi06548" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              title="GitHub: abhi06548"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/abhishek.datta.5243" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              title="Facebook: Abhishek Datta"
              aria-label="Facebook"
            >
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 opacity-70 text-sm">© 2025 Abhishek Datta</footer>
    </div>
  );
}
