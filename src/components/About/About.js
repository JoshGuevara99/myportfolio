import React, { useState, useEffect } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faReact} from '@fortawesome/free-brands-svg-icons'
import pythonLogo from "../../assets/images/python-logo.png"
import typescriptLogo from "../../assets/images/ts-logo-256.png"
import vueLogo from "../../assets/images/vue-logo.png"
import babylonLogo from "../../assets/images/babylon-logo.png"
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

            <div className='face4'>
               <img className="typescript-logo" src={typescriptLogo} />
            </div>

            <div className='face3'>
              <img className="vue-logo" src={vueLogo} />

            </div>
            <div className='face2'>
              <FontAwesomeIcon className="node-icon" icon={faNode} color="#2c9c2a" />
            </div>

            <div className='face5'>
              <FontAwesomeIcon className="react-icon" icon={faReact} color="#5ED4F4" />
            </div>
      
      
        
            <div className='face6'>
                 <img className="babylon-logo" src={babylonLogo} />
            </div>


          </div>

        </div>

      </div>
      <div className='paragraph-container'>
        <p className='paragraph'>
         Hello! My name is Joshua Guevara. You can call me Josh.
         <br/>
         <br/>


I’m a Software Engineer originally from the Bay Area, California, and am currently based in New York City. I graduated from San José State University in May 2022 with a degree in Applied Computational Mathematics and a minor in Computer Science.

For the past two years, I’ve worked as a Software Engineer at Beast Code, a Florida-based defense contractor, where I build production-grade 3D digital twin software. Within the 3D team, I develop and maintain a complex, interactive full-stack application built with TypeScript, Vue, and C# that models real-world platforms in a Kubernetes-managed, cloud-native environment. From scaling frontend architecture, to improving CI/CD pipelines with performance testing and tooling, to applying linear algebra to accurately model physical platforms in 3D space, my work sits at the intersection of full-stack engineering and applied mathematics.
  <br/>
         <br/>

Prior to this, I worked as a Software Engineer at Hurricane Electric, where I led development of an internal mathematical tooling platform. I architected and maintained a Node.js API that integrated with external services and powered an interactive React-based data visualization interface, owning the system end-to-end.
  <br/>
         <br/>

I’m currently seeking new opportunities where I can apply my full-stack experience and mathematical background to build scalable, technically rigorous systems with real-world impact.

Outside of engineering, I enjoy staying active and creative. When I’m not developing software, you’ll find me playing guitar in my band, lifting at the gym, playing chess, or diving into history.</p>
      </div>


      <div className='project-container'>
          

      </div>


    </div>

  )
}

export default About