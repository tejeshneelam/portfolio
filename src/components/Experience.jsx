import React from "react";

export default function Experience(){
  return (
    <section className="section">
      <h2>Education & Work</h2>
      <div className="ex-grid">
        <div className="box">
          <h3>Education</h3>
          <div className="timeline-item">
            <div style={{fontWeight:700}}>2023 - 2027</div>
            <div style={{fontSize:18,fontWeight:700}}>Amrita Vishwa Vidhya Peetham</div>
            <div style={{color:"var(--muted)"}}>Computer Science Engineering</div>
          </div>
           <div className="timeline-item">
            <div style={{fontWeight:700}}>2021 - 2023</div>
            <div style={{fontSize:18,fontWeight:700}}>Royal Junior College</div>
            <div style={{color:"var(--muted)"}}>Class 12th (MPC)</div>
          </div>
          <div className="timeline-item">
            <div style={{fontWeight:700}}>2021</div>
            <div style={{fontSize:18,fontWeight:700}}>The Future Kids School</div>
            <div style={{color:"var(--muted)"}}>Class 10th</div>
          </div>
        </div>

        <div className="box">
          <h3>Work Experience</h3>
          <div className="timeline-item">
            <div style={{fontWeight:700}}>May 2025 - July 2025</div>
            <div style={{fontSize:18,fontWeight:700}}>NIT Calicut</div>
            <div style={{color:"var(--muted)"}}>Research Internship</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
