import React from "react";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-left">
                <div className="kicker">— Hello There!</div>
                <h1 className="hero-title">
                    I'm <span className="name">Neelam Naga Naren Tejesh</span>
                </h1>
                <p className="hero-sub">
                    I design clean, user-centric interfaces and build brand-driven digital experiences. I work across web and mobile products.
                </p>

                <div className="hero-cta">
                    <a className="btn btn-primary" href="#projects">View My Portfolio</a>
                    <a className="btn btn-secondary" href="/images/resume(updated).pdf" target="_blank" rel="noreferrer">Download Resume</a>
                </div>
            </div>

            <div className="hero-right" aria-hidden>
                <div className="hero-shape" /> {/* decorative yellow blob */}
                <img src="/images/hero-shape.png" alt="avatar" className="hero-avatar" onError={(e) => e.target.style.display = 'none'} />
                {/* #EDIT: Put avatar.jpg in public/images */}
            </div>
        </section>
    );
}
