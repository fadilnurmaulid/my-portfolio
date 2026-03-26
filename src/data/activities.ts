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
    role: "AI Research Intern",
    organization: "Telkom Indonesia",
    date: "Jun 2024 – Present",
    description: "Developed NLP pipelines for customer sentiment analysis, achieving 91% accuracy on domain-specific datasets. Collaborated with senior researchers on LLM fine-tuning workflows.",
    type: "work",
  },
  {
    id: "2",
    role: "Machine Learning Engineer",
    organization: "Dibimbing.id Bootcamp",
    date: "Jan 2024 – May 2024",
    description: "Built end-to-end ML systems covering data ingestion, model training, evaluation, and deployment. Mentored junior participants in Python and deep learning fundamentals.",
    type: "work",
  },
  {
    id: "3",
    role: "Competitive Programmer",
    organization: "Hack & Fix Competition",
    date: "Oct 2023",
    description: "Competed in a national-level cybersecurity and computational science competition. Solved algorithmic challenges involving graph theory, dynamic programming, and optimization.",
    type: "competition",
  },
  {
    id: "4",
    role: "Frontend Developer",
    organization: "Hacktiv8 Bootcamp",
    date: "Aug 2023 – Dec 2023",
    description: "Completed intensive full-stack development training with focus on React, Next.js, and TypeScript. Built 3 capstone projects showcasing modern web development practices.",
    type: "work",
  },
  {
    id: "5",
    role: "Data Science Volunteer",
    organization: "RevoU Community",
    date: "Mar 2023 – Jul 2023",
    description: "Contributed to open data analysis projects for social impact. Led workshops on exploratory data analysis and visualization for 50+ community members.",
    type: "community",
  },
];