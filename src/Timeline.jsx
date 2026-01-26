import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

export default function Timeline() {
  const [dark, setDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle project click to show details
  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

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

  // Project data with detailed information
  const projectDetails = {
    intuit: {
      title: "Senior Data Engineer",
      company: "Intuit",
      period: "Aug 2025 – Present",
      color: "indigo",
      description: "Go-To-Market Tech team. Building data pipelines and analytics solutions to drive business intelligence.",
      details: [
        "Building scalable data pipelines for business intelligence and analytics",
        "Working with Go-To-Market Tech team on strategic initiatives",
        "Implementing modern data engineering practices and tools",
        "Collaborating with cross-functional teams to deliver data-driven solutions"
      ],
      technologies: ["Python", "SQL", "AWS", "Data Pipelines", "Analytics"]
    },
    cisco_ai: {
      title: "AI-Enhanced Radio Resource Management",
      company: "Cisco Systems",
      period: "Feb 2021 – Apr 2025",
      color: "blue",
      description: "AI-driven self-optimizing RF-management cloud services on AWS. Built scalable PySpark ETL pipelines for multi-GB RF telemetry.",
      details: [
        "Developed AI-powered radio resource management system for WiFi networks",
        "Built scalable PySpark ETL pipelines processing multi-GB RF telemetry data",
        "Implemented machine learning models for predictive RF optimization",
        "Deployed cloud-native services on AWS with high availability",
        "Achieved 30% improvement in network performance through AI optimization"
      ],
      technologies: ["Python", "PySpark", "AWS", "Machine Learning", "RF Engineering", "ETL"]
    },
    cisco_iot: {
      title: "IoT Operations Center",
      company: "Cisco Systems",
      period: "Jul 2019 – Jan 2021",
      color: "green",
      description: "Developed REST API microservices and backend services for multi-tenant IoT platform with 5 9's availability on AWS.",
      details: [
        "Architected and developed REST API microservices for IoT platform",
        "Achieved 99.999% (5 9's) availability for mission-critical services",
        "Implemented multi-tenant architecture supporting thousands of devices",
        "Built scalable backend services on AWS infrastructure",
        "Designed fault-tolerant systems with automated failover"
      ],
      technologies: ["Java", "REST API", "AWS", "Microservices", "IoT", "Multi-tenant Architecture"]
    },
    ms_degree: {
      title: "MS Telecommunications Engineering",
      company: "UT Dallas",
      period: "2016 – 2018 | GPA: 3.8/4.0",
      color: "purple",
      description: "Advanced Computer Networks, Wireless Communications, SDN, Fog/Edge Computing, IoT Systems Architecture.",
      details: [
        "Advanced Computer Networks and Protocol Design",
        "Wireless Communications and Mobile Networks",
        "Software-Defined Networking (SDN) and Network Functions Virtualization",
        "Fog Computing and Edge Computing Architectures",
        "IoT Systems Architecture and Design",
        "Network Security and Cryptography"
      ],
      technologies: ["Networking", "SDN", "IoT", "Wireless", "Fog Computing"]
    },
    social_media: {
      title: "Social Media Web-Application",
      company: "Academic Project",
      period: "2018",
      color: "red",
      description: "Created socio-academic platform (sconnect.xyz) using HTML, CSS, jQuery, PHP, MySQL.",
      details: [
        "Developed full-stack social networking platform for academic community",
        "Implemented user authentication and authorization system",
        "Built real-time messaging and notification features",
        "Designed responsive UI with modern web technologies",
        "Deployed on AWS with MySQL database backend"
      ],
      technologies: ["HTML", "CSS", "jQuery", "PHP", "MySQL", "AWS"]
    },
    iot_agriculture: {
      title: "IoT-Sensor for Smart Agriculture",
      company: "Research Project",
      period: "Jun 2017 – Jun 2019",
      color: "yellow",
      description: "Graduate Research Associate. Designed IoT sensor platforms for precision agriculture with embedded Java modules.",
      details: [
        "Designed and developed IoT sensor platforms for precision agriculture",
        "Implemented embedded Java modules for sensor data collection",
        "Built cloud-based analytics platform for agricultural data",
        "Conducted field trials with real-world deployment scenarios",
        "Published research findings in academic conferences"
      ],
      technologies: ["IoT", "Embedded Systems", "Java", "Sensors", "Cloud Computing"]
    },
    bandwidth: {
      title: "Bandwidth Customization on Demand",
      company: "Academic Project",
      period: "Oct – Dec 2017",
      color: "indigo",
      description: "SDN-based dynamic bandwidth allocation on Mininet using OpenvSwitch and RYU controller.",
      details: [
        "Implemented SDN-based dynamic bandwidth allocation system",
        "Used Mininet for network simulation and testing",
        "Developed custom RYU controller applications",
        "Configured OpenvSwitch for programmable networking",
        "Achieved real-time bandwidth adjustment based on traffic patterns"
      ],
      technologies: ["SDN", "Mininet", "OpenvSwitch", "RYU Controller", "Python"]
    },
    water_quality: {
      title: "Wireless Sensor Water-Quality",
      company: "Academic Project",
      period: "Feb – Apr 2017",
      color: "cyan",
      description: "pH and turbidity measurement system using Arduino MKR1000 with Wi-Fi module.",
      details: [
        "Built wireless sensor system for real-time water quality monitoring",
        "Implemented pH and turbidity sensors with Arduino MKR1000",
        "Developed Wi-Fi communication for remote data transmission",
        "Created web dashboard for data visualization",
        "Deployed prototype in laboratory environment"
      ],
      technologies: ["Arduino", "IoT", "Sensors", "Wi-Fi", "C++"]
    },
    fog_computing: {
      title: "Fog-Node Topology Protocol",
      company: "Academic Project",
      period: "Oct – Dec 2016",
      color: "teal",
      description: "Built fog-topology with UDP packet processing using Java multithreading.",
      details: [
        "Designed and implemented fog computing topology protocol",
        "Built UDP-based packet processing system",
        "Implemented Java multithreading for concurrent packet handling",
        "Optimized latency for edge computing scenarios",
        "Conducted performance analysis and benchmarking"
      ],
      technologies: ["Java", "Fog Computing", "UDP", "Multithreading", "Networking"]
    },
    tcs: {
      title: "Telecom Billing / Order Service Management",
      company: "Tata Consultancy Services",
      period: "Apr 2010 – Jul 2016",
      color: "gray",
      description: "Developed Java, C, and COBOL backend modules for OSM and billing systems for European telecom clients.",
      details: [
        "Developed backend modules for telecom billing systems",
        "Worked with Order Service Management (OSM) platforms",
        "Maintained and enhanced legacy COBOL systems",
        "Built new features using Java and C",
        "Served major European telecom clients",
        "Participated in Agile development processes"
      ],
      technologies: ["Java", "C", "COBOL", "Oracle", "Unix/Linux", "Telecom OSS/BSS"]
    },
    ieee: {
      title: "IEEE Publication: OFDM Simulator",
      company: "Undergraduate Project",
      period: "Apr 2009",
      color: "orange",
      description: "Published in IEEE Xplore. MATLAB-based UI for bit-error rate analysis using OFDM.",
      details: [
        "Developed MATLAB-based OFDM communication simulator",
        "Created graphical UI for bit-error rate (BER) analysis",
        "Implemented various modulation schemes (BPSK, QPSK, QAM)",
        "Conducted performance analysis under different channel conditions",
        "Published findings in IEEE Xplore digital library"
      ],
      technologies: ["MATLAB", "OFDM", "Digital Communications", "Signal Processing"]
    },
    btech: {
      title: "B.Tech Electrical, Electronics & Communications",
      company: "WBUT Kolkata",
      period: "2005 – 2009 | Grade: 8.53/10",
      color: "pink",
      description: "Digital/Analog electronics, telecommunication, networking. Completed Infosys Campus Connect Programme.",
      details: [
        "Core Courses: Digital & Analog Electronics, Telecommunication Engineering",
        "Networking fundamentals and protocols",
        "Microprocessors and Embedded Systems",
        "Signal Processing and Communications",
        "Completed Infosys Campus Connect Programme",
        "Graduated with First Class with Distinction"
      ],
      technologies: ["Electronics", "Telecommunications", "C", "Microprocessors", "Networking"]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-light dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <Navigation dark={dark} setDark={setDark} activeSection={null} />

      <div className="container mx-auto px-6 py-12 max-w-7xl pb-96">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Milestones
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A comprehensive view of my professional journey and academic achievements
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Present Year Badge */}
          <div className="flex justify-center sticky top-20 z-20 mb-8">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-2 rounded-lg font-bold text-lg shadow-lg">
              Present
            </div>
          </div>

          {/* Current - Intuit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-10">
            <motion.div 
              className="text-right pr-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-r-4 border-indigo-600 cursor-pointer"
                onClick={() => handleProjectClick('intuit')}
              >
                <div className="flex items-start justify-end gap-4 mb-3">
                  <img src="/logo-intuit.png" alt="Intuit" className="w-14 h-8 flex-shrink-0 object-contain mt-0.5 bg-white rounded px-1 py-0.5" />
                  <div className="text-right">
                    <h3 className="font-bold text-xl mb-1 text-indigo-600 dark:text-indigo-400">Senior Data Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Intuit</p>
                    <p className="text-sm text-indigo-500">Aug 2025 – Present</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-right">
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
              <div 
                className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-r-4 border-blue-600 cursor-pointer"
                onClick={() => handleProjectClick('cisco_ai')}
              >
                <div className="flex items-start justify-end gap-4 mb-3">
                  <img src="/logo-cisco.png" alt="Cisco" className="w-10 h-10 flex-shrink-0 object-contain -mt-1" />
                  <div className="text-right">
                    <h3 className="font-bold text-xl mb-1 text-blue-600 dark:text-blue-400">AI-Enhanced Radio Resource Management</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Cisco Systems</p>
                    <p className="text-sm text-blue-500">Feb 2021 – Apr 2025</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-right">
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
              <div 
                className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-r-4 border-green-600 cursor-pointer"
                onClick={() => handleProjectClick('cisco_iot')}
              >
                <div className="flex items-start justify-end gap-4 mb-3">
                  <img src="/logo-cisco.png" alt="Cisco" className="w-10 h-10 flex-shrink-0 object-contain -mt-1" />
                  <div className="text-right">
                    <h3 className="font-bold text-xl mb-1 text-green-600 dark:text-green-400">IoT Operations Center</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Cisco Systems</p>
                    <p className="text-sm text-green-500">Jul 2019 – Jan 2021</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-right">
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
                <div 
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-6 pr-6 pl-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-purple-600 cursor-pointer"
                  onClick={() => handleProjectClick('ms_degree')}
                >
                  <div className="flex gap-3">
                    <img src="/icon-education.svg" alt="Education" className="w-10 h-10 flex-shrink-0 object-contain" />
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-purple-600 dark:text-purple-400">MS Telecommunications Engineering</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">UT Dallas</p>
                      <p className="text-sm text-purple-500 mb-3">2016 – 2018 | GPA: 3.8/4.0</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Advanced Computer Networks, Wireless Communications, SDN, Fog/Edge Computing, IoT Systems Architecture.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-6 pr-6 pl-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-red-600 cursor-pointer"
                  onClick={() => handleProjectClick('social_media')}
                >
                  <div className="flex gap-3">
                    <img src="/icon-web.svg" alt="Web" className="w-10 h-10 flex-shrink-0 object-contain" />
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-red-600 dark:text-red-400">Social Media Web-Application</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Academic Project</p>
                      <p className="text-sm text-red-500 mb-3">2018</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Created socio-academic platform (sconnect.xyz) using HTML, CSS, jQuery, PHP, MySQL.
                      </p>
                    </div>
                  </div>
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
                <div 
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-6 pr-6 pl-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-yellow-600 cursor-pointer"
                  onClick={() => handleProjectClick('iot_agriculture')}
                >
                  <div className="flex gap-3">
                    <img src="/icon-agri.svg" alt="Agriculture" className="w-10 h-10 flex-shrink-0 object-contain" />
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-yellow-600 dark:text-yellow-400">IoT-Sensor for Smart Agriculture</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Research Project</p>
                      <p className="text-sm text-yellow-500 mb-3">Jun 2017 – Jun 2019</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Graduate Research Associate. Designed IoT sensor platforms for precision agriculture with embedded Java modules.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-6 pr-6 pl-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-indigo-600 cursor-pointer"
                  onClick={() => handleProjectClick('bandwidth')}
                >
                  <div className="flex gap-3">
                    <img src="/icon-net.svg" alt="Network" className="w-10 h-10 flex-shrink-0 object-contain" />
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-indigo-600 dark:text-indigo-400">Bandwidth Customization on Demand</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Academic Project</p>
                      <p className="text-sm text-indigo-500 mb-3">Oct – Dec 2017</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        SDN-based dynamic bandwidth allocation on Mininet using OpenvSwitch and RYU controller.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-6 pr-6 pl-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-cyan-600 cursor-pointer"
                  onClick={() => handleProjectClick('water_quality')}
                >
                  <div className="flex gap-3">
                    <img src="/icon-water.svg" alt="Water" className="w-10 h-10 flex-shrink-0 object-contain" />
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-cyan-600 dark:text-cyan-400">Wireless Sensor Water-Quality</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Academic Project</p>
                      <p className="text-sm text-cyan-500 mb-3">Feb – Apr 2017</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        pH and turbidity measurement system using Arduino MKR1000 with Wi-Fi module.
                      </p>
                    </div>
                  </div>
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
              <div 
                className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-6 pr-6 pl-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-teal-600 cursor-pointer"
                onClick={() => handleProjectClick('fog_computing')}
              >
                <div className="flex gap-3">
                  <img src="/icon-fog.svg" alt="Fog Computing" className="w-10 h-10 flex-shrink-0 object-contain" />
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-teal-600 dark:text-teal-400">Fog-Node Topology Protocol</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Academic Project</p>
                    <p className="text-sm text-teal-500 mb-3">Oct – Dec 2016</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Built fog-topology with UDP packet processing using Java multithreading.
                    </p>
                  </div>
                </div>
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
              <div 
                className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-r-4 border-gray-600 cursor-pointer"
                onClick={() => handleProjectClick('tcs')}
              >
                <div className="flex items-start justify-end gap-4 mb-3">
                  <img src="/logo-tcs.png" alt="TCS" className="w-12 h-6 flex-shrink-0 object-contain bg-white dark:bg-white rounded px-1 py-0.5 mt-1" />
                  <div className="text-right">
                    <h3 className="font-bold text-xl mb-1 text-gray-700 dark:text-gray-400">Telecom Billing / Order Service Management</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Tata Consultancy Services</p>
                    <p className="text-sm text-gray-500">Apr 2010 – Jul 2016</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-right">
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
              <div 
                className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-6 pr-6 pl-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-orange-600 cursor-pointer"
                onClick={() => handleProjectClick('ieee')}
              >
                <div className="flex gap-3">
                  <img src="/icon-paper.svg" alt="Publication" className="w-10 h-10 flex-shrink-0 object-contain" />
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-orange-600 dark:text-orange-400">IEEE Publication: OFDM Simulator</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Undergraduate Project</p>
                    <p className="text-sm text-orange-500 mb-3">Apr 2009</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Published in IEEE Xplore. MATLAB-based UI for bit-error rate analysis using OFDM.
                    </p>
                  </div>
                </div>
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
              <div 
                className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-6 pr-6 pl-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-pink-600 cursor-pointer"
                onClick={() => handleProjectClick('btech')}
              >
                <div className="flex gap-3">
                  <img src="/icon-education.svg" alt="Education" className="w-10 h-10 flex-shrink-0 object-contain" />
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-pink-600 dark:text-pink-400">B.Tech Electrical, Electronics & Communications</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">WBUT Kolkata</p>
                    <p className="text-sm text-pink-500 mb-3">2005 – 2009 | Grade: 8.53/10</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Digital/Analog electronics, telecommunication, networking. Completed Infosys Campus Connect Programme.
                    </p>
                  </div>
                </div>
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

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (() => {
          const project = projectDetails[selectedProject];
          const colorMap = {
            indigo: {
              border: 'border-indigo-600',
              text: 'text-indigo-600 dark:text-indigo-400',
              textSm: 'text-indigo-500',
              icon: 'text-indigo-600 dark:text-indigo-400',
              badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
            },
            blue: {
              border: 'border-blue-600',
              text: 'text-blue-600 dark:text-blue-400',
              textSm: 'text-blue-500',
              icon: 'text-blue-600 dark:text-blue-400',
              badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            },
            green: {
              border: 'border-green-600',
              text: 'text-green-600 dark:text-green-400',
              textSm: 'text-green-500',
              icon: 'text-green-600 dark:text-green-400',
              badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
            },
            purple: {
              border: 'border-purple-600',
              text: 'text-purple-600 dark:text-purple-400',
              textSm: 'text-purple-500',
              icon: 'text-purple-600 dark:text-purple-400',
              badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
            },
            red: {
              border: 'border-red-600',
              text: 'text-red-600 dark:text-red-400',
              textSm: 'text-red-500',
              icon: 'text-red-600 dark:text-red-400',
              badge: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
            },
            yellow: {
              border: 'border-yellow-600',
              text: 'text-yellow-600 dark:text-yellow-400',
              textSm: 'text-yellow-500',
              icon: 'text-yellow-600 dark:text-yellow-400',
              badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
            },
            cyan: {
              border: 'border-cyan-600',
              text: 'text-cyan-600 dark:text-cyan-400',
              textSm: 'text-cyan-500',
              icon: 'text-cyan-600 dark:text-cyan-400',
              badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
            },
            teal: {
              border: 'border-teal-600',
              text: 'text-teal-600 dark:text-teal-400',
              textSm: 'text-teal-500',
              icon: 'text-teal-600 dark:text-teal-400',
              badge: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300'
            },
            gray: {
              border: 'border-gray-600',
              text: 'text-gray-700 dark:text-gray-400',
              textSm: 'text-gray-500',
              icon: 'text-gray-600 dark:text-gray-400',
              badge: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
            },
            orange: {
              border: 'border-orange-600',
              text: 'text-orange-600 dark:text-orange-400',
              textSm: 'text-orange-500',
              icon: 'text-orange-600 dark:text-orange-400',
              badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
            },
            pink: {
              border: 'border-pink-600',
              text: 'text-pink-600 dark:text-pink-400',
              textSm: 'text-pink-500',
              icon: 'text-pink-600 dark:text-pink-400',
              badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300'
            }
          };
          const colors = colorMap[project.color];
          
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-transparent backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => handleProjectClick(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, type: "spring", damping: 25 }}
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto border border-gray-200/50 dark:border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className={`border-l-4 ${colors.border} pl-6 mb-6`}>
                    <h2 className={`text-3xl font-bold mb-2 ${colors.text}`}>
                      {project.title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-1">
                      {project.company}
                    </p>
                    <p className={`text-sm ${colors.textSm} font-medium`}>
                      {project.period}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Overview</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Highlights</h3>
                    <ul className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className={`w-5 h-5 ${colors.icon} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Technologies & Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <footer className="text-center py-6 opacity-70 text-sm">© 2025 Abhishek Datta</footer>
    </div>
  );
}
