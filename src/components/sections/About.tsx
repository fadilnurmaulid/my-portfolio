import SectionTitle from "../ui/SectionTitle"
import { profile } from "@/data/profile"

export default function About() {
  return (
    <section className="py-24 container mx-auto px-6">

      <SectionTitle
        title="About"
        subtitle="Background and research interests"
      />

      <div className="max-w-3xl mx-auto glass p-8 rounded-xl">

        <p className="text-gray-300 leading-relaxed">
          {profile.about}
        </p>

      </div>

    </section>
  )
}