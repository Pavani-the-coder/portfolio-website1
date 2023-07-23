import React from "react";
import './service.css'
import {BsCheck} from 'react-icons/bs'

const Service=()=>{
    return(
        <section id="service">
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Designer</h3>
                    </div>
                    <ul className="service__list">
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>


                    </ul>
                </article>
                {/*End of UI/UX */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web devlopment</h3>
                    </div>
                    <ul className="service__list">
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>


                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>JAVA DEVELOPMENT</h3>
                    </div>
                    <ul className="service__list">
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>
                        <li><BsCheck className="service__list-icon"/><p>Lorem ipsum dolor sit amet consectetur, </p></li>


                    </ul>
                </article>

            </div>
        </section>
    );
}

export default Service