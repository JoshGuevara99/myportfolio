import React, { useState, useRef } from 'react'
import './Contact.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const position = [40.7777, -73.9231]
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_f9tjnqq', 'template_qfu1v2k', formRef.current, 'yNVwHd3oJMUNRjj6a')
      .then(() => {
        setName(''); setEmail(''); setSubject(''); setMessage('')
        alert('Message sent!')
      })
      .catch(() => alert('Error sending message.'))
  }

  return (
    <div className='contact-page'>
      <div className='contact-header'>
        <h1 className='contact-title'>Contact Me</h1>
        <p className='contact-sub'>Let's work together</p>
      </div>

      <div className='contact-grid'>
        <div className='contact-form-card'>
          <form className='contact-form' ref={formRef}>
            <ul>
              <li className='half'>
                <input value={name} type='text' name='from_name' placeholder='Name' required
                  onChange={e => setName(e.target.value)} />
              </li>
              <li className='half'>
                <input value={email} type='email' name='from_email' placeholder='Email' required
                  onChange={e => setEmail(e.target.value)} />
              </li>
              <li>
                <input type='text' name='from_subject' value={subject} placeholder='Subject' required
                  onChange={e => setSubject(e.target.value)} />
              </li>
              <li>
                <textarea placeholder='Message' value={message} name='message' required
                  onChange={e => setMessage(e.target.value)} />
              </li>
              <li>
                <input type='submit' className='flat-button' value='Send Message' onClick={sendEmail} />
              </li>
            </ul>
          </form>
        </div>

        <div className='contact-right'>
          <div className='info-card'>
            <p className='info-name'>Joshua Guevara</p>
            <p className='info-location'>New York City, New York</p>
            <a className='info-email' href='mailto:joshua.guevara124@gmail.com'>
              joshua.guevara124@gmail.com
            </a>
          </div>

          <div className='map-wrap'>
            <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={position}>
                <Popup>A wild Josh!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
