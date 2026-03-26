"use client";

import { useReveal } from "@/hooks/useReveal";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "16+", label: "Certifications" },
  { value: "5+", label: "Technologies" },
  { value: "2+", label: "Years Learning" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={ref}>
        <div className="reveal">
          <SectionTitle label="About Me" title="Who I Am" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left — Text */}
          <div>
            <p className="reveal stagger-1" style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 20, fontWeight: 300 }}>
              {profile.about}
            </p>
            <p className="reveal stagger-2" style={{ fontSize: 16, color: "#64748b", lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
              I thrive at the intersection of theoretical foundations and engineering pragmatism — transforming complex research into production-ready systems that solve real problems.
            </p>

            {/* Stats grid */}
            <div
              className="reveal stagger-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 16,
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "20px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(99,102,241,0.3)";
                    el.style.background = "rgba(99,102,241,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#a5b4fc", fontFamily: "'Syne',sans-serif", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: "#475569", marginTop: 4, letterSpacing: "0.04em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image card */}
          <div className="reveal stagger-2 about-img" style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.07)",
                position: "relative",
                aspectRatio: "4/5",
                background: "#0a0f1e",
              }}
            >
              <Image
                src={profile.banner || profile.avatar}
                alt="About"
                fill
                style={{ objectFit: "cover", opacity: 0.85 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(5,8,16,0.8) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", fontFamily: "'Syne',sans-serif" }}>{profile.name}</div>
                <div style={{ fontSize: 13, color: "#818cf8", marginTop: 4 }}>AI Engineer & Researcher</div>
              </div>
            </div>
            {/* Decoration */}
            <div
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                width: 80,
                height: 80,
                borderRadius: 16,
                border: "1px solid rgba(99,102,241,0.2)",
                background: "rgba(99,102,241,0.04)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              🤖
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-img { display: none; }
        }
      `}</style>
    </section>
  );
}