import React from 'react'
import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
  return (
    <header className='navbar'>
      <Link to='/' className='navbar-logo'>JG</Link>

      <nav className='navbar-links'>
        <NavLink end to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
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
