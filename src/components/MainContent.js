import React, { useState, useEffect } from 'react'
import ProjectInformation from './ProjectInformation'
import submissions from '../utils/submissions'
import mainImage from '../assets/placeholder-1.png';

const MainContent = (props) => {

    const [submissionToShow, setSubmissionToShow] = useState([])

    console.log('submission id :' + props.submissionId)
    console.log(submissionToShow.imgUrls)

    useEffect(() => {
        submissions
            .getById(props.submissionId)
            .then(response => {
                console.log(response.data)
                setSubmissionToShow(response.data)
            })
    }, [])

    const Makers = () => {
        return (
            <li>{submissionToShow.makers}</li>
        )
    }

    const rows = () => submissionToShow.makers.map(makers =>
        <Makers />
    )
  
    //submissionToShow.makers -- create new array to makers-year with map
    return (
        <section className='description-wrapper'>
            <div className='description-container'>
                <h1>{submissionToShow.headline}</h1>
                <span className="yellowLine" />
                <p className='long-description-paragraph'>
                    {submissionToShow.shortDesc}
                </p>
            </div>
            <div className='makers-year'>
                <ul className='makers'>
                    <h2>Team</h2>
                    <li>{rows}</li>
                </ul>
                <ul className='year'>
                    <h2>Year</h2>
                    <li>{submissionToShow.year}</li>
                </ul>
            </div>
            <div className='long-description-container'>
                <p className='long-description'>
                    {submissionToShow.MainContent}
                </p>
            </div>
            <div className='image-container'>
            <img className="hero-image" src={submissionToShow.imgUrls} />
            </div>
            
        </section>
    )
}

export default MainContent