export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date?: string;
}

export const certifications: Certification[] = [
  { id: "1", title: "AI+ Foundation", issuer: "AICerts", image: "/certificates/AIF_AICerts.png", date: "2026" },
  { id: "2", title: "AI & Machine Learning", issuer: "Dibimbing.id", image: "/certificates/AIML_Dibimbing.png", date: "2025" },
  { id: "3", title: "AI Talent Hub", issuer: "Telkom University", image: "/certificates/AITH_Telkom.png", date: "2025" },
  { id: "4", title: "Belajar Dasar AI", issuer: "Dicoding", image: "/certificates/BDAI_Dicoding.png", date: "2025" },
  { id: "5", title: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding", image: "/certificates/BMLP_Dicoding.png", date: "2025" },
  { id: "6", title: "Cyber Security Career Starter", issuer: "Hack & Fix", image: "/certificates/CCSC_Hack&Fix.png", date: "2026" },
  { id: "7", title: "Certificate of Achievement", issuer: "Hacktiv8", image: "/certificates/CGO_Hacktiv8.png", date: "2025" },
  { id: "8", title: "Cyber Security Webinar", issuer: "Kariermu", image: "/certificates/CSW_Kariermu.png", date: "2025" },
  { id: "9", title: "Feature Engineering", issuer: "Kaggle", image: "/certificates/FE_Kaggle.png", date: "2026" },
  { id: "10", title: "Code Generation & Optimization", issuer: "IBM", image: "/certificates/IBM_CodeGeneration.png", date: "2025" },
  { id: "11", title: "Intro to Data Analytics", issuer: "RevoU", image: "/certificates/IDA_RevoU.png", date: "2025" },
  { id: "12", title: "Intro to Machine Learning", issuer: "Kaggle", image: "/certificates/IML_Kaggle.png", date: "2025" },
  { id: "13", title: "Intermediate Machine Learning", issuer: "Kaggle", image: "/certificates/ImML_Kaggle.png", date: "2025" },
  { id: "14", title: "Memulai Pemrograman dengan Python", issuer: "Dicoding", image: "/certificates/MPPy_Dicoding.png", date: "2025" },
  { id: "15", title: "Pengenalan Dasar RStudio", issuer: "EducativaID", image: "/certificates/PDPRs_EducativaID.png", date: "2025" },
  { id: "16", title: "Python", issuer: "Kaggle", image: "/certificates/Py_Kaggle.png", date: "2025" },
];