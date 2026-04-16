import React, { useState, useEffect } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['o', 's', 'h', 'u', 'a']
  const roleArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

  useEffect(() => {
    const id = setTimeout(() => setLetterClass('text-animate-hover'), 4000)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className='home-page'>
      <div className='hero-content'>
        <p className='hero-pre'>Hi, I'm</p>

        <h1 className='hero-name'>
          <span className={`${letterClass} _14`}>J</span>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
        </h1>

        <h2 className='hero-role'>
          <AnimatedLetters letterClass={letterClass} strArray={roleArray} index={21} />
        </h2>

        <p className='hero-location'>Fullstack · New York City</p>

        <div className='hero-actions'>
          <Link to='/about' className='btn-primary'>About Me</Link>
          <Link to='/resume' className='btn-outline'>Resume</Link>
        </div>
      </div>

      <div className='hero-visual'>
        <div className='orb' />
        <div className='orb-ring' />
        <div className='orb-ring orb-ring--2' />
      </div>
    </div>
  )
}

export default Home
