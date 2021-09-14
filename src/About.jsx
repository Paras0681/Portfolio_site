import React from 'react'
import resume from './images/paraskamble_full_stack.pdf';
const About = () => {
    return (
        <section id="header" className='d-flex align-items-center'>
        <div className="about-heading">
            <div className="row">
                <a className="about" href='#'>
                    <p>I am a Fresher having experience in web development and Python</p>
                    <p>Proficient in JAVASCRIPT, PYTHON, HTML, CSS language.</p>
                    <p> Passionate about web-development, cyber-security, tech-realted stuff.</p>
                    <p> Looking for an industry that will enable me to increase
                        my skills as an entry-level Full-stack developer</p>
                </a>
            </div>
            <a href={resume} download="paras_kamble_full_stack" className="btn btn-dark ms-4 btns">My Resume</a>
        </div>            
        </section>
    )
}

export default About;
