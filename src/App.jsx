import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/40 shadow-sm p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          {!dark ? (
            <img src="/logo-light.png" alt="logo" className="h-8" />
          ) : (
            <img src="/logo-dark.png" alt="logo" className="h-8" />
          )}
          <span>Abhishek Datta</span>
        </div>

        <div className="hidden md:flex gap-6 text-sm items-center">
          <a href="#summary" className="hover:underline">Summary</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/Full_time_Resume_DataEngg_final.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
          {/* Desktop theme toggle */}
          <button onClick={() => setDark(!dark)} aria-pressed={dark} className="px-3 py-1 rounded border bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800">
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setDark(!dark)} className="px-3 py-1 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black">
            {dark ? "Light" : "Dark"}
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu" aria-expanded={menuOpen}>
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></div>
              <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></div>
              <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></div>
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} className="md:hidden overflow-hidden bg-white dark:bg:black/60 backdrop-blur px-6 py-4 shadow-lg">
            <div className="flex flex-col gap-4 text-sm">
              <a href="#summary" onClick={() => setMenuOpen(false)}>Summary</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="/Full_time_Resume_DataEngg_final.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume</a>
              <button onClick={() => setMenuOpen(false)} className="mt-2 px-3 py-1 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black">{dark ? "Light" : "Dark"}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <header className="bg-gradient-to-r from-slate-900 to-sky-700 text-white py-16 text-center">
        <h1 className="text-4xl font-extrabold">Abhishek Datta</h1>
        <p className="mt-2 opacity-90">Senior Data Engineer • AWS • Spark • Airflow • ETL • AI-driven Analytics</p>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">

        {/* SUMMARY */}
        <section id="summary" className="mb-6">
          <h2 className="text-2xl font-bold mb-3">Professional Summary</h2>
          <p>Senior Data Engineer with expertise in large-scale Spark pipelines, AWS analytics, Airflow orchestration, and AI-driven wireless optimization. Delivered 50% latency improvements and modernized observability for production workloads.</p>
        </section>

        {/* TECH STACK (moved after summary) */}
        <section id="skills" className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Technical Stack</h2>
          <p><strong>Languages:</strong> Python, Java, SQL, Shell scripting</p>
          <p><strong>Frameworks / Big Data:</strong> Apache Spark, PySpark, Pandas, Airflow, Hudi, Kafka</p>
          <p><strong>Cloud:</strong> AWS (S3, Glue, Lambda, EMR, CloudWatch), Databricks, Snowflake</p>
          <p><strong>Databases:</strong> PostgreSQL, MySQL, OpenSearch, PrestoSQL</p>
          <p><strong>DevOps / Infra:</strong> Docker, Kubernetes, GitLab CI/CD, Terraform, Jenkins</p>
          <p><strong>GenAI:</strong> ChatGPT, Gemini, Copilot, Cursor (Prompt engineering & pipeline automation)</p>
        </section>

        {/* EXPERIENCE - full timeline */}
        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Senior Data Engineer — Cisco Systems (02/2021–Present)</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Developed and optimized scalable ETL pipelines in PySpark/Pandas for multi-GB wireless RF telemetry.</li>
                <li>Designed PostgreSQL schemas and high-performance SQL functions on AWS RDS for trend-based RRM insights.</li>
                <li>Engineered CI/CD and Airflow orchestration for periodic Spark tasks, achieving ~50% latency reduction.</li>
                <li>Owned production monitoring and observability with Datadog, ensuring 99.5%+ reliability.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Software Development Engineer — Cisco Systems (07/2019–01/2021)</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Built REST API microservices for IoT Operations Center, automated PyATS tests, and containerized services on Kubernetes.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Graduate Student-Worker — Distributed Systems Lab, UT Dallas (07/2017–06/2019)</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Modeled IoT sensor firmware and embedded Java modules integrating with backend analytics for smart agriculture.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Senior Software Developer — Tata Consultancy Services (04/2010–07/2016)</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Developed Java & C services for telecom Order Service Management, improving data latency and customer retention.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS TIMELINE (was scrollable; converted to normal flow) */}
        <section id="projects" className="mb-12 pr-4">
          <h2 className="text-2xl font-bold mb-3">Projects Timeline</h2>
          <div className="relative border-l border-gray-400 dark:border-gray-600 ml-8 pl-8">

            {/* YEAR 2025 */}
            <div className="absolute -left-36 top-0 text-4xl font-extrabold opacity-30 select-none">2025</div>

            {/* AI-Enhanced RRM (2021 - Present) */}
            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <span className="absolute -left-11 top-2 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full"></span>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-rrm.svg" className="h-6" alt="rrm"/> AI-Enhanced Radio Resource Management (2021–Present)
              </h3>
              <p className="mt-2">AI-driven self-optimizing RF-management cloud services on AWS for Cisco DNA-Center cloud and Meraki Wireless. Built scalable PySpark ETL pipelines for multi-GB RF telemetry, enabled real-time closed-loop automation, designed PostgreSQL schemas and GraphQL APIs, and implemented CI/CD + Airflow orchestration.</p>
            </motion.div>

            {/* YEAR 2021 */}
            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2021</div>

            {/* IoT Operations Center (2019 - 2021) */}
            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <span className="absolute -left-11 top-2 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full"></span>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-iot.svg" className="h-6" alt="iot"/> IoT Operations Center (2019–2021)
              </h3>
              <p className="mt-2">Developed REST API microservices and backend services for a multi-tenant IoT operations platform, automated E2E tests with PyATS, containerized services on Kubernetes, and improved real-time device telemetry retrieval and reliability.</p>
            </motion.div>

            {/* YEAR 2019 */}
            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2019</div>

            {/* IoT-Sensor Smart Agriculture */}
            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <span className="absolute -left-11 top-2 flex items-center justify-center w-6 h-6 bg-yellow-600 rounded-full"></span>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-agri.svg" className="h-6" alt="agri"/> IoT-Sensor Capabilities for Smart Agriculture (2017–2019)
              </h3>
              <p className="mt-2">Developed sensor firmware and embedded Java modules to capture environmental metrics, integrated with backend analytics to deliver high-accuracy smart agriculture insights.</p>
            </motion.div>

            {/* YEAR 2018 */}
            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2018</div>

            {/* Social Media Web-App */}
            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <span className="absolute -left-11 top-2 flex items-center justify-center w-6 h-6 bg-red-600 rounded-full"></span>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-web.svg" className="h-6" alt="web"/> Designing a Social Media Web-Application (2018)
              </h3>
              <p className="mt-2">Created a socio-academic media platform using HTML, CSS, jQuery, PHP (AJAX), and MySQL backend. Focused on scalable design and user engagement workflows.</p>
            </motion.div>

            {/* YEAR 2017 */}
            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2017</div>

            {/* Bandwidth Customization */}
            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <span className="absolute -left-11 top-2 flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full"></span>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-net.svg" className="h-6" alt="net"/> Bandwidth Customization on Demand (2017)
              </h3>
              <p className="mt-2">Implemented demand-based bandwidth customization on a Mininet topology using OpenvSwitch and RYU controller, demonstrating SDN-based dynamic bandwidth allocation and QoS enforcement.</p>
            </motion.div>

            {/* YEAR 2016 */}
            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2016</div>

            {/* Fog Node */}
            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <span className="absolute -left-11 top-2 flex items-center justify-center w-6 h-6 bg-teal-600 rounded-full"></span>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-fog.svg" className="h-6" alt="fog"/> Fog-Node Topology Protocol Implementation (2016)
              </h3>
              <p className="mt-2">Designed a fog-node simulation model using Java multithreading and network programming, demonstrating improved latency and service resilience over cloud-only solutions.</p>
            </motion.div>

            {/* YEAR 2010 */}
            <div className="absolute -left-36 mt-4 text-4xl font-extrabold opacity-30 select-none">2010</div>

            {/* TCS Telecom */}
            <motion.div className="mb-16 ml-6 snap-start relative" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
              <span className="absolute -left-11 top-2 flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full"></span>
              <h3 className="font-semibold text-lg flex items-center gap-3">
                <img src="/icon-telecom.svg" className="h-6" alt="telecom"/> Telecom Order Service Management — TCS (2010–2016)
              </h3>
              <p className="mt-2">Developed Java and C backend modules for Order Service Management (OSM), improved data throughput, reduced incidents, and enhanced customer retention for telecom customers.</p>
            </motion.div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-20">
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
