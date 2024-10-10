import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Minh Nguyen</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/minh-nguyen-a4a8ab28b/" className="home__social-icon" target="_blank">
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/QuangMinhNguyen27405" className="home__social-icon" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100032507893904" className="home__social-icon" target="_blank">
                    <i className="uil uil-facebook-f"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
