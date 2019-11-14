import React from 'react'
import mainImage from '../assets/hero_placeholder_image.png';


const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-text-container'>
                <h1> Digital Design </h1>
                <span className="yellowLine" />
                <p> Hero Paragraph the collected bestsellers of Digital Design students, now as a coherent
         portfolio Digital Form Design life and purpose mental stuff. </p>
            </div>
            <div className='main-image-container'><img className="hero-image" src={mainImage} /></div>
        </section>
    )
}

export default Hero