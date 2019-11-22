import React from 'react'
import mainImage from '../assets/hero_placeholder_image.png';

const Preview = (props) => {
    
    return (
        <div className='preview-card'>
            <img src={mainImage} />
            <h2>{props.name}</h2>
            <p className='card-paragraph'>{props.picture} {props.description}</p>
            <p>{props.course}</p>
            <p>{props.user}</p>
            <button onClick={props.handleSelection}>Read More </button>
        </div>
    )
}

export default Preview