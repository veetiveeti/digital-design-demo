import React, { useState, useEffect } from 'react'
import ProjectInformation from './ProjectInformation'
import submissions from '../utils/submissions'

const MainContent = (props) => {

    const [submissionToShow, setSubmissionToShow] = useState([])

    console.log('submission id :' + props.submissionId)

    useEffect(() => {
        submissions
            .getById(props.submissionId)
            .then(response => {
                console.log(response.data)
                setSubmissionToShow(response.data)
            })
    }, [])
  
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
                    <li>{submissionToShow.makers}</li>
                </ul>
                <ul className='year'>
                    <h2>Year</h2>
                    <li>{submissionToShow.year}</li>
                </ul>
            </div>
        </section>
    )
}

export default MainContent