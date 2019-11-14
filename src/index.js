import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import mainImage from './assets/hero_placeholder_image.png';
import coverImage from './assets/hero-cover-image-placeholder.png';
import axios from 'axios'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Grid from './components/Grid'
import ProjectInformation from './components/ProjectInformation'
import HeroImage from './components/HeroImage'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Main from './components/Main'


const App = () => {

    // Testidataa alapuolella, korvaa kenttä "kuva" kuvan urlilla
    // Haetaan data from mongoDB

    const [selectedSubmission, setSelectedSubmission] = useState([null])

    const [tyotState, setTyotState] = useState([])

    

    useEffect(() => {
        setSelectedSubmission(null)
        axios
            .get('http://localhost:3001/submissions')
            .then(response => {
                console.log('promise fulfilled')
                setTyotState(response.data)
            })
    }, [])

    console.log(tyotState)

        // Etusivunäkymässä renderöitävät komponentit:
        // // Navigation
        // // Hero
        // // Grid
        // // Preview

        // Projektinäkymässä:
        // // Navigation
        // // ProjectInformation
        // // HeroImage
        // // MainContent

    return (


        <div className='wrapper'>
            <header>
                <Navigation />
                <ProjectInformation />
            </header> 
            <main>
                <HeroImage />
                <MainContent />
            </main>
        </div>    
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

