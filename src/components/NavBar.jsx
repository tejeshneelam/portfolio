import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="brand-dot">N</div> {/* #EDIT: initial letter or replace with logo */}
        <div>
          <div className="brand-name">Neelam Naga Naren Tejesh</div> {/* #EDIT: name */}
          <div style={{fontSize:12, color:"rgba(255,255,255,0.8)"}}>Software Developer</div> {/* #EDIT: role */}
        </div>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a className="cta-contact" href="#contact">Contact</a>
      </nav>
    </header>
  );
}
