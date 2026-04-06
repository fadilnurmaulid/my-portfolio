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
    title: "lipsum",
    description: "lorem ipsum dolor sit amet.",
    image: "/PROJECT_CCGUI.png",
    tech: ["Python", "PyQt5", "TensorFlow", "Matplotlib"],
    github: "https://github.com/fadilnurmaulid/carbon-capture-gui",
  },
  {
    id: "kfse",
    title: "lipsum",
    description: "lorem ipsum dolor sit amet.",
    image: "/PROJECT_KFSE.png",
    tech: ["Python", "FastAPI", "BERT", "Neo4j", "React"],
    github: "https://github.com/fadilnurmaulid/kfse",
  },
  {
    id: "smgui",
    title: "lipsum",
    description: "lorem ipsum dolor sit amet.",
    image: "/PROJECT_SMGUI.png",
    tech: ["React", "Node.js", "MQTT", "PyTorch", "InfluxDB"],
    github: "https://github.com/fadilnurmaulid/smart-monitoring",
  },
];