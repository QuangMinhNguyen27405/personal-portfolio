import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div id="education__about__box" className="about__box">
            <i className='bx bxs-graduation about__icon'></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">FSU &middot; B.S. CS &middot; 3.8 GPA</span>
        </div>

        <div className="about__box">
            <i className='bx bx-trophy about__icon'></i>
            <h3 className="about__title">Awards</h3>
            <span className="about__subtitle">ShellHacks '25 &middot; 3&times; ACM</span>
        </div>

        <div className="about__box">
            <i className='bx bx-search about__icon'></i>
            <h3 className="about__title">Looking For</h3>
            <span className="about__subtitle">SWE Intern / New Grad</span>
        </div>
    </div>
  )
}

export default Info
