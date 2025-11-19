import React from "react";
import { projects } from "../data/projects";

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h2>My Latest <span style={{color:"var(--accent)"}}>Projects</span></h2>
        <a className="btn btn-secondary" href="#projects">View All Projects</a>
      </div>

      <div className="projects-grid">
        {projects.map((p,i)=>(
          <div key={i} className="project-card">
            <img src={p.image} alt={p.title} onError={(e)=> e.target.style.display='none'} />
            <h3 style={{marginTop:10}}>{p.title}</h3>
            <p style={{color:"var(--muted)"}}>{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t,idx)=>(<div key={idx} className="tag">{t}</div>))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
