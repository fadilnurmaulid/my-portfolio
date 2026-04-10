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
    id: "kfse",
    title: "Kalman Filter–Based Odometry Estimation",
    description: `Kalman Filter–based odometry estimation using ROS2 and C++ to improve trajectory stability under noisy sensor data. Includes real-time visualization and offline analysis.`,
    image: "/projects/ROS2KFSE.png",
    tech: ["C++", "ROS2", "Python", "Matplotlib"],
    github: "https://github.com/fadilnurmaulid/robot_kf",
  },
  {
    id: "smgui",
    title: "Slot Machine Desktop Game",
    description: `Modular desktop game built with PyQt5, featuring interactive GUI, animation, and structured system design. Demonstrates event-driven programming and clean architecture in Python.`,
    image: "/projects/SMGUI.png",
    tech: ["Python", "PyQt5", "Pygame", "JSON", "Matplotlib"],
    github: "https://github.com/fadilnurmaulid/Slot_Machine",
  },
  {
    id: "ccgui",
    title: "Caesar Cipher GUI",
    description: `PyQt5-based GUI application for Caesar Cipher encryption and decryption, demonstrating basic cryptographic logic and interactive interface design.`,
    image: "/projects/CCGUI.png",
    tech: ["Python", "PyQt5"],
    github: "https://github.com/fadilnurmaulid/Caesar-Cipher-GUI",
  },
];