import React from 'react'
import netflix from './images/Netflix.png';
import insta from './images/insta.png';
import ecom from './images/ecom.png';
import meetup from './images/meetup.png';
import form from './images/form.png';
import blog from './images/blog.png';
const Projects = () => {
    return (
    <div className="container mt-5 p-container">
        <div className="row">
            <div className="col-6">
                <div className="card mb-4 pcard">
                <img src={netflix} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Netflix clone using Django+React Stack</h5>
                        <p className="card-text">Build and awesome Netflix clone using React and Django which operates same as Netflix.</p>
                        <a href="/" className="btn btn-outline-dark btns">Check out the code</a>
                    </div>
                </div>
                <div className="card mb-4 pcard">
                <img src={meetup} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Meetup site using React</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://github.com/Paras0681/Meetup-events-website" className="btn btn-outline-dark btns">Check out the code</a>
                    </div>
                </div>  
                <div className="card mb-4 pcard">
                <img src={blog} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Blogging site using Django.</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://github.com/Paras0681/Blogging-website-using-Django" className="btn btn-outline-dark btns">Check out the code</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-4 pcard">
                    <img src={insta} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Instagram clone using Django+React Stack.</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-outline-dark btns">Check out the code</a>
                        </div>
                    </div>
                    <div className="card mb-4 pcard">
                    <img src={ecom} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">E-commerce site using Django</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://github.com/Paras0681/E-commerce-website-using-Django" className="btn btn-outline-dark btns">Check out the code</a>
                        </div>
                    </div>
                    <div className="card mb-4 pcard">
                    <img src={form} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Form status website using Django</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://github.com/Paras0681/Form-Status-website-using_Django" className="btn btn-outline-dark btns">Check out the code</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Projects;
