interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div style={{ marginBottom: 60 }}>
      {label && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              display: "block",
              width: 20,
              height: 1.5,
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              borderRadius: 1,
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#818cf8",
            }}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "#f1f5f9",
          marginBottom: subtitle ? 16 : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            maxWidth: 520,
            fontSize: 15,
            color: "#64748b",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}