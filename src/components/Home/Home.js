import React, { useState, useEffect, useRef } from 'react'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import photo from '../../assets/images/Photo.jpeg'
import resumePreview from '../../assets/images/resume-preview.png'

/* ── data ──────────────────────────────────────────────── */
const skills = [
  'TypeScript','Vue.js','React','Node.js',
  'Python','C#','BabylonJS','Kubernetes',
  'Docker','CI/CD','Linear Algebra','REST APIs',
]

const projects = [
  {
    title: 'On Deck',
    description: 'As a traveling musician, I never had a simple way to find places to perform in new cities. Event listings were scattered across different sites and formats, with no single app to surface nearby opportunities. So I built one. On Deck is an AI-powered event discovery platform that connects performers with open mics, jam sessions, and local music communities. It uses a tiered scraping pipeline—from iCal feeds and structured HTML to headless browsing and Gemini Flash Vision—to automatically populate a PostgreSQL-backed feed with real, local events.',
    tech: ['TypeScript', 'Node.js', 'Zod', 'Railway', 'PostgreSQL', 'Vercel'],
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #9b5de5 100%)',
    tag: 'Personal',
    live: 'https://on-deck-api.vercel.app/',
  },
  {
    title: '3D Digital Twin Platform',
    description: 'Production-grade 3D visualization software modeling real-world platforms in a cloud-native Kubernetes environment. Built at Beast Code for defense applications — scaling frontend architecture and applying linear algebra for accurate 3D spatial modeling.',
    tech: ['TypeScript','Vue.js','C#','BabylonJS','Kubernetes','Docker'],
    gradient: 'linear-gradient(135deg, #9b5de5 0%, #f72585 100%)',
    tag: 'Professional',
  },
  {
    title: 'Mathematical Tooling Platform',
    description: 'Internal platform built at Hurricane Electric. Architected a Node.js API integrating with external services and powering an interactive React data visualization interface — owned end-to-end.',
    tech: ['Node.js','React','JavaScript','REST APIs','Express'],
    gradient: 'linear-gradient(135deg, #f72585 0%, #9b5de5 100%)',
    tag: 'Professional',
  },
]

/* ── component ─────────────────────────────────────────── */
function Home() {
  /* hero animation */
  const [letterClass, setLetterClass] = useState('text-animate')
  const roleArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']

  /* contact form */
  const [cName,    setCName]    = useState('')
  const [cEmail,   setCEmail]   = useState('')
  const [cSubject, setCSubject] = useState('')
  const [cMessage, setCMessage] = useState('')
  const formRef    = useRef()
  const mapPos     = [40.7777, -73.9231]

  useEffect(() => {
    const id = setTimeout(() => setLetterClass('text-animate-hover'), 3600)
    return () => clearTimeout(id)
  }, [])

  /* ── scroll helper ─────────────────────────────────── */
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  /* ── contact form ──────────────────────────────────── */
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_f9tjnqq','template_qfu1v2k', formRef.current,'yNVwHd3oJMUNRjj6a')
      .then(() => {
        setCName(''); setCEmail(''); setCSubject(''); setCMessage('')
        alert('Message sent!')
      })
      .catch(() => alert('Error sending message.'))
  }

  /* ── render ────────────────────────────────────────── */
  return (
    <div className='site'>

      {/* ════ HERO ════════════════════════════════════ */}
      <section
        id='hero'
        className='section section--hero'
      >
        <div className='hero-content'>
          <p className='hero-pre'>Hi, I'm</p>

          <h1 className='hero-name'>Joshua</h1>

          <h2 className='hero-role'>
            <AnimatedLetters letterClass={letterClass} strArray={roleArray} index={21} />
          </h2>

          <p className='hero-location'>Fullstack · New York City</p>

          <div className='hero-ctas'>
            <button className='cta-primary' onClick={() => scrollTo('projects')}>
              View My Work <span className='cta-arrow'>→</span>
            </button>
            <button className='cta-secondary' onClick={() => scrollTo('resume')}>
              Resume ↓
            </button>
          </div>

        </div>

        <div className='hero-visual'>
          <div className='orb-gfx'>
            <div className='orb' />
            <div className='orb-ring' />
            <div className='orb-ring orb-ring--2' />
          </div>
        </div>

        <div className='scroll-indicator' onClick={() => scrollTo('projects')}>
          <span /><span /><span />
        </div>
      </section>

      {/* ════ ABOUT ═══════════════════════════════════ */}
      <section id='about' className='section section--about'>
        <div className='section-header'>
          <h2 className='section-title'>About Me</h2>
          <p className='section-sub'>Engineer · AI Integrator · Creator</p>
        </div>

        <div className='about-body'>
          <div className='about-photo-col'>
            <div className='photo-frame'>
              <img className='my-photo' src={photo} alt='Joshua Guevara' />
              <div className='photo-glow' />
            </div>
          </div>

          <div className='about-bio-col'>
            <div className='bio-card'>
              <p>Hello! I'm Joshua Guevara — you can call me Josh. I'm a Software Engineer originally from the Bay Area, California, now based in New York City.</p>
              <p>I graduated from San José State University in May 2022 with a degree in Applied Computational Mathematics and a minor in Computer Science.</p>
              <p>For the past two years I've worked as a Software Engineer at Beast Code, a Florida-based defense contractor, building production-grade 3D digital twin software. I develop and maintain a complex, interactive full-stack application built with TypeScript, Vue, and C# in a Kubernetes-managed, cloud-native environment — from scaling frontend architecture to applying linear algebra to model real-world platforms in 3D space.</p>
              <p>Prior to that I was at Hurricane Electric, where I led development of an internal mathematical tooling platform — architecting a Node.js API that powered an interactive React data visualization interface, end-to-end.</p>
              <p>I'm currently seeking new opportunities where I can apply my full-stack experience and mathematical background to build scalable, technically rigorous systems with real-world impact.</p>
              <p className='bio-hobbies'>Outside of engineering: guitar in my band, lifting, chess, history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ PROJECTS ════════════════════════════════ */}
      <section id='projects' className='section section--projects'>
        <div className='section-header'>
          <h2 className='section-title'>Projects</h2>
          <p className='section-sub'>Things I've built</p>
        </div>

        <div className='projects-grid'>
          {projects.map((p, i) => (
            <div className='project-card' key={i}>
              <div className='card-accent' style={{ background: p.gradient }} />
              <div className='card-body'>
                <div className='card-top'>
                  <span className='card-tag'>{p.tag}</span>
                  <div className='card-links'>
                    {p.github && (
                      <a href={p.github} target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className='card-title'>{p.title}</h3>
                <p className='card-desc'>{p.description}</p>
                <div className='card-tech'>
                  {p.tech.map(t => <span key={t} className='tech-chip'>{t}</span>)}
                </div>
                {p.live && (
                  <a href={p.live} target='_blank' rel='noreferrer' className='card-live-btn'>
                    View Live Site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ SKILLS ══════════════════════════════════ */}
      <section id='skills' className='section section--skills'>
        <div className='section-header'>
          <h2 className='section-title'>Tech Stack</h2>
          <p className='section-sub'>Tools of the trade</p>
        </div>

        <div className='skills-content'>
          <div className='skill-tags'>
            {skills.map(s => <span key={s} className='skill-tag'>{s}</span>)}
          </div>
        </div>
      </section>

      {/* ════ CONTACT ═════════════════════════════════ */}
      <section id='contact' className='section section--contact'>
        <div className='section-header'>
          <h2 className='section-title'>Contact</h2>
          <p className='section-sub'>Let's work together</p>
        </div>

        <div className='contact-grid'>
          <div className='contact-form-card'>
            <form className='contact-form' ref={formRef}>
              <ul>
                <li className='half'>
                  <input value={cName} type='text' name='from_name' placeholder='Name' required
                    onChange={e => setCName(e.target.value)} />
                </li>
                <li className='half'>
                  <input value={cEmail} type='email' name='from_email' placeholder='Email' required
                    onChange={e => setCEmail(e.target.value)} />
                </li>
                <li>
                  <input type='text' name='from_subject' value={cSubject} placeholder='Subject' required
                    onChange={e => setCSubject(e.target.value)} />
                </li>
                <li>
                  <textarea placeholder='Message' value={cMessage} name='message' required
                    onChange={e => setCMessage(e.target.value)} />
                </li>
                <li>
                  <input type='submit' className='flat-button' value='Send Message' onClick={sendEmail} />
                </li>
              </ul>
            </form>
          </div>

          <div className='contact-right'>
            <div className='info-card'>
              <p className='info-name'>Joshua Guevara</p>
              <p className='info-location'>New York City, New York</p>
              <a className='info-email' href='mailto:joshua.guevara124@gmail.com'>
                joshua.guevara124@gmail.com
              </a>
            </div>
            <div className='map-wrap'>
              <MapContainer center={mapPos} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={mapPos}>
                  <Popup>A wild Josh!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ════ RESUME ══════════════════════════════════ */}
      <section id='resume' className='section section--resume'>
        <div className='section-header'>
          <h2 className='section-title'>Resume</h2>
          <p className='section-sub'>Experience & background</p>
        </div>

        <div className='resume-actions'>
          <a
            className='cta-primary'
            href={`${process.env.PUBLIC_URL}/Resume_4_26.pdf`}
            download='Joshua_Guevara_Resume.pdf'
          >
            Download PDF ↓
          </a>
          <a
            className='cta-secondary'
            href={`${process.env.PUBLIC_URL}/Resume_4_26.pdf`}
            target='_blank'
            rel='noreferrer'
          >
            Open in new tab ↗
          </a>
        </div>

        <div className='resume-viewer'>
          <iframe
            className='resume-iframe'
            src={`${process.env.PUBLIC_URL}/Resume_4_26.pdf#toolbar=0&navpanes=0&scrollbar=0`}
            title='Joshua Guevara Resume'
          />
          <a
            className='resume-preview-link'
            href={`${process.env.PUBLIC_URL}/Resume_4_26.pdf`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='resume-preview-img'
              src={resumePreview}
              alt='Resume preview — click to open'
            />
            <span className='resume-preview-label'>Tap to open full resume</span>
          </a>
        </div>
      </section>

    </div>
  )
}

export default Home
