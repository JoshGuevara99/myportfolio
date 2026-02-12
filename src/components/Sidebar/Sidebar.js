import React from 'react'
import './Sidebar.scss'
import {Link, NavLink} from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Sidebar() {
  return (
    <div className= 'nav-bar'>
      <Link to='/' className='nav-logo-container' >
        <img src={logo}/>
      </Link>
      <nav>

        <NavLink exact = "true" activeClassName = "active" to = "/">
        <FontAwesomeIcon icon = {faHome} color = "4d4d4e"/>
        </NavLink>
        <NavLink className = "about-link" exact = "true" activeClassName = "active" to = "/about">
        <FontAwesomeIcon icon = {faUser} color = "4d4d4e"/>
        </NavLink>
        <NavLink className = "contact-link" exact = "true" activeClassName = "active" to = "/contact">
        <FontAwesomeIcon icon = {faEnvelope} color = "4d4d4e"/>
        </NavLink>

    </nav>
    <ul>
      <li>
        <a target = "_blank" 
        rel = "noreferrer"
        href="https://www.linkedin.com/in/joshua-g-89b3b118b/">
          <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e"/>
        </a>
      </li>
    </ul>
      </div>

 
  )
} 
