"use client";

import { useReveal } from "@/hooks/useReveal";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={ref}>
        <div className="reveal">
          <SectionTitle
            label="Portfolio"
            title="Featured Projects"
            subtitle="Selected projects in computational systems, AI, and software development."
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            maxWidth: 1100,
            gap: 24,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal stagger-${Math.min(i + 1, 6)}`}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                position: "relative",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = "rgba(99,102,241,0.35)";
                el.style.boxShadow = "0 20px 60px rgba(99,102,241,0.12), 0 0 0 1px rgba(99,102,241,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                  background: "#0a0f1e",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 40%, rgba(5,8,16,0.85) 100%)",
                  }}
                />
                {/* Project number */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#f1f5f9",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#64748b",
                    lineHeight: 1.65,
                    marginBottom: 18,
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: 10 }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 16px",
                        borderRadius: 7,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#94a3b8",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        fontFamily: "'DM Sans',sans-serif",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "#a5b4fc";
                        el.style.borderColor = "rgba(99,102,241,0.3)";
                        el.style.background = "rgba(99,102,241,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "#94a3b8";
                        el.style.borderColor = "rgba(255,255,255,0.08)";
                        el.style.background = "rgba(255,255,255,0.04)";
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 16px",
                        borderRadius: 7,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#818cf8",
                        background: "rgba(99,102,241,0.08)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}