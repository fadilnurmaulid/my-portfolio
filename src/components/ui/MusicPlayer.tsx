"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after a small delay
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        audio.volume = 0.25;
        audio.loop = true;
        await audio.play();
        setPlaying(true);
      } catch {
        // Autoplay blocked
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/I Could Be.mp3" loop preload="none" />
      <button
        onClick={toggle}
        title={playing ? "Mute music" : "Play music"}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 200,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(12,16,32,0.9)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${playing ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.1)"}`,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          boxShadow: playing
            ? "0 0 20px rgba(99,102,241,0.4)"
            : "0 4px 16px rgba(0,0,0,0.4)",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        {playing ? (
          // Sound waves icon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#818cf8" />
            <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          // Muted icon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#475569" />
            <line x1="23" y1="9" x2="17" y2="15" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="9" x2="23" y2="15" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
        {/* Animated rings when playing */}
        {playing && (
          <span
            style={{
              position: "absolute",
              inset: -2,
              borderRadius: "50%",
              border: "1px solid rgba(99,102,241,0.4)",
              animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
            }}
          />
        )}
      </button>
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </>
  );
}