import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css'





const Header = () => {
    // Header container jaettu: nav + hero
    // Navissa 1. logo 2. sisäänkirjautuminen + linkki metropolian ländärille
    // Hero-containerissa h1 + hero paragraph
    // Header-komponentti eriytetään vielä omiksi nav- ja hero-komponenteikseen
    // ja laitetaan Header-parentin childreneiksi
    return (
        <header className='header-container'>
            <nav className='header-navigation'>
                <img src="#" alt="#" className='logo'></img>
                <ul className='header navigation-items'>
                    <li><a href="#"> Log in </a></li>
                    <li><a href="#"> Metropolia </a></li>
                </ul>
            </nav>
            <div className='hero-container'>
                <h1> Metropolian Digitaalinen Muotoilu </h1>
                <p> Tähän kuvaavaa tekstiä Digitaalisesta Muotoilusta. </p>
            </div>
        </header>
    )
}

//Omaksi komponentikseen eristetty navigation
const Navigation = () => {
    return (
        <nav className='header-navigation'>
            <img src="#" alt="#" className='logo'></img>
            <ul className='header navigation-items'>
                <li><a href="#"> Log in </a></li>
                <li><a href="#"> Metropolia </a></li>
            </ul>            
        </nav>
    )
}

//Omaksi komponentikseen eristetty hero
const Hero = () => {
    return (
     <div className='hero-container'>
        <h1> Metropolian Digitaalinen Muotoilu </h1>
        <p> Tähän kuvaavaa tekstiä Digitaalisesta Muotoilusta. </p>
     </div>        
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
            tyotArray.map(tyo => <Preview otsikko={tyo.otsikko} kuva={tyo.kuva} />)
        return (
            <div className='grid-container'>{renderPreviews()}</div>
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
            <img src={props.kuva} alt=" # "></img>
            <h2>{props.otsikko}</h2>
            <p>{props.kuva} HALOO SATTANA</p>
        </div>
    )
}


const App = () => {

    // Testidataa alapuolella, korvaa kenttä "kuva" kuvan urlilla

    let tyotArray = [
        {otsikko:"otsikko1", kuva:"kuva1"},
        {otsikko:"otsikko2", kuva:"kuva2"},
        {otsikko:"otsikko3", kuva:"kuva3"},
        {otsikko:"otsikko4", kuva:"kuva4"},
        {otsikko:"otsikko5", kuva:"kuva5"},

    ]

    const [tyotState, setTyotState] = useState(tyotArray)

    
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

