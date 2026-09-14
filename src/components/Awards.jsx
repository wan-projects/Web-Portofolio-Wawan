import React from "react";

const AWARDS = [
  {
    icon: "📄",
    title: "Presenter & Paper Author — 8th IEEE ICITISEE 2024",
    org: "Universitas Amikom Yogyakarta & Universitas Gadjah Mada",
    date: "Aug 2024",
    color: "gold",
  },
];

const colorMap = {
  gold: {
    bg: "rgba(251, 191, 36, 0.07)",
    border: "rgba(251, 191, 36, 0.2)",
    dot: "#fbbf24",
  },
  purple: {
    bg: "rgba(168, 85, 247, 0.07)",
    border: "rgba(168, 85, 247, 0.2)",
    dot: "#a855f7",
  },
  cyan: {
    bg: "rgba(6, 182, 212, 0.07)",
    border: "rgba(6, 182, 212, 0.2)",
    dot: "#06b6d4",
  },
};

const Awards = () => (
  <section id="awards" className="section">
    <div className="container">
      <div className="section-header fade-in-section">
        <h2 className="section-title">Honors &amp; Awards</h2>
      </div>
      <div className="awards-grid fade-in-section">
        {AWARDS.map((a, i) => {
          const c = colorMap[a.color];
          return (
            <div
              key={i}
              className="award-card"
              style={{ background: c.bg, borderColor: c.border }}
            >
              <div className="award-card-top">
                <span className="award-icon">{a.icon}</span>
                <span className="award-date" style={{ color: c.dot }}>
                  {a.date}
                </span>
              </div>
              <h3 className="award-title">{a.title}</h3>
              <p className="award-org">{a.org}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Awards;
