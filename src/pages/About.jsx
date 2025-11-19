import React from 'react'

export default function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="about-grid">
        <div>
          <p>
            {/* #EDIT: Write a short bio about your education, skills, and what you enjoy building. */}
            I'm a web developer from [City]. I like building responsive and accessible UIs using React.
          </p>
          <h4>Skills</h4>
          <ul className="skill-list">
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>Node.js (basic)</li>
            {/* #EDIT: Add or remove skills */}
          </ul>
        </div>

        <div className="about-right">
          <img src="/images/avatar.jpg" alt="avatar" className="about-avatar" onError={(e)=> e.target.style.display='none'} />
          {/* #EDIT: replace avatar.jpg in public/images */}
        </div>
      </div>
    </section>
  )
}
