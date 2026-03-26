export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "ccgui",
    title: "Carbon Capture GUI",
    description: "A desktop application for monitoring and controlling carbon capture systems with real-time data visualization and ML-based predictions.",
    image: "/PROJECT_CCGUI.png",
    tech: ["Python", "PyQt5", "TensorFlow", "Matplotlib"],
    github: "https://github.com/fadilnurmaulid/carbon-capture-gui",
  },
  {
    id: "kfse",
    title: "Knowledge-First Search Engine",
    description: "An intelligent search engine leveraging NLP and knowledge graphs to deliver contextually relevant results beyond keyword matching.",
    image: "/PROJECT_KFSE.png",
    tech: ["Python", "FastAPI", "BERT", "Neo4j", "React"],
    github: "https://github.com/fadilnurmaulid/kfse",
  },
  {
    id: "smgui",
    title: "Smart Monitoring GUI",
    description: "IoT-integrated monitoring dashboard with anomaly detection, sensor fusion, and automated alert systems for industrial environments.",
    image: "/PROJECT_SMGUI.png",
    tech: ["React", "Node.js", "MQTT", "PyTorch", "InfluxDB"],
    github: "https://github.com/fadilnurmaulid/smart-monitoring",
  },
];