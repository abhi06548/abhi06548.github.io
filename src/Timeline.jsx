import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

export default function Timeline() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-gradient-light dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <Navigation dark={dark} setDark={setDark} activeSection={null} />

      <div className="container mx-auto px-6 py-12 max-w-7xl pb-96">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projects Timeline
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A comprehensive view of my professional journey and academic achievements
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* 2025 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2025
            </div>
          </div>

          {/* 2025 - Intuit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-10">
            <motion.div 
              className="text-right pr-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-r-4 border-indigo-600">
                <h3 className="font-bold text-xl mb-2 text-indigo-600 dark:text-indigo-400">Senior Data Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Intuit</p>
                <p className="text-sm text-indigo-500 mb-3">Aug 2025 – Present</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Go-To-Market Tech team. Building data pipelines and analytics solutions to drive business intelligence.
                </p>
              </div>
            </motion.div>
            <div></div>
          </div>

          {/* 2021-2025 Cisco AI-RRM - BETWEEN years */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-10">
            <motion.div 
              className="text-right pr-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-r-4 border-blue-600">
                <h3 className="font-bold text-xl mb-2 text-blue-600 dark:text-blue-400">AI-Enhanced Radio Resource Management</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Cisco Systems</p>
                <p className="text-sm text-blue-500 mb-3">Feb 2021 – Apr 2025</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  AI-driven self-optimizing RF-management cloud services on AWS. Built scalable PySpark ETL pipelines for multi-GB RF telemetry.
                </p>
              </div>
            </motion.div>
            <div></div>
          </div>

          {/* 2021 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2021
            </div>
          </div>

          {/* 2019-2021 Cisco IoT - BETWEEN years */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-10">
            <motion.div 
              className="text-right pr-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-r-4 border-green-600">
                <h3 className="font-bold text-xl mb-2 text-green-600 dark:text-green-400">IoT Operations Center</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Cisco Systems</p>
                <p className="text-sm text-green-500 mb-3">Jul 2019 – Jan 2021</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Developed REST API microservices and backend services for multi-tenant IoT platform with 5 9's availability on AWS.
                </p>
              </div>
            </motion.div>
            <div></div>
          </div>

          {/* 2019 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2019
            </div>
          </div>

          {/* 2018 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2018
            </div>
          </div>

          {/* 2018 - MS Degree & Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 mb-10">
            <div></div>
            <div className="space-y-10 pl-2">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-purple-600">
                  <h3 className="font-bold text-xl mb-2 text-purple-600 dark:text-purple-400">MS Telecommunications Engineering</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">UT Dallas</p>
                  <p className="text-sm text-purple-500 mb-3">2016 – 2018 | GPA: 3.8/4.0</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Advanced Computer Networks, Wireless Communications, SDN, Fog/Edge Computing, IoT Systems Architecture.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-red-600">
                  <h3 className="font-bold text-xl mb-2 text-red-600 dark:text-red-400">Social Media Web-Application</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Academic Project</p>
                  <p className="text-sm text-red-500 mb-3">2018</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Created socio-academic platform (sconnect.xyz) using HTML, CSS, jQuery, PHP, MySQL.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2017 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2017
            </div>
          </div>

          {/* 2017 - Academic Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 mb-10">
            <div></div>
            <div className="space-y-10 pl-2">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-yellow-600">
                  <h3 className="font-bold text-xl mb-2 text-yellow-600 dark:text-yellow-400">IoT-Sensor for Smart Agriculture</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Research Project</p>
                  <p className="text-sm text-yellow-500 mb-3">Jun 2017 – Jun 2019</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Graduate Research Associate. Designed IoT sensor platforms for precision agriculture with embedded Java modules.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-indigo-600">
                  <h3 className="font-bold text-xl mb-2 text-indigo-600 dark:text-indigo-400">Bandwidth Customization on Demand</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Academic Project</p>
                  <p className="text-sm text-indigo-500 mb-3">Oct – Dec 2017</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    SDN-based dynamic bandwidth allocation on Mininet using OpenvSwitch and RYU controller.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-cyan-600">
                  <h3 className="font-bold text-xl mb-2 text-cyan-600 dark:text-cyan-400">Wireless Sensor Water-Quality</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Academic Project</p>
                  <p className="text-sm text-cyan-500 mb-3">Feb – Apr 2017</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    pH and turbidity measurement system using Arduino MKR1000 with Wi-Fi module.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2016 - Fog Computing (before 2016 badge) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-10">
            <div></div>
            <motion.div 
              className="pl-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-teal-600">
                <h3 className="font-bold text-xl mb-2 text-teal-600 dark:text-teal-400">Fog-Node Topology Protocol</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Academic Project</p>
                <p className="text-sm text-teal-500 mb-3">Oct – Dec 2016</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Built fog-topology with UDP packet processing using Java multithreading.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 2016 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2016
            </div>
          </div>

          {/* 2010-2016 - TCS (between 2016 and 2010) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-10">
            <motion.div 
              className="text-right pr-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-r-4 border-gray-600">
                <h3 className="font-bold text-xl mb-2 text-gray-700 dark:text-gray-400">Telecom Billing / Order Service Management</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Tata Consultancy Services</p>
                <p className="text-sm text-gray-500 mb-3">Apr 2010 – Jul 2016</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Developed Java, C, and COBOL backend modules for OSM and billing systems for European telecom clients.
                </p>
              </div>
            </motion.div>
            <div></div>
          </div>

          {/* 2010 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2010
            </div>
          </div>

          {/* 2009-2010 - IEEE Publication (between 2010 and 2009) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-10">
            <div></div>
            <motion.div 
              className="pl-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-orange-600">
                <h3 className="font-bold text-xl mb-2 text-orange-600 dark:text-orange-400">IEEE Publication: OFDM Simulator</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Undergraduate Project</p>
                <p className="text-sm text-orange-500 mb-3">Apr 2009</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Published in IEEE Xplore. MATLAB-based UI for bit-error rate analysis using OFDM.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 2009 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2009
            </div>
          </div>

          {/* 2005-2009 - B.Tech (between 2009 and 2005) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-10">
            <div></div>
            <motion.div 
              className="pl-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-pink-600">
                <h3 className="font-bold text-xl mb-2 text-pink-600 dark:text-pink-400">B.Tech Electrical, Electronics & Communications</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">WBUT Kolkata</p>
                <p className="text-sm text-pink-500 mb-3">2005 – 2009 | Grade: 8.53/10</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Digital/Analog electronics, telecommunication, networking. Completed Infosys Campus Connect Programme.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 2005 Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-pink-600 to-rose-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
              2005
            </div>
          </div>

        </div>
      </div>

      <footer className="text-center py-6 opacity-70 text-sm">© 2025 Abhishek Datta</footer>
    </div>
  );
}
