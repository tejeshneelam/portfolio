import React from "react";

export default function Testimonials(){
  const list = [
    {name:"Leslie Alexander", role:"Founder, EV Charger Station", text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem..."},
    {name:"Albert Flores", role:"CTO, Software Agency", text:"Totam rem aperiam eaque ipsa quae ab illo inventore veritatis..." }
  ];
  return (
    <section id="testimonials" className="testimonials section">
      <h2>Client Testimonials</h2>
      <div className="test-list" style={{marginTop:16}}>
        {list.map((t,i)=>(
          <div key={i} className="test-card">
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <div style={{width:52,height:52,borderRadius:52,background:"#eee"}} />
              <div>
                <div style={{fontWeight:800}}>{t.name}</div>
                <div style={{color:"var(--muted)",fontSize:13}}>{t.role}</div>
              </div>
            </div>
            <p style={{color:"var(--muted)",marginTop:12}}>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
