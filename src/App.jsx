import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      const sections = ['summary', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/40 shadow-sm p-4">
        <div className="hidden md:flex gap-6 text-sm items-center justify-between">
          {/* Left aligned navigation links */}
          <div className="flex gap-6 items-center">
            <a 
              href="#summary" 
              onClick={(e) => scrollToSection(e, 'summary')}
              className={`px-3 py-2 rounded transition-all ${
                activeSection === 'summary' 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'hover:underline'
              }`}
            >
              Summary
            </a>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, 'skills')}
              className={`px-3 py-2 rounded transition-all ${
                activeSection === 'skills' 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'hover:underline'
              }`}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection(e, 'experience')}
              className={`px-3 py-2 rounded transition-all ${
                activeSection === 'experience' 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'hover:underline'
              }`}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`px-3 py-2 rounded transition-all ${
                activeSection === 'projects' 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'hover:underline'
              }`}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`px-3 py-2 rounded transition-all ${
                activeSection === 'contact' 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'hover:underline'
              }`}
            >
              Contact
            </a>
            <a 
              href="/Full_time_Resume_DataEngg_final.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
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

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></div>
              <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></div>
              <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></div>
            </div>
          </button>
          
          <button
            onClick={() => setDark((s) => !s)}
            className="px-3 py-1 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black text-xs"
            title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: 'auto' }} 
            exit={{ height: 0 }} 
            className="md:hidden overflow-hidden bg-white dark:bg-black/60 backdrop-blur px-6 py-4 shadow-lg"
          >
            <div className="flex flex-col gap-4 text-sm">
              <a href="#summary" onClick={(e) => { scrollToSection(e, 'summary'); }}>Summary</a>
              <a href="#skills" onClick={(e) => { scrollToSection(e, 'skills'); }}>Skills</a>
              <a href="#experience" onClick={(e) => { scrollToSection(e, 'experience'); }}>Experience</a>
              <a href="#projects" onClick={(e) => { scrollToSection(e, 'projects'); }}>Projects</a>
              <a href="#contact" onClick={(e) => { scrollToSection(e, 'contact'); }}>Contact</a>
              <a href="/Full_time_Resume_DataEngg_final.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-gradient-to-r from-slate-900 to-sky-700 text-white py-16 text-center">
        <h1 className="text-4xl font-extrabold">Abhishek Datta</h1>
        <p className="mt-2 opacity-90">Senior Data Engineer • AWS • Spark • Airflow • ETL • AI-driven Analytics</p>
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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="font-semibold text-xl mb-2">Senior Data Engineer — Cisco Systems</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">02/2021 – Present</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Developed and optimized scalable ETL pipelines in PySpark/Pandas for multi-GB wireless RF telemetry.</li>
                <li>Designed PostgreSQL schemas and high-performance SQL functions on AWS RDS for trend-based RRM insights.</li>
                <li>Engineered CI/CD and Airflow orchestration for periodic Spark tasks, achieving ~50% latency reduction.</li>
                <li>Owned production monitoring and observability with Datadog, ensuring 99.5%+ reliability.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="font-semibold text-xl mb-2">Software Development Engineer — Cisco Systems</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">07/2019 – 01/2021</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Built REST API microservices for IoT Operations Center, automated PyATS tests, and containerized services on Kubernetes.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
              <h3 className="font-semibold text-xl mb-2">Graduate Student-Worker — UT Dallas</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">07/2017 – 06/2019</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Modeled IoT sensor firmware and embedded Java modules integrating with backend analytics for smart agriculture.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <h3 className="font-semibold text-xl mb-2">Senior Software Developer — Tata Consultancy Services</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">04/2010 – 07/2016</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Developed Java & C services for telecom Order Service Management, improving data latency and customer retention.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12 pr-4 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-3">Projects Timeline</h2>
          <div className="relative border-l border-gray-400 dark:border-gray-600 ml-8 pl-8">

            <div className="absolute -left-36 top-0 text-4xl font-extrabold opacity-30 select-none">2025</div>

            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-rrm.svg" className="h-6" alt="rrm"/> AI-Enhanced Radio Resource Management (2021–Present)
              </h3>
              <p className="mt-2">AI-driven self-optimizing RF-management cloud services on AWS for Cisco DNA-Center cloud and Meraki Wireless. Built scalable PySpark ETL pipelines for multi-GB RF telemetry, enabled real-time closed-loop automation, designed PostgreSQL schemas and GraphQL APIs, and implemented CI/CD + Airflow orchestration.</p>
            </motion.div>

            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2021</div>

            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-iot.svg" className="h-6" alt="iot"/> IoT Operations Center (2019–2021)
              </h3>
              <p className="mt-2">Developed REST API microservices and backend services for a multi-tenant IoT operations platform, automated E2E tests with PyATS, containerized services on Kubernetes, and improved real-time device telemetry retrieval and reliability.</p>
            </motion.div>

            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2019</div>

            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-agri.svg" className="h-6" alt="agri"/> IoT-Sensor Capabilities for Smart Agriculture (2017–2019)
              </h3>
              <p className="mt-2">Developed sensor firmware and embedded Java modules to capture environmental metrics, integrated with backend analytics to deliver high-accuracy smart agriculture insights.</p>
            </motion.div>

            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2018</div>

            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-web.svg" className="h-6" alt="web"/> Designing a Social Media Web-Application (2018)
              </h3>
              <p className="mt-2">Created a socio-academic media platform using HTML, CSS, jQuery, PHP (AJAX), and MySQL backend. Focused on scalable design and user engagement workflows.</p>
            </motion.div>

            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2017</div>

            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-net.svg" className="h-6" alt="net"/> Bandwidth Customization on Demand (2017)
              </h3>
              <p className="mt-2">Implemented demand-based bandwidth customization on a Mininet topology using OpenvSwitch and RYU controller, demonstrating SDN-based dynamic bandwidth allocation and QoS enforcement.</p>
            </motion.div>

            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2016</div>

            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-fog.svg" className="h-6" alt="fog"/> Fog-Node Topology Protocol Implementation (2016)
              </h3>
              <p className="mt-2">Designed a fog-node simulation model using Java multithreading and network programming, demonstrating improved latency and service resilience over cloud-only solutions.</p>
            </motion.div>

            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2010</div>

            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-telecom.svg" className="h-6" alt="telecom"/> Telecom Order Service Management — TCS (2010–2016)
              </h3>
              <p className="mt-2">Developed Java and C backend modules for Order Service Management (OSM), improved data throughput, reduced incidents, and enhanced customer retention for telecom customers.</p>
            </motion.div>

          </div>
        </section>

        <section id="contact" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <p><strong>Email:</strong> <a href="mailto:abhi06548@yahoo.com">abhi06548@yahoo.com</a></p>
          <p><strong>Phone:</strong> +1 682-256-9224</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abhishek06548" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/abhishek06548</a></p>
        </section>
      </main>

      <footer className="text-center py-6 opacity-70 text-sm">© 2025 Abhishek Datta</footer>
    </div>
  );
}
