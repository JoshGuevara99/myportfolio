import React from 'react'
import './Sidebar.scss'
import {Link, NavLink} from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHome, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
export default function Sidebar() {
  return (
    <div className= 'nav-bar'>
      <Link to='/' className='nav-logo-container' >
        <img src={logo}/>
      </Link>
      <nav>

        <NavLink end className={({ isActive }) => isActive ? "active" : ""} to="/">
        <FontAwesomeIcon icon = {faHome} color = "4d4d4e"/>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "about-link active" : "about-link"} to="/about">
        <FontAwesomeIcon icon = {faUser} color = "4d4d4e"/>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "contact-link active" : "contact-link"} to="/contact">
        <FontAwesomeIcon icon = {faEnvelope} color = "4d4d4e"/>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "resume-link active" : "resume-link"} to="/resume">
        <FontAwesomeIcon icon = {faFileAlt} color = "4d4d4e"/>
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
      <li>
        <a target = "_blank"
        rel = "noreferrer"
        href="https://github.com/JoshGuevara99">
          <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e"/>
        </a>
      </li>
    </ul>
      </div>

 
  )
} 
