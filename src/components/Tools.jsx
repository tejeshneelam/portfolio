import React from "react";

export default function Tools() {
    const list = [
        { name: "React.js", pct: "95%", img: "/images/tool-figma.png" },
        { name: "Python", pct: "90%", img: "/images/tool-ps.png" },
        { name: "HTML / CSSp", pct: "95%", img: "/images/tool-ae.png" },
        { name: "Git & GitHub", pct: "80%", img: "/images/tool-ae.png" },
        { name: "OCR/AI Tools", pct: "90%", img: "/images/tool-ae.png" },
        { name: "Java", pct: "85%", img: "/images/tool-ae.png" },
        { name: "C++", pct: "85%", img: "/images/tool-ae.png" }
    ];
    return (
        <section className="section">
            <h2>Exploring the Tools</h2>
            <div className="tools-row">
                {list.map((t, i) => (
                    <div key={i} className="tool-pill">
                        <img src={t.img} alt={t.name} style={{ width: 48, height: 48 }} onError={(e) => e.target.style.display = 'none'} />
                        <div className="tool-pct">{t.pct}</div>
                        <div style={{ color: "var(--muted)", marginTop: 6 }}>{t.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
