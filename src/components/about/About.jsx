import React from "react";
import './about.css'
import ME from '../../Assets/myimage.jpg'
import {TbMilitaryAward} from 'react-icons/tb'
import {FaUsers} from 'react-icons/fa'
import {BsFolderFill} from 'react-icons/bs'



const About=()=>{
    return(  
        <section id="about">
            <h5>Get to know</h5>
            <h2> Me</h2>
            
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="alternate" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <TbMilitaryAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>

                        

                        <article className="about__card">
                            <BsFolderFill className='about__icon'/>
                            <h5>Projects</h5>
                            <small>5+</small>
                        </article>
                    </div>

                    <p>
                    A curious mind, who believes in learning something
new everyday. Collaborative team player with a
passion for full-stack development, seeking
opportunities to learn and grow in a dynamic work
environment.

                    </p>
                    <a href="#contact" className="btn btn-primary">Let's talk</a>

                </div>


            </div>



        </section>
    );
}

export default About
