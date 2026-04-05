"use client";

import { useState, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import { certifications } from "@/data/certifications";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

interface Cert {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date?: string;
}

function Lightbox({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "lb-in 0.22s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 780,
          width: "100%",
          borderRadius: 18,
          overflow: "hidden",
          background: "#080d1a",
          border: "1px solid rgba(99,102,241,0.25)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,102,241,0.1)",
          animation: "lb-scale 0.28s cubic-bezier(0.16,1,0.3,1)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 10,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(5,8,16,0.8)",
            border: "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#94a3b8",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.3)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(5,8,16,0.8)";
            (e.currentTarget as HTMLElement).style.color = "#94a3b8";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div style={{ position: "relative", width: "100%", paddingTop: "60%" }}>
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            style={{ objectFit: "contain", background: "#060a14" }}
            sizes="780px"
            priority
          />
        </div>

        <div
          style={{
            padding: "18px 24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>
              {cert.title}
            </div>
            <div style={{ fontSize: 12, color: "#818cf8", marginTop: 2 }}>{cert.issuer}</div>
          </div>
          {cert.date && (
            <span style={{
              padding: "4px 12px",
              borderRadius: 20,
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              fontSize: 11,
              color: "#a5b4fc",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}>
              {cert.date}
            </span>
          )}
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: 11,
        color: "rgba(255,255,255,0.2)",
        letterSpacing: "0.08em",
        pointerEvents: "none",
      }}>
        Klik di luar atau tekan Esc untuk tutup
      </div>

      <style>{`
        @keyframes lb-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lb-scale {
          from { opacity: 0; transform: scale(0.92) translateY(12px) }
          to   { opacity: 1; transform: scale(1)    translateY(0) }
        }
      `}</style>
    </div>
  );
}

export default function Certifications() {
  const ref = useReveal();
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <section id="certifications" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      {selected && <Lightbox cert={selected} onClose={() => setSelected(null)} />}

      <div ref={ref}>
        <div className="reveal">
          <SectionTitle
            label="Credentials"
            title="Certifications"
            subtitle={`${certifications.length} verified credentials across AI, data science, and software engineering.`}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={`reveal stagger-${Math.min((i % 6) + 1, 6)}`}
              onClick={() => setSelected(cert)}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                position: "relative",
                cursor: "default",
              }}
            >
              <div style={{ position: "relative", paddingTop: "62%", background: "#0a1020" }}>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "12px 14px" }}>
                <div style={{
                  fontSize: 12, fontWeight: 600, color: "#cbd5e1", lineHeight: 1.35,
                  marginBottom: 3, fontFamily: "'Syne',sans-serif",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
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