"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", resize);

    // Particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    // Blobs
    const blobs = [
      { x: w * 0.2, y: h * 0.3, r: 340, vx: 0.18, vy: 0.10, color: "59,130,246" },
      { x: w * 0.75, y: h * 0.2, r: 280, vx: -0.14, vy: 0.16, color: "139,92,246" },
      { x: w * 0.5, y: h * 0.7, r: 300, vx: 0.10, vy: -0.12, color: "6,182,212" },
      { x: w * 0.85, y: h * 0.75, r: 220, vx: -0.09, vy: -0.08, color: "99,102,241" },
    ];

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Blobs
      blobs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `rgba(${b.color},0.10)`);
        grad.addColorStop(0.5, `rgba(${b.color},0.04)`);
        grad.addColorStop(1, `rgba(${b.color},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const pulse = Math.sin(t * 0.02 + p.x * 0.005) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${p.alpha * pulse})`;
        ctx.fill();
      });

      // Subtle grid lines
      ctx.strokeStyle = "rgba(99,102,241,0.025)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let gx = 0; gx < w; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
        ctx.stroke();
      }
      for (let gy = 0; gy < h; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(w, gy);
        ctx.stroke();
      }

      t++;
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.85 }}
      />
      {/* Static deep gradient base */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          background:
            "radial-gradient(ellipse 80% 60% at 10% 20%, rgba(59,130,246,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 80%, rgba(139,92,246,0.07) 0%, transparent 60%), #050810",
        }}
      />
    </>
  );
}