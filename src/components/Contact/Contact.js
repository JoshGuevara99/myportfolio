import React, { useState, useEffect, useRef } from 'react'
import "./Contact.scss"
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



function Contact() {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const position = [40.77770, -73.92314]




  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f9tjnqq', 'template_qfu1v2k', formRef.current, 'yNVwHd3oJMUNRjj6a')
      .then((result) => {
        console.log(result.text);

        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
        alert("Message Sent")
      }, (error) => {
        console.log(error.text);
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
        alert("Error")


      });
  };
  const [letterClass, setLetterClass] = useState('text-animate')

  const contactLetters = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']


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
    <div className="contact-page">
      <div className='left'>
        <div className="text-zone">
          <h1 className='contact-title' >
            Contact Me
          </h1>

          <h3 className='text'>
            Please contact me for further inquiries as I am always seeking new opportunities.
          </h3>

        </div>

        <form className='contact-form' ref={formRef} >
          <ul>
            <li className='half'>
              <input value={name} type="text" name="from_name" placeholder='Name' required onChange={e => setName(e.target.value)} />
            </li>
            <li className='half '>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="from_email" placeholder="Email" required />

            </li>
            <li className='whole'>
              <input type="text" name="from_subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" required />

            </li>
            <li className='whole'>

              <textarea placeholder='Message'
                value={message}
                name="message"
                onChange={e => setMessage(e.target.value)}
                required />

            </li>
            <li>
              <input type="submit" name="message" className="flat-button" value="Submit" onClick={sendEmail} required />

            </li>
          </ul>

        </form>
      </div>
      <div className='right'>


        <div className='info-container'>
          Joshua Guevara,
          <br />
          United States,
          <br />
          San Jose, CA
          <br />
          <span>
            joshua.guevara124@gmail.com
          </span>

        </div>

        <div className='map-wrap'>

          <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup className='popup'>
                A wild Josh!
              </Popup>
            </Marker>
          </MapContainer>

        </div>
      </div>






    </div>
  )
}

export default Contact 