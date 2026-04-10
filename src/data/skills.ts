export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Machine Learning & AI",
    icon: "🧠",
    skills: ["Machine Learning (Fundamentals)", "Model Evaluation", "Feature Engineering", "State Estimation", "Kalman Filtering"],
  },
  {
    category: "Programming Languages",
    icon: "⌨️",
    skills: ["Python", "C++", "SQL", "R"],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    skills: ["Matplotlib", "Pandas", "Numpy", "Seaborn", "Microsoft Excel", "Data Analytics (Basic)", "Data Visualization"],
  },
  {
    category: "Software & Tools",
    icon: "🛠️",
    skills: ["GitHub", "Linux", "LaTeX", "RStudio"],
  },
  {
    category: "Robotics & Embedded",
    icon: "🤖",
    skills: ["ROS", "Arduino", "Electronics", "KiCAD", "LTSpice", "TinkerCad", "Proteus"],
  },
  {
    category: "Programming & Development",
    icon: "💻",
    skills: ["Object-Oriented Programming (OOP)", "Modular Programming", "PyQt5", "Pygame"],
  },
  {
    category: "Other Skills",
    icon: "🧩",
    skills: ["Problem Solving", "Critical Thinking", "Time Management", "OSINT"],
  }
];