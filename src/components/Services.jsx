import React from "react";

export default function Services(){
  const cards = [
    {
      title: "Web Application Development",
      desc: "I build responsive, user-friendly web apps using React.js, HTML/CSS and modern frontend patterns. Experience includes dashboards, ecommerce UI, and interactive components."
    },
    {
      title: "AI & OCR-based Application Development",
      desc: "Hands-on experience creating HTR/OCR systems using Vision Transformers (ViT), Tesseract, EasyOCR and FastAPI backends. I integrate AI models into complete web applications."
    },
    {
      title: "Full-Stack & API Development",
      desc: "I build REST APIs, authentication, backend logic with Node.js or FastAPI, and focus strongly on DSA for efficient problem-solving and optimized solutions."
    }
  ];

  return (
    <section id="services" className="section">
      <h2>Services I Provide</h2>
      <div className="services-grid">
        {cards.map((c,i)=>(
          <div key={i} className="service-card">
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div className="service-ico">⚡</div>
              <div style={{fontWeight:700}}>{c.title}</div>
            </div>
            <div style={{color:"var(--muted)"}}>{c.desc}</div>
            <div style={{textAlign:"right"}}>
              <a href="#projects" style={{textDecoration:"none", color:"var(--forest)", fontWeight:700}}>
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

