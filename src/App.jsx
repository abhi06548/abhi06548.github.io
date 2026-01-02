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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
              <h3 className="font-semibold text-xl mb-2">Senior Data Engineer — Intuit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">08/2025 – Present</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Go-To-Market Tech team, building data pipelines and analytics solutions for business intelligence.</li>
                <li>Developing scalable data infrastructure to drive customer insights and revenue optimization.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="font-semibold text-xl mb-2">Senior Data Engineer — Cisco Systems</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">02/2021 – 04/2025</p>
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

        <section id="projects" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-12 text-left">Career & Projects Timeline</h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Central Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 timeline-line"></div>

            {/* 2025 - LEFT: Intuit */}
            <div className="mb-20 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2025
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <motion.div 
                  className="relative text-right"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card timeline-card-left bg-white dark:bg-gray-800 rounded-xl p-6 border-r-4 border-indigo-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4 flex-row-reverse">
                      <img src="/icon-intuit.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="intuit"/>
                      <div className="flex-1 text-right">
                        <h3 className="font-bold text-xl mb-2 text-indigo-600 dark:text-indigo-400">
                          Senior Data Engineer <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Intuit</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Aug 2025 – Present</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          Go-To-Market Tech team. Building data pipelines and analytics solutions to drive business intelligence and customer insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div></div>
              </div>
            </div>

            {/* 2021-2025 - LEFT: Industrial (Cisco AI-RRM) */}
            <div className="mb-20 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2021
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <motion.div 
                  className="relative text-right"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card timeline-card-left bg-white dark:bg-gray-800 rounded-xl p-6 border-r-4 border-blue-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4 flex-row-reverse">
                      <img src="/icon-rrm.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="rrm"/>
                      <div className="flex-1 text-right">
                        <h3 className="font-bold text-xl mb-2 text-blue-600 dark:text-blue-400">
                          AI-Enhanced Radio Resource Management <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Cisco Systems</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Feb 2021 – Apr 2025</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          AI-driven self-optimizing RF-management cloud services on AWS for Cisco DNA-Center cloud and Meraki Wireless. Built scalable PySpark ETL pipelines for multi-GB RF telemetry, enabled real-time closed-loop automation, designed PostgreSQL schemas and GraphQL APIs for dashboard widgets.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div></div>
              </div>
            </div>

            {/* 2019-2021 - LEFT: Industrial (Cisco IoT OpsCenter) */}
            <div className="mb-20 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2019
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <motion.div 
                  className="relative text-right"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card timeline-card-left bg-white dark:bg-gray-800 rounded-xl p-6 border-r-4 border-green-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4 flex-row-reverse">
                      <img src="/icon-iot.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="iot"/>
                      <div className="flex-1 text-right">
                        <h3 className="font-bold text-xl mb-2 text-green-600 dark:text-green-400">
                          IoT Operations Center <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Cisco Systems</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Jul 2019 – Jan 2021</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          Developed REST API microservices and backend services for a multi-tenant IoT operations platform with 5 9's availability on AWS. Automated E2E tests with PyATS, containerized services on Kubernetes, and improved real-time device telemetry retrieval.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div></div>
              </div>
            </div>

            {/* 2018 - RIGHT: Academic Project (Social Media App) */}
            <div className="mb-20 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-red-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2018
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <div></div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-red-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4">
                      <img src="/icon-web.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="web"/>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 text-red-600 dark:text-red-400">
                          Social Media Web-Application <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Academic Project</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2018</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          Created a socio-academic media platform (sconnect.xyz) using HTML, CSS, jQuery, PHP (AJAX), and MySQL backend. Focused on scalable design and user engagement workflows for student connectivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 2017 - RIGHT: Academic (MS Education + Projects) */}
            <div className="mb-20 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2017
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-start">
                <div></div>
                <div className="space-y-8">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-purple-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-start gap-4">
                        <img src="/icon-education.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="education"/>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2 text-purple-600 dark:text-purple-400">
                            MS Telecommunications Engineering <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— UT Dallas</span>
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2016 – 2018 | GPA: 3.8/4.0</p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            Graduate research in Distributed Systems Lab under Dr. Subbarayan Venkatesan. Focused on advanced computer networks, IoT sensor platforms, smart agriculture, fog computing, SDN, and wireless communications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                  >
                    <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-yellow-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-start gap-4">
                        <img src="/icon-agri.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="agri"/>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2 text-yellow-600 dark:text-yellow-400">
                            IoT-Sensor Capabilities for Smart Agriculture <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Research Project</span>
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Jun 2017 – Present</p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            Working as graduate research associate on a combination of standalone and self-aware sensors. Developed sensor firmware and embedded Java modules to capture environmental metrics, integrated with backend analytics for smart agriculture.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                  >
                    <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-indigo-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-start gap-4">
                        <img src="/icon-net.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="net"/>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2 text-indigo-600 dark:text-indigo-400">
                            Bandwidth Customization on Demand <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Academic Project</span>
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Oct 2017 – Dec 2017</p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            Implemented demand-based bandwidth customization on Mininet network topology using OpenvSwitch and RYU controller. Demonstrated SDN-based dynamic bandwidth allocation and QoS enforcement with Python APIs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                  >
                    <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-cyan-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                      <div className="flex items-start gap-4">
                        <img src="/icon-water.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="water"/>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2 text-cyan-600 dark:text-cyan-400">
                            Wireless Sensor Water-Quality Measurement <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Academic Project</span>
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Feb 2017 – Apr 2017</p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            Built pH and turbidity measurement system using Arduino MKR1000 with Wi-Fi module to upload sensor data to Linux server. Implemented email alerts for water quality threshold violations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* 2016 - RIGHT: Academic Projects */}
            <div className="mb-20 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2016
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <div></div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-teal-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4">
                      <img src="/icon-fog.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="fog"/>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 text-teal-600 dark:text-teal-400">
                          Fog-Node Topology Protocol <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Academic Project</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Oct 2016 – Dec 2016</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          Designed and implemented fog computing concept model. Built working fog-topology with UDP packet processing using Java multithreading and network programming, demonstrating improved latency and service resilience over cloud-only solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 2010-2016 - LEFT: Industrial (TCS) */}
            <div className="mb-20 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2010
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <motion.div 
                  className="relative text-right"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card timeline-card-left bg-white dark:bg-gray-800 rounded-xl p-6 border-r-4 border-gray-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4 flex-row-reverse">
                      <img src="/icon-telecom.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="telecom"/>
                      <div className="flex-1 text-right">
                        <h3 className="font-bold text-xl mb-2 text-gray-600 dark:text-gray-400">
                          Telecom Billing / Order Service Management <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Tata Consultancy Services</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Apr 2010 – Jul 2016</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          Developed Java, C, and COBOL backend modules for Order Service Management (OSM) and billing systems for European telecom clients (TDC Denmark, ING Netherlands). Improved data throughput, reduced production incidents by 95%, enhanced customer retention, and performed functional consulting for telecom operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div></div>
              </div>
            </div>

            {/* 2009 - RIGHT: IEEE Publication */}
            <div className="mb-20 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2009
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <div></div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-orange-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4">
                      <img src="/icon-paper.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="paper"/>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 text-orange-600 dark:text-orange-400">
                          IEEE Publication: OFDM Simulator <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Undergraduate Project</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Apr 2009</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          Published in IEEE Xplore: "Design and Implementation of a Simulator for the Analysis of Bit-Error Rates by using Orthogonal Frequency Division Multiplexing." Built MATLAB-based UI for graphical and pictorial analysis of bit-error rates through manipulation of modulation techniques in various transmission channels.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 2005-2009 - RIGHT: Undergraduate Degree */}
            <div className="mb-8 relative">
              <div className="flex items-center justify-center mb-8">
                <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-pink-600 to-rose-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  2005
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <div></div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-pink-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4">
                      <img src="/icon-education.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="education"/>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 text-pink-600 dark:text-pink-400">
                          B.Tech Electrical, Electronics & Communications <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— WBUT Kolkata</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2005 – 2009 | Grade: 8.53/10</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          Studied Digital/Analog electronics, telecommunication, and networking. Completed Infosys Campus Connect Programme industrial training. Final-year project on OFDM Simulator published in IEEE conference proceedings.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:abhi06548@yahoo.com" className="contact-link font-medium">abhi06548@yahoo.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href="tel:+16822569224" className="contact-link font-medium">+1 682-256-9224</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/abhishek06548" target="_blank" rel="noopener noreferrer" className="contact-link font-medium">linkedin.com/in/abhishek06548</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 opacity-70 text-sm">© 2025 Abhishek Datta</footer>
    </div>
  );
}
