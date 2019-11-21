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
                <p className='long-description-paragraph'>
                    <h1>{submissionToShow.headline}</h1> 
                    <span className="yellowLine" /> 
                    <p>{submissionToShow.shortDesc}</p>    
                </p>
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
            </div>
        </section>
    )
}

export default MainContent