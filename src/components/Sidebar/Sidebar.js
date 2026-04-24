import React from 'react'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Sidebar() {
  return (
    <header className='navbar'>
      <button className='navbar-logo' onClick={() => scrollTo('hero')}>JG</button>

      <nav className='navbar-links'>
        <button onClick={() => scrollTo('hero')}>Home</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <button onClick={() => scrollTo('resume')}>Resume</button>
      </nav>

      <div className='navbar-social'>
        <a href='https://github.com/JoshGuevara99' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/joshua-g-89b3b118b/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </header>
  )
}
