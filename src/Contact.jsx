import React from 'react';
import resume from './images/paraskamble_full_stack.pdf';
const Contact = () => {
    return (
        <div className='row mt-5 ms-5'>
            <span className='spans'><button className='btn btn-dark me-4' disabled>Gmail</button><a href='https://mail.google.com/mail/u/0/#inbox?compose=new'>paraskamble8268@gmail.com</a></span><br/>
            <span className='spans'><button className='btn btn-dark me-4' disabled>LinkedIn</button><a href='https://www.linkedin.com/in/paras-kamble/'>www.linkedin.com/in/paras-kamble/</a></span><br/>
            <span className='spans'><button className='btn btn-dark me-4' disabled>github</button><a href='https://github.com/Paras0681'>github.com/Paras0681</a></span><br/>
            <span className='spans'><button className='btn btn-dark me-4' disabled>Phone</button><a href='tel:9604210970'>9604210970</a></span><br/>
            <span className='spans'><button className='btn btn-dark me-4' disabled>Resume</button><a href={resume} download="paras_kamble_full_stack" className="btn btn-outline-dark ms-4 btns">My Resume</a></span>
        </div>
    )
}

export default Contact
