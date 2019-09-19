import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import { ReactComponent as Logo } from './assets/placeholder_logo.svg';
import mainImage from './assets/hero_placeholder_image.png';
import axios from 'axios'


//Omaksi komponentikseen eristetty navigation - Logo importattu './assets/'
const Navigation = () => {
    return (
        <nav className='header-navigation'>
            <Logo />
            <ul className='header-navigation-items'>
                <li><a href="#"> Log in </a></li>
                <li><a href="#"> Metropolia </a></li>
            </ul>            
        </nav>
    )
}

//Omaksi komponentikseen eristetty hero
const Hero = () => {
    return (
     <section className='hero-container'>
        <div className='hero-text-container'>
        <h1> Digitaalinen Muotoilu </h1>
        <span className="yellowLine"/>
        <p> Hero Paragraph Muotoilun opiskelijoiden tekemiä töitä koottuna yhdelle 
            sivustolle Ipsumisti jossa Digi Muoto Muotoilua elämässä ja loremia järjessä. </p>
        </div>
        <div className='main-image-container'></div>
     </section>        
    )
}

const Grid = ( {tyotArray} ) => {
    // Grid toiminta: for työ in työt <Preview /> ja css grid. 
    // const renderPreviews = () => {
        // tyotArray.map(tyo => {
        //     console.log(tyo)
        //     return (
        //         <Preview otsikko="otsiikkoo" kuva="otsiiiikkoo" />
        //     )
        // })
        const renderPreviews = () =>
            tyotArray.map(tyo => <Preview name={tyo.name} 
                        picture="kuvia ei tueta vielä" 
                        description={tyo.description}
                        text={tyo.text}
                        course={tyo.course}
                        user={tyo.user}
                />)
        return (
            <section className="grid-wrapper">
            <div className='grid-container'>{renderPreviews()}</div>
            </section>
        )
}

const Img = () => {
    return (
        <p>Hello kuva!</p>
    )
}

const Preview = (props) => {
    return (
        <div className='preview-card'>
            <img src={props.picture} alt=" # "></img>
            <h2>{props.name}</h2>
            <p className='card-paragraph'>{props.picture} {props.description}</p>
            <p>{props.course}</p>
            <p>{props.user}</p>
        </div>
    )
}


const App = () => {

    // Testidataa alapuolella, korvaa kenttä "kuva" kuvan urlilla
    // Haetaan data from mongoDB

    

    const [tyotState, setTyotState] = useState([])
    
    useEffect(() => {
        console.log('effect')
        axios  
            .get('http://localhost:3001/submissions')
            .then(response => {
                console.log('promise fulfilled')
                setTyotState(response.data)
            })
    }, [])
    
    return (
        <div className='wrapper'>
            <header>
                <Navigation />
                <Hero />
            </header> 
            <Grid tyotArray={tyotState} />
        </div>    
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

