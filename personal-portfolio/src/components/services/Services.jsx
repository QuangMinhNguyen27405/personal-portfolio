import React from 'react'
import { useState } from 'react';
import './services.css';
import VtmpLogo from '../../assets/vtmp-logo.png';


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">git log --experience</h2>
        <span className="section__subtitle">what I do beyond the classroom</span>

        <div className="services__container container grid">

            <div className="services__content">
                <div>
                    <div className="services__logo services__badge">~/arcanic</div>
                    <h3 className="services__title">Software Engineer Intern <br /> @ Arcanic AI </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Software Engineer Intern</h3>
                        <p className="services__modal-description">Arcanic AI &middot; Hanoi, Vietnam &middot; May 2026 &ndash; Present</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Built an AI multi-agent legal platform in LangGraph over 160K legal documents</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lifted retrieval recall 82% &rarr; 91% and speed 40% via GraphRAG + HNSW vector search in Postgres</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Built an LLM query layer: HyDE, multi-query expansion, self-reflective refinement</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Co-built a ReBAC authorization system for fine-grained, relationship-based access</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <img src={VtmpLogo} alt="VTMP Logo" className="services__icon services__logo" />
                    <h3 className="services__title">Software Engineer Fellow <br /> @ VTMP </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Software Engineer Fellow</h3>
                        <p className="services__modal-description">Viet Tech Mentorship Program &middot; Remote (New York, NY) &middot; Apr 2025 &ndash; Dec 2025</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Built Treverse, a full-stack MERN job-application tracker, in a team of 10</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cut data retrieval time 60% (8s &rarr; 3s) with cursor pagination + TanStack caching</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Architected 10+ REST APIs on a controller&ndash;service&ndash;repository pattern</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Wrote 40+ unit and integration tests (Mocha, Chai, Supertest)</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Automated an interview-resources pipeline (Gemini API, AWS Lambda, Redis)</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <div className="services__logo services__badge">~/aws</div>
                    <h3 className="services__title">Technical Lead <br /> @ AWS Cloud Club </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Technical Lead</h3>
                        <p className="services__modal-description">AWS Cloud Club, FSU &middot; Tallahassee, FL &middot; Feb 2026 &ndash; Present</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Leading a 6-member backend team building an image-processing system (Lambda, S3, DynamoDB)</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Coordinating APIs, data schemas, and integration across frontend, cloud, and docs teams</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Researched AWS + system design, ran technical presentations, onboarded backend members</p>
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
