import React from 'react'
import mainImage from '../assets/placeholder-1.png';

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-text-container'>
                <h1> Digital Design </h1>
                <span className="yellowLine" />
                <p> Hero Paragraph the collected bestsellers of Digital Design students, now as a coherent
         portfolio Digital Form Design life and purpose mental stuff. </p>
            </div>
            <div className='main-image-container'><img className="hero-image" src={mainImage} alt='Illustration of a lightbulb-headed person watering a plant' copyright='Property of the Absurd.design - https://absurd.design/' title='Property of the Absurd.design - https://absurd.design/'/></div>
        </section>
    )
}

export default Hero