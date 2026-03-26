"use client";

import { useReveal } from "@/hooks/useReveal";
import { certifications } from "@/data/certifications";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={ref}>
        <div className="reveal">
          <SectionTitle
            label="Credentials"
            title="Certifications"
            subtitle={`${certifications.length} verified credentials across AI, data science, and software engineering.`}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={`reveal stagger-${Math.min((i % 6) + 1, 6)}`}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                position: "relative",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px) scale(1.01)";
                el.style.borderColor = "rgba(99,102,241,0.3)";
                el.style.boxShadow = "0 12px 40px rgba(99,102,241,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Cert image */}
              <div style={{ position: "relative", paddingTop: "62%", background: "#0a1020" }}>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(5,8,16,0)",
                    transition: "background 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="cert-overlay"
                />
              </div>

              {/* Card footer */}
              <div style={{ padding: "12px 14px" }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#cbd5e1",
                    lineHeight: 1.35,
                    marginBottom: 3,
                    fontFamily: "'Syne',sans-serif",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cert.title}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, color: "#818cf8" }}>{cert.issuer}</span>
                  {cert.date && <span style={{ fontSize: 10, color: "#334155" }}>{cert.date}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}