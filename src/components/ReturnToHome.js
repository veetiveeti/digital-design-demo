import React from 'react'

const ReturnToHome = ({handleSelection}) => {
    return (
        <section className='return-home-container'>
        <button onClick={handleSelection(null)} className='return-home-button'>Return to Homepage</button>
        </section>
    )
}

export default ReturnToHome