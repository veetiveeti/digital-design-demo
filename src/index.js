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
            <div a className='skip' href='#main' role='link' tabIndex='0'><a>
             Skip to Main Content
            </a></div>
            <Logo />
            <ul className='header-navigation-items' role='navigation'>
                <li><a href="#" role='link' aria-label='Log in as an authorized user'> Log in </a></li>
                <li><a href="#" role='link' aria-label='This will transfer to external Metropolia Digital Design Website'> Metropolia </a></li>
            </ul>            
        </nav>
    )
}

//Omaksi komponentikseen eristetty hero
const Hero = () => {
    return (
     <section className='hero-container'>
        <div className='hero-text-container'>
        <h1> Digital Design </h1>
        <span className="yellowLine"/>
        <p> Hero Paragraph the collected bestsellers of Digital Design students, now as a coherent
         portfolio Digital Form Design life and purpose mental stuff. </p>
        </div>
        <div className='main-image-container'><img className="hero-image" src={mainImage}/></div>
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
            tyotArray.map(tyo => <Preview key={tyo.id} name={tyo.name}
                        // picture= not yet supported
                        description={tyo.description}
                        text={tyo.text}
                        //course={tyo.course}
                        //user={tyo.user}
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
            <img src={mainImage}/>
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
            <main id='main' role='portfolio' aria-label='Here is a collection of works on a grid. Each work has their own card.'>
            <Grid tyotArray={tyotState} />
            </main>
        </div>    
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

