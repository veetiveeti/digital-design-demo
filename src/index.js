import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import { ReactComponent as Logo } from './assets/placeholder_logo.svg';




/* -- Header component eriytetty omiksi nav- ja hero-komponenteikseen ja 
laitetaan Header-parentin childreneiksi
const Header = () => {
    // Header container jaettu: nav + hero
    // Navissa 1. logo 2. sisäänkirjautuminen + linkki metropolian ländärille
    // Hero-containerissa h1 + hero paragraph
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
*/

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
        <h1> Digitaalinen Muotoilu </h1>
        <span className="yellowLine"/>
        <p> Hero Paragraph Muotoilun opiskelijoiden tekemiä töitä koottuna yhdelle 
            sivustolle Ipsumisti jossa Digi Muoto Muotoilua elämässä ja loremia järjessä. </p>
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
            tyotArray.map(tyo => <Preview otsikko={tyo.otsikko} kuva={tyo.kuva} />)
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
            <img src={props.kuva} alt=" # "></img>
            <h2>{props.otsikko}</h2>
            <p className='card-paragraph'>{props.kuva} Lyhyt kuvaus
             ensimmäisestä työstä, jossa opiskelijat tekivät ensimmäisen työn tähän töiden listalle.</p>
        </div>
    )
}


const App = () => {

    // Testidataa alapuolella, korvaa kenttä "kuva" kuvan urlilla

    let tyotArray = [
        {otsikko:"Otsikko1", kuva:"kuva1"},
        {otsikko:"Otsikko2", kuva:"kuva2"},
        {otsikko:"Otsikko3", kuva:"kuva3"},
        {otsikko:"Otsikko4", kuva:"kuva4"},
        {otsikko:"Otsikko5", kuva:"kuva5"},

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

