import React from 'react'
import './projects.css'

const PROJECTS = [
    {
        name: 'Recall AI',
        date: 'Mar 2026',
        stack: 'FastAPI · React · Postgres · LangGraph · OpenSearch',
        award: null,
        points: [
            'RAG note-taking platform with workspace-scoped retrieval over OpenSearch vector search',
            'Hybrid search (BM25 + KNN) with reranking to sharpen retrieval accuracy',
            'LangGraph agent system for quiz generation, flashcards, and summarization',
        ],
        link: 'https://github.com/QuangMinhNguyen27405/recall-ai',
        linkLabel: 'view repo',
    },
    {
        name: 'Open Pothole Map',
        date: 'Sep 2025',
        stack: 'Google Maps API · WebSocket · Firebase · GCS',
        award: '2nd — Waymo Challenge, ShellHacks 2025',
        points: [
            'Live tracking + real-time pothole mapping via Maps, Geolocation & Device Orientation APIs',
            'WebSocket ingestion: server-side pothole detection, images persisted to Google Cloud Storage',
            'Secure OAuth 2.0 authentication via Firebase for sign-in and sessions',
        ],
        link: null,
        linkLabel: null,
    },
]

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">ls ~/projects</h2>
        <span className="section__subtitle">things I&apos;ve built</span>

        <div className="projects__container container grid">
            {PROJECTS.map((p) => (
                <article className="projects__card" key={p.name}>
                    <div className="projects__head">
                        <h3 className="projects__name">{p.name}</h3>
                        <span className="projects__date">{p.date}</span>
                    </div>

                    {p.award && <span className="projects__award">🏆 {p.award}</span>}

                    <p className="projects__stack"># stack: {p.stack}</p>

                    <ul className="projects__list">
                        {p.points.map((pt, i) => (
                            <li className="projects__item" key={i}>
                                <span className="projects__bullet">&gt;</span>
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="projects__link">
                            {p.linkLabel}
                            <i className="uil uil-arrow-up-right"></i>
                        </a>
                    )}
                </article>
            ))}
        </div>
    </section>
  )
}

export default Projects
