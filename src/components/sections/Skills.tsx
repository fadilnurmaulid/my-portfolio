"use client";

import { useReveal } from "@/hooks/useReveal";
import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={ref}>
        <div className="reveal">
          <SectionTitle
            label="Toolkit"
            title="Skills & Technologies"
            subtitle="Technologies and tools I use across AI, computational science, and engineering."
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`reveal stagger-${Math.min(i + 1, 6)}`}
              style={{
                padding: "24px 26px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(99,102,241,0.25)";
                el.style.background = "rgba(99,102,241,0.04)";
                el.style.boxShadow = "0 8px 32px rgba(99,102,241,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.background = "rgba(255,255,255,0.025)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span style={{ fontSize: 22 }}>{cat.icon}</span>
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    letterSpacing: "0.01em",
                  }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "4px 11px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#94a3b8",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#c7d2fe";
                      el.style.background = "rgba(99,102,241,0.12)";
                      el.style.borderColor = "rgba(99,102,241,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#94a3b8";
                      el.style.background = "rgba(255,255,255,0.04)";
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}