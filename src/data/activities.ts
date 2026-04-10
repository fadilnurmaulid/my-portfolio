export interface Activity {
  id: string;
  role: string;
  organization: string;
  date: string;
  description: string;
  type: "work" | "research" | "community" | "competition";
}

export const activities: Activity[] = [
  {
    id: "1",
    role: "Electrical Staff",
    organization: "Tim Robotika Universitas Indonesia (TRUI) – KRAI Veamus",
    date: "Feb 2026 – Present",
    description: "Contributing to robotics system development as part of the electrical division. Working on electronics integration, circuit implementation, and embedded-related components for autonomous robotic systems. Involved in prototyping hardware systems and supporting hardware–software coordination within the team.",
    type: "work",
  },
  {
    id: "2",
    role: "Electrical Staff Intern",
    organization: "Tim Robotika Universitas Indonesia (TRUI) – KRAI Veamus",
    date: "Jan 2026 – Feb 2026",
    description: "Supported the electrical team in robotics hardware development during internship period. Assisted in electronic prototyping, circuit assembly, and basic implementation for competition-oriented robotic systems.",
    type: "work",
  },
  {
    id: "3",
    role: "Staff (Intern) – Departemen Keilmuan",
    organization: "BEM FMIPA UI",
    date: "Oct 2025 – Dec 2025",
    description: "Supported the development of academic and scientific learning content, particularly in mathematics-related materials. Contributed to educational initiatives aimed at strengthening analytical understanding within the faculty community.",
    type: "community",
  },
  {
    id: "4",
    role: "Member",
    organization: "Society of Petroleum Engineers International",
    date: "Mar 2026 – Present",
    description: "Participating in a professional engineering network that provides exposure to industry knowledge, technical discussions, and interdisciplinary perspectives across science and engineering fields.",
    type: "community",
  },
  {
    id: "5",
    role: "Member",
    organization: "UKM Catur Universitas Indonesia",
    date: "Aug 2025 – Present",
    description: "Actively participating in university-level chess activities, developing strategic thinking, pattern recognition, and decision-making under constraints. Engaging in regular training and matches that strengthen analytical and competitive mindset.",
    type: "community",
  },
];