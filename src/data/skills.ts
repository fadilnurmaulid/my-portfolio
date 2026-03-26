export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Machine Learning & AI",
    icon: "🧠",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Hugging Face", "LangChain"],
  },
  {
    category: "Programming Languages",
    icon: "⌨️",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "R"],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Apache Spark"],
  },
  {
    category: "Web & Backend",
    icon: "🌐",
    skills: ["React", "Next.js", "FastAPI", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    skills: ["Docker", "Git", "Linux", "GCP", "AWS", "CI/CD"],
  },
  {
    category: "Robotics & Embedded",
    icon: "🤖",
    skills: ["ROS", "Arduino", "Raspberry Pi", "SLAM", "Computer Vision", "Sensor Fusion"],
  },
];