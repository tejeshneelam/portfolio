import React from "react";

export default function Footer(){
  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <div style={{maxWidth:480}}>
          <div style={{display:"flex",gap:12,alignItems:"center"}}>
            <div className="brand-dot">N</div>
            <div style={{fontWeight:800}}>Neelam Tejesh</div>
          </div>
          <p style={{color:"rgba(255,255,255,0.9)",marginTop:12}}>
            Designer & developer — building human centred products.
          </p>
        </div>

        <div style={{color:"rgba(255,255,255,0.9)"}}>
          <div style={{fontWeight:700,marginBottom:8}}>Navigation</div>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            <a href="#home" style={{color:"white",textDecoration:"none"}}>Home</a>
            <a href="#services" style={{color:"white",textDecoration:"none"}}>Services</a>
            <a href="#projects" style={{color:"white",textDecoration:"none"}}>Projects</a>
            <a href="#contact" style={{color:"white",textDecoration:"none"}}>Contact</a>
          </div>
        </div>

        <div>
          <div style={{fontWeight:700,marginBottom:8}}>Contact</div>
          <div style={{color:"rgba(255,255,255,0.9)"}}>
            <div>nnntejesh@.com</div> {/* #EDIT: your email */}
            <div style={{marginTop:8}}>© {new Date().getFullYear()} Neelam Naga Naren Tejesh</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
