import { motion } from "framer-motion";

const data = [
  {
    year: "2025 – Present",
    title: "Senior Data Engineer – Cisco",
    points: [
      "AI-enhanced RRM for DNA Center & Meraki",
      "Spark / PySpark ETL pipelines on AWS",
      "Airflow orchestration, Datadog monitoring",
      "50% latency reduction, 99.5% reliability"
    ]
  },
  {
    year: "2019 – 2021",
    title: "Software Development Engineer – Cisco",
    points: [
      "IoT Operations Center (5 9’s SaaS)",
      "Spring Boot, REST APIs, Kubernetes, Docker"
    ]
  },
  {
    year: "2017 – 2019",
    title: "Graduate Student Worker – UT Dallas",
    points: [
      "IoT sensor platforms for smart agriculture",
      "Embedded Java, MySQL, Hibernate"
    ]
  },
  {
    year: "2016 – 2018",
    title: "MS – Telecommunication Engineering",
    points: [
      "GPA 3.8 / 4.0",
      "Distributed systems, SDN, fog computing"
    ]
  },
  {
    year: "2010 – 2016",
    title: "Senior Software Developer – TCS",
    points: [
      "Telecom BSS systems for TDC (Denmark)",
      "Java/C backend services on Unix",
      "95% incident reduction, SLA-driven delivery"
    ]
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="snap-y snap-mandatory">
      {data.map((item, i) => (
        <div key={i} className="min-h-screen snap-start grid grid-cols-[140px_1fr] gap-8 py-24">
          <div className="sticky top-28 text-2xl font-bold text-indigo-600">
            {item.year}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <ul className="list-disc ml-5 space-y-2">
              {item.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </section>
  );
}