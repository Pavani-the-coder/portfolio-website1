import React from 'react'
import './expierience.css'
import{BsFillCheckCircleFill} from 'react-icons/bs'
const Expierience = () => {
  return (
    <section id='experience'>
      <h5>My Skill set</h5>
      <h2>Experience</h2>
      <div className=' container experience__container'>
        <div className='experience__frontend'>
          <h3>FRONTEND DEVELOPMENT</h3>
          <div className='experience__content'>
               <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article>

                <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article>

                <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>React JS</h4>
                <small className='text-light'>Basic</small>
                </div>
                </article>

                <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>Javascript</h4>
                <small className='text-light'>basic</small>
                </div>
                </article>

                <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>JAVA AWT</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article>
              
                
          </div>
        </div>

        <div className='experience__backend'>
          <h3>BACKEND DEVELOPMENT</h3>
          <div className='experience__content'>
               <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>JAVA</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article>

                <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>Node Js</h4>
                <small className='text-light'>Basic</small>
                </div>
                </article>

                <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article>

                <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>J2EE</h4>
                <small className='text-light'>BASIC</small>
                </div>
                </article>

                <article className='experience__details'>
                                <BsFillCheckCircleFill className='experience__details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
                </div>
                </article>              
                
          </div>
        </div>



   
      </div>
    </section>
  )
}

export default Expierience