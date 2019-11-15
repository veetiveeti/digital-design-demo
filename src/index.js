import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import axios from 'axios'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Main from './components/Main'
import submissions from './utils/submissions'

const App = () => {

    const [selectedSubmission, setSelectedSubmission] = useState([null])
    // Määrittää näkymän. tähän mennessä 'landing' meinaa grid näkymää ja 'inspect' meinaa 
    // tietty sitä yksittäisen työn tarkastelunäkymää.
    const [applicationState, setApplicationState] = useState('landing')

    const [tyotState, setTyotState] = useState([])

    useEffect(() => {
        setSelectedSubmission(null)
        submissions
            .getAll()
            .then(response => {
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
                <Hero />
            </header>
                <Main 
                    selectedSubmission={selectedSubmission} 
                    tyotState={tyotState} 
                    applicationState={applicationState}
                    />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

