import React, {useState} from "react";

export default function FAQ(){
  const faqs = [
    {q:"Can I download your resume/CV?", a:"Yes — use the Download Resume button in the hero to open the PDF."},
    {q:"Are you available for freelance work?", a:"Yes, contact me via the contact information below."},
    {q:"What tools do you use?", a:"Figma, Photoshop, After Effects, React, Node (for prototypes)."}
  ];
  const [open, setOpen] = useState(null);
  return (
    <section className="section">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqs.map((f,i)=>(
          <div key={i} className={`faq-item ${open===i ? "open":""}`} onClick={()=> setOpen(open===i?null:i)} style={{cursor:"pointer"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontWeight:700}}>{f.q}</div>
              <div>{open===i ? "—":"+"}</div>
            </div>
            {open===i && <div style={{marginTop:10,color:"var(--forest)",fontWeight:600}}>{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
