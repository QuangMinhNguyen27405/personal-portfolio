import React from 'react'
import './skills.css'
import Backend from './Backend';
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">ls ~/skills</h2>
        <span className="section__subtitle">tools I reach for</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills
