import React, { useState, useEffect } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faJsSquare, faNode, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import pythonLogo from "../../assets/images/python-logo.png"
import photo from "../../assets/images/Photo.jpeg"


function About() {

  const [letterClass, setLetterClass] = useState('text-animate')

  const aboutLetters = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

  useEffect(() => {
    console.log("one home")
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



  return (
    <div className="about-container">
      
      <h1 className="text-zone">
        About Me
      </h1>

      <div className='content-container'>



          <img className="my-photo" src={photo} />



        <div className='animation-container'>
          <div className='logo-spinner'>
            <div className='face1'>
              <img className="python-logo" src={pythonLogo} />
            </div>
            <div className='face2'>
              <FontAwesomeIcon className="react-icon" icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon  className="js-icon" icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon className="node-icon" icon={faNode} color="#2c9c2a" />
            </div>


          </div>

        </div>

      </div>
      <div className='paragraph-container'>
        <p className='paragraph'>
Hello, I’m Joshua Guevara.

I’m a Software Engineer with a background in Applied Computational Mathematics, dedicated to building reliable, high-performance production systems.

Currently, I work at Beast Code, a defense contractor developing browser-based 3D visualization and digital-twin software. My day-to-day involves crafting complex, interactive UIs using TypeScript and Vue that interface with Kubernetes-managed, cloud-native environments. I thrive at the intersection of mathematics and systems engineering, ensuring that data-heavy simulations remain performant and maintainable. Whether I’m designing backend APIs, optimizing CI/CD pipelines, or debugging containerized environments, I focus on engineering fundamentals that lead to real-world impact.

When I’m not at my desk, you’ll find me playing guitar in my band, lifting, playing chess, or adventuring.</p>
      </div>


      <div className='project-container'>
          

      </div>


    </div>

  )
}

export default About