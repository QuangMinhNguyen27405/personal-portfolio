import React, { useState, useRef, useEffect, useCallback } from 'react'
import './terminal.css'
import Resume from '../../assets/QuangMinh_Nguyen_Resume.pdf'

const BANNER = String.raw`   ___  _   _   _    _   _  ____   __  __ ___ _   _ _   _
  / _ \| | | | / \  | \ | |/ ___| |  \/  |_ _| \ | | | | |
 | | | | | | |/ _ \ |  \| | |  _  | |\/| || ||  \| | |_| |
 | |_| | |_| / ___ \| |\  | |_| | | |  | || || |\  |  _  |
  \__\_\\___/_/   \_\_| \_|\____| |_|  |_|___|_| \_|_| |_|`

const PROMPT_USER = 'visitor'
const PROMPT_HOST = 'quangminh27405.me'

const Prompt = () => (
  <span className="term__promptline">
    <span className="prompt">{PROMPT_USER}@{PROMPT_HOST}</span>
    <span className="out">:</span>
    <span className="prompt__path">~</span>
    <span className="prompt__sym">$</span>{' '}
  </span>
)

const L = ({ children, c }) => <div className={c ? `o-line ${c}` : 'o-line'}>{children}</div>

const EXPERIENCE = [
  {
    role: 'Software Engineer Intern', org: 'Arcanic AI',
    meta: 'Hanoi, Vietnam · May 2026 – Present',
    points: [
      'Built an AI multi-agent legal platform in LangGraph over 160K legal documents',
      'Lifted retrieval recall 82% → 91% and speed 40% via GraphRAG + HNSW vector search in Postgres',
      'Built an LLM query layer: HyDE, multi-query expansion, self-reflective refinement',
      'Co-built a ReBAC authorization system for fine-grained, relationship-based access',
    ],
  },
  {
    role: 'Software Engineer Fellow', org: 'Viet Tech Mentorship Program',
    meta: 'Remote (New York, NY) · Apr 2025 – Dec 2025',
    points: [
      'Built Treverse, a full-stack MERN job-application tracker, in a team of 10',
      'Cut data retrieval time 60% (8s → 3s) with cursor pagination + TanStack caching',
      'Architected 10+ REST APIs on a controller–service–repository pattern',
      'Wrote 40+ unit and integration tests (Mocha, Chai, Supertest)',
      'Automated an interview-resources pipeline (Gemini API, AWS Lambda, Redis)',
    ],
  },
  {
    role: 'Technical Lead', org: 'AWS Cloud Club, FSU',
    meta: 'Tallahassee, FL · Feb 2026 – Present',
    points: [
      'Leading a 6-member backend team building an image-processing system (Lambda, S3, DynamoDB)',
      'Coordinating APIs, data schemas, and integration across frontend, cloud, and docs teams',
      'Researched AWS + system design, ran technical presentations, onboarded backend members',
    ],
  },
]

const PROJECTS = [
  {
    name: 'Recall AI', date: 'Mar 2026',
    stack: 'FastAPI · React · Postgres · LangGraph · OpenSearch',
    award: null,
    points: [
      'RAG note-taking platform with workspace-scoped retrieval over OpenSearch vector search',
      'Hybrid search (BM25 + KNN) with reranking to sharpen retrieval accuracy',
      'LangGraph agent system for quiz generation, flashcards, and summarization',
    ],
    link: 'https://github.com/QuangMinhNguyen27405/recall-ai', linkLabel: 'github.com/QuangMinhNguyen27405/recall-ai',
  },
  {
    name: 'Open Pothole Map', date: 'Sep 2025',
    stack: 'Google Maps API · WebSocket · Firebase · GCS',
    award: '2nd place — Waymo Challenge, ShellHacks 2025',
    points: [
      'Live tracking + real-time pothole mapping via Maps, Geolocation & Device Orientation APIs',
      'WebSocket ingestion: server-side pothole detection, images persisted to Google Cloud Storage',
      'Secure OAuth 2.0 authentication via Firebase for sign-in and sessions',
    ],
    link: null, linkLabel: null,
  },
]

const SOCIALS = [
  { label: 'linkedin', url: 'https://www.linkedin.com/in/minhnguyen270405/', text: 'linkedin.com/in/minhnguyen270405' },
  { label: 'github', url: 'https://github.com/QuangMinhNguyen27405', text: 'github.com/QuangMinhNguyen27405' },
  { label: 'facebook', url: 'https://www.facebook.com/profile.php?id=100032507893904', text: 'facebook.com/minh' },
]

const Banner = () => (
  <div className="term__welcome">
    <pre className="term__banner">{BANNER}</pre>
    <L>Hi, I'm <span className="o-accent">Quang Minh Nguyen</span> — Software Engineer (backend + AI).</L>
    <L c="o-muted">Welcome to my terminal portfolio.</L>
    <L>
      Type <span className="o-cmd">help</span> to get started
      <span className="o-muted"> · or tap a command below · </span>
      <span className="o-muted">Tab</span><span className="o-muted"> autocompletes, </span>
      <span className="o-muted">↑/↓</span><span className="o-muted"> recalls history.</span>
    </L>
  </div>
)

const COMMANDS = {
  help: {
    desc: 'list every command',
    run: () => (
      <div className="o-grid-help">
        {ORDER.map((name) => (
          <React.Fragment key={name}>
            <span className="o-cmd">{name}</span>
            <span className="o-muted">{COMMANDS[name].desc}</span>
          </React.Fragment>
        ))}
      </div>
    ),
  },
  about: {
    desc: 'who I am',
    run: () => (
      <>
        <L>I'm a full-stack developer with a strong focus on <span className="o-accent">backend and AI systems</span>.</L>
        <L>I thrive on building agentic, retrieval-heavy products and solving challenging,</L>
        <L>unconventional problems at scale — recently a multi-agent legal RAG platform</L>
        <L>over 160K documents at Arcanic AI.</L>
        <L c="o-muted">Try: <span className="o-cmd">experience</span>, <span className="o-cmd">projects</span>, <span className="o-cmd">skills</span>, <span className="o-cmd">resume</span>.</L>
      </>
    ),
  },
  whoami: {
    desc: 'one-line summary',
    run: () => <L>Quang Minh Nguyen — Software Engineer · backend + AI · FSU CS '27</L>,
  },
  education: {
    desc: 'school & awards',
    run: () => (
      <>
        <L><span className="o-accent">Florida State University</span> — B.S. Computer Science (GPA 3.8)</L>
        <L c="o-muted">Expected May 2027 · Tallahassee, FL</L>
        <L><span className="o-key">awards  </span> ShellHacks 2025 Winner · 3× FSU ACM Contest Winner · President's List</L>
        <L><span className="o-key">courses </span> OOP · Data Structures & Algorithms · Operating Systems · DBMS · Software Engineering · Applied ML</L>
      </>
    ),
  },
  skills: {
    desc: 'tools I reach for',
    run: () => (
      <>
        <L><span className="o-key">languages </span> JavaScript · TypeScript · Python · Java · C++ · SQL · HTML/CSS</L>
        <L><span className="o-key">frameworks</span> React · Node.js · FastAPI · LangChain/LangGraph · Spring Boot</L>
        <L><span className="o-key">cloud     </span> AWS (Lambda, S3, DynamoDB) · GCP</L>
        <L><span className="o-key">databases </span> PostgreSQL (pgvector) · MongoDB · MySQL · Redis</L>
        <L><span className="o-key">tools     </span> Docker · Git/GitHub · OpenSearch</L>
      </>
    ),
  },
  experience: {
    desc: 'where I have worked',
    run: () => (
      <>
        {EXPERIENCE.map((e) => (
          <div className="o-block" key={e.org}>
            <L><span className="o-accent">{e.role}</span> <span className="o-muted">@ {e.org}</span></L>
            <L c="o-muted">{e.meta}</L>
            {e.points.map((p, i) => (
              <L key={i}><span className="o-bullet">›</span> {p}</L>
            ))}
          </div>
        ))}
      </>
    ),
  },
  projects: {
    desc: 'things I have built',
    run: () => (
      <>
        {PROJECTS.map((p) => (
          <div className="o-block" key={p.name}>
            <L>
              <span className="o-accent">{p.name}</span>
              <span className="o-muted"> · {p.date}</span>
              {p.award && <span className="o-award"> 🏆 {p.award}</span>}
            </L>
            <L c="o-muted"># {p.stack}</L>
            {p.points.map((pt, i) => (
              <L key={i}><span className="o-bullet">›</span> {pt}</L>
            ))}
            {p.link && (
              <L>
                <span className="o-bullet">↳</span>{' '}
                <a className="o-link" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel}</a>
              </L>
            )}
          </div>
        ))}
      </>
    ),
  },
  resume: {
    desc: 'download my resume',
    run: () => (
      <L>
        Opening resume &mdash;{' '}
        <a className="o-link" href={Resume} target="_blank" rel="noreferrer" download="QuangMinh_Nguyen_Resume.pdf">
          QuangMinh_Nguyen_Resume.pdf
        </a>
      </L>
    ),
    effect: () => { window.open(Resume, '_blank', 'noopener,noreferrer') },
  },
  socials: {
    desc: 'find me online',
    run: () => (
      <>
        {SOCIALS.map((s) => (
          <L key={s.label}>
            <span className="o-key">{s.label.padEnd(9)}</span>
            <a className="o-link" href={s.url} target="_blank" rel="noreferrer">{s.text}</a>
          </L>
        ))}
      </>
    ),
  },
  email: {
    desc: 'send me a message',
    run: () => (
      <L><a className="o-link" href="mailto:quangminh27405@gmail.com">quangminh27405@gmail.com</a></L>
    ),
  },
  banner: { desc: 'reprint the welcome banner', run: () => <Banner /> },
  history: { desc: 'commands you have run', run: (_args, ctx) => (
    ctx.cmdHistory.length
      ? <>{ctx.cmdHistory.map((c, i) => <L key={i}><span className="o-muted">{String(i + 1).padStart(3)}  </span>{c}</L>)}</>
      : <L c="o-muted">(no history yet)</L>
  ) },
  echo: { desc: 'echo [text]', run: (args) => <L>{args.join(' ')}</L> },
  date: { desc: 'current date/time', run: () => <L>{new Date().toString()}</L> },
  ls: { desc: 'list sections', run: () => (
    <L><span className="o-accent">about.md</span>  skills/  experience/  projects/  education/  <span className="o-accent">resume.pdf</span></L>
  ) },
  sudo: { desc: 'run as root', run: (args) => <L>Permission denied: nice try 😏 {args.length ? '' : "(you're not root here)"}</L> },
  clear: { desc: 'clear the terminal', run: () => null },
}

const ORDER = [
  'help', 'about', 'whoami', 'education', 'skills', 'experience',
  'projects', 'resume', 'socials', 'email', 'banner', 'history', 'clear',
]

const CHIPS = ['help', 'about', 'skills', 'experience', 'projects', 'resume', 'socials', 'clear']

const Terminal = () => {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const run = useCallback((raw) => {
    const trimmed = raw.trim()
    const [name, ...args] = trimmed.split(/\s+/)
    const key = name.toLowerCase()

    if (trimmed) setCmdHistory((prev) => [...prev, trimmed])
    setHistIdx(-1)

    if (key === 'clear') { setHistory([]); return }

    let output
    if (!trimmed) {
      output = null
    } else if (COMMANDS[key]) {
      output = COMMANDS[key].run(args, { cmdHistory })
      if (COMMANDS[key].effect) COMMANDS[key].effect()
    } else {
      output = (
        <L>
          command not found: <span className="o-error">{name}</span>
          <span className="o-muted"> — type </span><span className="o-cmd">help</span>
        </L>
      )
    }
    setHistory((prev) => [...prev, { cmd: raw, output }])
  }, [cmdHistory])

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!cmdHistory.length) return
      const next = histIdx < 0 ? cmdHistory.length - 1 : Math.max(0, histIdx - 1)
      setHistIdx(next)
      setInput(cmdHistory[next])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIdx < 0) return
      const next = histIdx + 1
      if (next >= cmdHistory.length) { setHistIdx(-1); setInput('') }
      else { setHistIdx(next); setInput(cmdHistory[next]) }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const frag = input.trim().toLowerCase()
      if (!frag) return
      const match = ORDER.find((c) => c.startsWith(frag))
      if (match) setInput(match)
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setHistory([])
    }
  }

  const runChip = (name) => {
    run(name)
    setInput('')
    inputRef.current?.focus()
  }

  return (
    <div className="term term--app" onClick={() => inputRef.current?.focus()}>
      <div className="term__bar">
        <div className="term__dots"><span></span><span></span><span></span></div>
        <span className="term__title">{PROMPT_USER}@{PROMPT_HOST}: ~ — zsh</span>
      </div>

      <div className="term__body">
        <Banner />

        {history.map((entry, i) => (
          <div className="term__entry" key={i}>
            <div className="term__line"><Prompt />{entry.cmd}</div>
            {entry.output && <div className="term__output">{entry.output}</div>}
          </div>
        ))}

        <div className="term__chips">
          {CHIPS.map((c) => (
            <button className="term__chip" key={c} onClick={(e) => { e.stopPropagation(); runChip(c) }}>
              {c}
            </button>
          ))}
        </div>

        <div className="term__input-line">
          <Prompt />
          <input
            ref={inputRef}
            className="term__input"
            value={input}
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
            aria-label="terminal input"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
          />
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  )
}

export default Terminal
