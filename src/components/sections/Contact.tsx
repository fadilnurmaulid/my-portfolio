import SectionTitle from "../ui/SectionTitle"
import { profile } from "@/data/profile"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="py-24 container mx-auto px-6 text-center [&>div>p]:mx-auto [&>div>p]:text-center">

      <SectionTitle
        title="Contact"
        subtitle="Open to collaboration, research opportunities, and innovative projects"
      />

      <p className="text-gray-300 mb-8">
        {profile.email}
      </p>

      <div className="flex justify-center gap-6">

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass px-6 py-3 rounded-lg hover:scale-105 transition flex items-center gap-2"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="glass px-6 py-3 rounded-lg hover:scale-105 transition flex items-center gap-2"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>

      </div>

    </section>
  )
}