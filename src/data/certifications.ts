export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date?: string;
}

export const certifications: Certification[] = [
  { id: "aif", title: "AI Fundamentals", issuer: "AICerts", image: "/AIF_AICerts.png", date: "2024" },
  { id: "aiml", title: "AI & Machine Learning", issuer: "Dibimbing.id", image: "/AIML_Dibimbing.png", date: "2024" },
  { id: "aith", title: "AI Technology & Hardware", issuer: "Telkom University", image: "/AITH_Telkom.png", date: "2024" },
  { id: "bdai", title: "Belajar Dasar AI", issuer: "Dicoding", image: "/BDAI_Dicoding.png", date: "2023" },
  { id: "bmlp", title: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding", image: "/BMLP_Dicoding.png", date: "2023" },
  { id: "ccsc", title: "Competitive CS", issuer: "Hack & Fix", image: "/CCSC_Hack&Fix.png", date: "2023" },
  { id: "cgo", title: "CGO Certification", issuer: "Hacktiv8", image: "/CGO_Hacktiv8.png", date: "2023" },
  { id: "csw", title: "Career Skills for Web", issuer: "Kariermu", image: "/CSW_Kariermu.png", date: "2023" },
  { id: "fe", title: "Feature Engineering", issuer: "Kaggle", image: "/FE_Kaggle.png", date: "2023" },
  { id: "ibm", title: "IBM Code Generation", issuer: "IBM", image: "/IBM_CodeGeneration.png", date: "2024" },
  { id: "ida", title: "Intro to Data Analytics", issuer: "RevoU", image: "/IDA_RevoU.png", date: "2023" },
  { id: "iml", title: "Intro to Machine Learning", issuer: "Kaggle", image: "/IML_Kaggle.png", date: "2023" },
  { id: "imml", title: "Intermediate Machine Learning", issuer: "Kaggle", image: "/ImML_Kaggle.png", date: "2023" },
  { id: "mppy", title: "Memulai Pemrograman dengan Python", issuer: "Dicoding", image: "/MPPy_Dicoding.png", date: "2023" },
  { id: "pdprs", title: "Python Data Processing", issuer: "EducativaID", image: "/PDPRs_EducativaID.png", date: "2023" },
  { id: "py", title: "Python Certification", issuer: "Kaggle", image: "/Py_Kaggle.png", date: "2023" },
];