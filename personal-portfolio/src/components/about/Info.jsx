import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bxs-graduation about__icon'></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">Florida State University</span>
        </div>

        <div className="about__box">
            <i class='bx bx-code-alt about__icon' ></i>
            <h3 className="about__title">Programming Language</h3>
            <span className="about__subtitle">C++, Java, Python</span>
        </div>

        <div className="about__box">
            <i class='bx bx-search about__icon' ></i>
            <h3 className="about__title">Looking For</h3>
            <span className="about__subtitle">Software Engineer/IT Internship</span>
        </div>
    </div>
  )
}

export default Info
