import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <span className="home__social-label"># ls ./social</span>
        <div className="home__social-icons">
            <a href="https://www.linkedin.com/in/minhnguyen270405/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/QuangMinhNguyen27405" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100032507893904" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-facebook-f"></i>
            </a>
        </div>
    </div>
  )
}

export default Social
