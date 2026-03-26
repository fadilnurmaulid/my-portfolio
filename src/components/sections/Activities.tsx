"use client";

import { useReveal } from "@/hooks/useReveal";
import { activities } from "@/data/activities";
import SectionTitle from "@/components/ui/SectionTitle";

const typeColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  work: { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.25)", text: "#93c5fd", dot: "#3b82f6" },
  research: { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)", text: "#c4b5fd", dot: "#8b5cf6" },
  community: { bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.25)", text: "#86efac", dot: "#22c55e" },
  competition: { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.25)", text: "#fcd34d", dot: "#f59e0b" },
};

export default function Activities() {
  const ref = useReveal();

  return (
    <section id="activities" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={ref}>
        <div className="reveal">
          <SectionTitle label="Experience" title="Activities & Experience" subtitle="A timeline of my professional journey, competitions, and community contributions." />
        </div>

        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 12,
              top: 8,
              bottom: 8,
              width: 1,
              background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 10%, rgba(99,102,241,0.4) 90%, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {activities.map((activity, i) => {
              const colors = typeColors[activity.type] || typeColors.work;
              return (
                <div
                  key={activity.id}
                  className={`reveal stagger-${Math.min(i + 1, 6)}`}
                  style={{ position: "relative", paddingBottom: 8 }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -34,
                      top: 22,
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: colors.dot,
                      boxShadow: `0 0 12px ${colors.dot}80`,
                      border: "2px solid rgba(5,8,16,1)",
                    }}
                  />

                  <div
                    style={{
                      padding: "24px 28px",
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.04)";
                      el.style.borderColor = colors.border;
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.025)";
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 10 }}>
                      <div>
                        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>
                          {activity.role}
                        </div>
                        <div style={{ fontSize: 13, color: "#818cf8", fontWeight: 500 }}>
                          {activity.organization}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                        <span
                          style={{
                            padding: "3px 10px",
                            borderRadius: 20,
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            background: colors.bg,
                            border: `1px solid ${colors.border}`,
                            color: colors.text,
                          }}
                        >
                          {activity.type}
                        </span>
                        <span style={{ fontSize: 12, color: "#475569", whiteSpace: "nowrap" }}>
                          {activity.date}
                        </span>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, fontWeight: 300 }}>
                      {activity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}