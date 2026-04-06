"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Stagger children entrance
    const children = el.querySelectorAll<HTMLElement>("[data-hero]");
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      child.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`;
      setTimeout(() => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      }, 80 + i * 50);
    });
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "120px 24px 80px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 60,
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left — Content */}
        <div>
          {/* Status badge */}
          <div data-hero style={{ marginBottom: 24 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 40,
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                fontSize: 12,
                color: "#86efac",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.03em",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 10px rgba(34,197,94,0.7)",
                  animation: "pulse-dot 2s ease infinite",
                  display: "inline-block",
                }}
              />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            data-hero
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: 8,
              color: "#f1f5f9",
            }}
          >
            {profile.name.split(" ").map((word, i) => (
              <span key={i} style={{ display: "block" }}>
                {i === 0 ? (
                  word
                ) : (
                  <span
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #818cf8, #c084fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {word}
                  </span>
                )}
              </span>
            ))}
          </h1>

          {/* Title */}
          <p
            data-hero
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(14px, 2vw, 17px)",
              color: "#64748b",
              fontWeight: 400,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            {profile.title}
          </p>

          {/* Tagline */}
          <p
            data-hero
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#94a3b8",
              maxWidth: 480,
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: 40,
            }}
          >
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div data-hero style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={profile.cvUrl} download className="btn-primary">
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download CV
              </span>
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View Projects
              </span>
            </a>
          </div>

          {/* Social links */}
          <div data-hero style={{ display: "flex", gap: 16, marginTop: 40 }}>
            {[
              { label: "GitHub", href: profile.github, icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              )},
              { label: "LinkedIn", href: profile.linkedin, icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              )},
              { label: "Kaggle", href: "https://kaggle.com/fadilnurmaulid", icon: (
                <img src="/kaggle_icon.png" width={18} height={18} alt="Kaggle" />
              )},
              { label: "Dicoding", href: "https://www.dicoding.com/users/fadil_nurmaulid", icon: (
                <img src="/dicoding_icon.png" width={18} height={18} alt="Dicoding" />
              )},
              { label: "Instagram", href: "https://instagram.com/fadil_nurmaulid_", icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
              )},
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#a5b4fc";
                  el.style.borderColor = "rgba(99,102,241,0.3)";
                  el.style.background = "rgba(99,102,241,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#64748b";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Avatar */}
        <div data-hero className="hero-avatar" style={{ position: "relative" }}>
          {/* Glow ring */}
          <div
            style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
              animation: "pulse-ring 4s ease-in-out infinite",
            }}
          />
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(99,102,241,0.3)",
              boxShadow: "0 0 60px rgba(99,102,241,0.2), 0 0 120px rgba(139,92,246,0.1)",
              position: "relative",
              background: "#0a0f1e",
            }}
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Floating stat cards */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              right: -30,
              background: "rgba(5,8,16,0.9)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: 10,
              padding: "10px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              animation: "float 5s ease-in-out infinite",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#a5b4fc", fontFamily: "'Syne',sans-serif" }}>16+</div>
            <div style={{ fontSize: 10, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase" }}>Certifications</div>
          </div>
          <div
            style={{
              position: "absolute",
              top: 20,
              left: -30,
              background: "rgba(5,8,16,0.9)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(6,182,212,0.25)",
              borderRadius: 10,
              padding: "10px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              animation: "float 6s ease-in-out infinite 1s",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#67e8f9", fontFamily: "'Syne',sans-serif" }}>3+</div>
            <div style={{ fontSize: 10, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase" }}>Projects</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 10, color: "#334155", letterSpacing: "0.12em", textTransform: "uppercase" }}>Scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(99,102,241,0.6), transparent)",
            animation: "scroll-line 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-dot { 0%,100% { box-shadow: 0 0 6px rgba(34,197,94,0.5); } 50% { box-shadow: 0 0 14px rgba(34,197,94,0.9); } }
        @keyframes pulse-ring { 0%,100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.05); opacity: 1; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes scroll-line { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 51% { transform: scaleY(1); transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }
        
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-avatar { display: none; }
        }
      `}</style>
    </section>
  );
}