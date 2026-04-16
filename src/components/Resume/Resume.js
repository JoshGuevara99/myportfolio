import React from 'react'
import './Resume.scss'
import resumePreview from '../../assets/images/resume-preview.png'

function Resume() {
  return (
    <div className='resume-page'>
      <div className='resume-header'>
        <h1 className='resume-title'>Resume</h1>
        <a
          className='download-btn'
          href={`${process.env.PUBLIC_URL}/Resume_2_26.pdf`}
          download='Joshua_Guevara_Resume.pdf'
        >
          Download PDF
        </a>
      </div>

      <div className='resume-content'>
        <iframe
          className='resume-iframe'
          src={`${process.env.PUBLIC_URL}/Resume_2_26.pdf#toolbar=0&navpanes=0&scrollbar=0`}
          title='Joshua Guevara Resume'
        />
        <a
          className='resume-img-link'
          href={`${process.env.PUBLIC_URL}/Resume_2_26.pdf`}
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='resume-img-preview'
            src={resumePreview}
            alt='Resume preview'
          />
        </a>
      </div>
    </div>
  )
}

export default Resume
