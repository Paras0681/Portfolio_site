import React from 'react'
import man from './images/man.png';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
const Home = () => {
    const textRef1 = useRef();

    useEffect(()=>{
        init(textRef1.current, {
            showCursor: false,
            strings: ['Python Developer','Front-end Developer', 'Django-React stack developer']
        })
    },[])
    return (
        <section id="header" className='d-flex align-items-center'>
        <div className="heading">
            <div className="row">
                <div className="col">
                    <h2>Hi There,<br/><span>I,m Paras Kamble.</span></h2><br/><h3>Full Stack Developer,</h3>
                    <h4><span ref={textRef1}></span></h4>
                </div>
                <div className="col">
                    <img className='responsive' src={man} alt='my_pic'/>
                </div>
            </div>
        </div>            
        </section>
    )
}

export default Home;
