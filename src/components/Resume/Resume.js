import React, { useState, useEffect } from 'react'
import './Resume.scss'
import resumePreview from '../../assets/images/resume-preview.png'

function Resume() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="text-zone">Resume</h1>
        <a
          className="download-btn"
          href={`${process.env.PUBLIC_URL}/Resume_2_26.pdf`}
          download="Joshua_Guevara_Resume.pdf"
        >
          Download PDF
        </a>
      </div>

      <div className="resume-content">
        <iframe
          className="resume-iframe"
          src={`${process.env.PUBLIC_URL}/Resume_2_26.pdf#toolbar=0&navpanes=0&scrollbar=0`}
          title="Joshua Guevara Resume"
        />
        <a
          className="resume-img-link"
          href={`${process.env.PUBLIC_URL}/Resume_2_26.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="resume-img-preview"
            src={resumePreview}
            alt="Resume preview"
          />
        </a>
      </div>
    </div>
  )
}

export default Resume
