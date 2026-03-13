import Image from "next/image"
import { profile } from "@/data/profile"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">

      <Image
        src="/banner.jpg"
        alt="banner"
        fill
        className="object-cover opacity-20"
      />

      <div className="text-center z-10">

        <Image
          src="/profile.jpg"
          alt="profile"
          width={160}
          height={160}
          className="rounded-full border-4 border-indigo-500 mx-auto mb-6"
        />

        <h1 className="text-5xl font-bold gradient-text">
          {profile.name}
        </h1>

        <p className="text-xl text-gray-300 mt-3">
          {profile.title}
        </p>

        <div className="mt-6 flex justify-center gap-4">

          <a
            href={profile.github}
            className="glass px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            className="glass px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}