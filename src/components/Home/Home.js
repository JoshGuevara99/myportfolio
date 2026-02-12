import React, { useState, useEffect } from 'react'
import './Home.scss'
import logo from "../../assets/images/logo-j.png"
import { Link } from 'react-router-dom'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'

function Home() {


    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 's', 'h', 'u', 'a']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];




    // useEffect(()=>{


    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     },4000)


    // },[])

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
        <div className='container home-page'>
            <div className='text-container'>
                <h1>
                    <span className='greeting-container-1'>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                    </span>


                    <br />
                    <span className='greeting-container-2'>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <span style={{ whiteSpace: "nowrap" }}>
                            <img className="logo-img" src={logo} alt="developer" />
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
                        </span>
                    </span>



                    <br></br>
                    <span className='greeting-container-3'>
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />

                    </span>

                    <br />



                </h1>


                <h2 className="title-container">Fullstack Developer</h2>
                <Link to="/about" className="flat-button">About Me</Link>

            </div>

            <Logo />

        </div>
    )
}

export default Home