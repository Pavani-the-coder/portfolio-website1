import React from 'react'
import resume from '../../Assets/resume.pdf';
const CV = () => {
  return (
    <div className="cta">
        <a href={resume} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>

    </div>
  )
}

export default CV