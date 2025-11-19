import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="accent">Neelam Naga Naren Tejesh</span></h1>
        {/* #EDIT: Change Your Name above */}

        <p className="hero-sub">
          I build clean and simple web apps using React. I enjoy building UIs and solving problems.
        </p>
        {/* #EDIT: Replace the paragraph with your short bio */}

        <div className="hero-actions">
          <button className="btn" onClick={() => nav('/projects')}>See projects</button>
          <a className="btn btn-outline" href="/images/resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          {/* #EDIT: Add resume.pdf to public/images or update the path */}
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/hero.png" alt="hero" onError={(e)=> e.target.style.display='none'} />
        {/* #EDIT: add hero.png into public/images or change filename */}
      </div>
    </section>
  )
}
