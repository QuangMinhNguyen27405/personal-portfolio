import React from 'react'
import { useState } from 'react';
import './services.css';
import FsuLogo from '../../assets/fsu-logo.png';
import FptLogo from '../../assets/fpt-logo.png';
import VtmpLogo from '../../assets/vtmp-logo.png';


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">What I do beyond the classroom</span>

        <div className="services__container container grid">

            <div className="services__content">
                <div>
                    <img src={VtmpLogo} alt="VTMP Logo" className="services__icon services__logo" />
                    <h3 className="services__title">Software Engineer Fellow <br /> @ VTMP </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i> 
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Software Engineer Fellow</h3>
                        <p className="services__modal-description">Viet Tech Mentorship Program</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developed Treverse: full-stack job application tracker</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Built UI with Tailwind CSS, ShadCN</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Improved pagination speed 50% using MongoDB</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Built interview sharing with Gemini API integration</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Automated daily updates with AWS Lambda, Redis</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <img src={FsuLogo} alt="FREAC Logo" className="services__icon services__logo" />
                    <h3 className="services__title">Application Developer Intern <br /> @ FREAC </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i> 
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Application Developer Intern </h3>
                        <p className="services__modal-description">Florida Resource And Environmental Analysis Center</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Engineered C++ GIS tool decoding sonar</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cut analysis runtime 90% using profiling</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Parsed 20,000 PDFs extracting coordinates</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <img src={FsuLogo} alt="FSU Logo" className="services__icon services__logo" />
                    <h3 className="services__title">Research Assistant <br /> @ Computer Vision Mlab - FSU </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i> 
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Research Assistant</h3>
                        <p className="services__modal-description">Computer Vision MLab, Florida State University</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developed synthetic data pipeline in OpenCV, PyTorch</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Conducted research and literature reviews</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Managed Linux Conda environments</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <img src={FptLogo} alt="FPT Software Logo" className="services__icon services__logo" />
                    <h3 className="services__title">Software Engineer Intern <br /> @ FPT Software</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(4)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i> 
                </span>

                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Software Engineer Intern</h3>
                        <p className="services__modal-description">FPT Software Company</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop a comment API backend feature in Java/Spring/MySQL</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Conducted thorough code reviews</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Acheived 85% coverage in Junit tests</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Attended daily stand-up meetings and sprint planning</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services
