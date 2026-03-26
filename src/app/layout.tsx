import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Fadil Nurmaulid | AI & Computational Science",
  description: "Portfolio of Fadil Nurmaulid"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[#0b0f1a] text-white">
      <body>
        {children}
      </body>
    </html>
  )
}