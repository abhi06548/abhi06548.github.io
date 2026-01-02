import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

export default function Timeline() {
  const [dark, setDark] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Time-based theme with manual override
  useEffect(() => {
    const hour = new Date().getHours();
    const isNight = hour < 6 || hour >= 18;
    setDark(isNight);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Shared Navigation Component */}
      <Navigation dark={dark} setDark={setDark} activeSection={null} />

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Career & Projects Timeline</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A comprehensive view of my professional journey and academic achievements
          </p>
        </div>

        <div className="relative">
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

          {/* 2018 - RIGHT: Academic (MS Degree + Projects) */}
          <div className="mb-20 relative">
            <div className="flex items-center justify-center mb-8">
              <div className="year-badge sticky top-20 z-10 bg-gradient-to-r from-red-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                2018
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
                          Studied Advanced Computer Networks, Wireless Communications, SDN, Fog/Edge Computing, IoT Systems Architecture, Network Security, and Distributed Systems. Focused on IoT sensor platforms, smart agriculture systems, fog computing architectures, network protocol design, and real-time data processing for connected devices.
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
          </div>

          {/* 2017 - RIGHT: Academic Projects */}
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
                  <div className="timeline-card timeline-card-right bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-yellow-600 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-start gap-4">
                      <img src="/icon-agri.svg" className="icon-hover h-12 w-12 flex-shrink-0 mt-1" alt="agri"/>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 text-yellow-600 dark:text-yellow-400">
                          IoT-Sensor Capabilities for Smart Agriculture <span className="text-gray-500 dark:text-gray-400 text-base font-normal">— Research Project</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Jun 2017 – Jun 2019</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          <strong>Graduate Research Associate</strong> in Distributed Systems Lab under Dr. Subbarayan Venkatesan at UT Dallas. Designed IoT sensor platforms for precision agriculture, combining standalone and self-aware sensors. Developed embedded Java modules and sensor firmware to capture environmental metrics. Integrated wireless communication protocols and backend analytics for real-time data aggregation and predictive insights on distributed sensor networks.
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
      </div>

      <footer className="text-center py-6 opacity-70 text-sm">© 2025 Abhishek Datta</footer>
    </div>
  );
}

