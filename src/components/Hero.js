import React from 'react'
import mainImage from '../assets/placeholder-1.png';

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-text-container'>
                <h1> Metropolia: Digital Design </h1>
                <span className="yellowLine" />
                <p> This is a collection of student projects created by the students of Digital Design in the Metropolia University of Applied Sciences. </p>
            </div>
            <div className='main-image-container'><img className="hero-image" src={mainImage} alt='Illustration of a lightbulb-headed person watering a plant' copyright='Property of the Absurd.design - https://absurd.design/' title='Property of the Absurd.design - https://absurd.design/'/></div>
        </section>
    )
}

export default Hero