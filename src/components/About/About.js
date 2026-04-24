import React from 'react'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import pythonLogo    from '../../assets/images/python-logo.png'
import typescriptLogo from '../../assets/images/ts-logo-256.png'
import vueLogo       from '../../assets/images/vue-logo.png'
import babylonLogo   from '../../assets/images/babylon-logo.png'
import photo         from '../../assets/images/Photo.jpeg'

function About() {
  return (
    <div className='about-page'>

      <div className='about-hero'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-subtitle'>Engineer · Mathematician · Creator</p>
      </div>

      <div className='about-body'>

        {/* ── Left: photo + cube ────────────────────── */}
        <div className='about-left'>
          <div className='photo-frame'>
            <img className='my-photo' src={photo} alt='Joshua Guevara' />
            <div className='photo-glow' />
          </div>

          <div className='cube-section'>
            <p className='cube-label'>Tech Stack</p>
            <div className='animation-container'>
              <div className='logo-spinner'>
                <div className='face1'><img className='python-logo'     src={pythonLogo}     alt='Python' /></div>
                <div className='face4'><img className='typescript-logo' src={typescriptLogo} alt='TypeScript' /></div>
                <div className='face3'><img className='vue-logo'        src={vueLogo}        alt='Vue' /></div>
                <div className='face2'><FontAwesomeIcon className='node-icon'  icon={faNode}  color='#3c873a' /></div>
                <div className='face5'><FontAwesomeIcon className='react-icon' icon={faReact} color='#61dafb' /></div>
                <div className='face6'><img className='babylon-logo'    src={babylonLogo}    alt='BabylonJS' /></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: bio + skills ───────────────────── */}
        <div className='about-right'>
          <div className='bio-card'>
            <p>
              Hello! I'm Joshua Guevara — you can call me Josh. I'm a Software Engineer originally from
              the Bay Area, California, now based in New York City.
            </p>
            <p>
              I graduated from San José State University in May 2022 with a degree in
              Applied Computational Mathematics and a minor in Computer Science.
            </p>
            <p>
              For the past two years I've worked as a Software Engineer at Beast Code, a Florida-based defense
              contractor, building production-grade 3D digital twin software. I develop and maintain a complex,
              interactive full-stack application built with TypeScript, Vue, and C# in a Kubernetes-managed,
              cloud-native environment — from scaling frontend architecture to applying linear algebra to model
              real-world platforms in 3D space.
            </p>
            <p>
              Prior to that I was at Hurricane Electric, where I led development of an internal mathematical
              tooling platform — architecting a Node.js API that powered an interactive React data visualization
              interface, end-to-end.
            </p>
            <p>
              I'm currently seeking new opportunities where I can apply my full-stack experience and mathematical
              background to build scalable, technically rigorous systems with real-world impact.
            </p>
            <p className='bio-hobbies'>
              Outside of engineering: guitar in my band, lifting, chess, history.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
