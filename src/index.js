import React, { useState } from 'react'
import ReactDOM from 'react-dom';




const Img = () => {
    return (
        <p>Hello kuva!</p>
    )
}

const Preview = (props) => {
    return (
        <div>
            <h3>{props.otsikko}</h3>
            <img src={props.kuva}></img>
            <p>{props.kuva} HALOO SATTANA</p>
        </div>
    )
}

const Header = () => {
    // Linkit landeriin 'meidän logo' kirjautuminen Metropolia API 
    return (
        <p>Hello header</p>
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
            <div>{renderPreviews()}</div>
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
        <div>
            <Header /> 
            <Grid tyotArray={tyotState} />
        </div>    
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

