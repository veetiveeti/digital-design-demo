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
  
    return (
        <section className='description-wrapper'>
            <div className='description-container'>
                <p className='long-description-paragraph'>
                    <h1>{submissionToShow.headline}</h1>      
                </p>
            </div>
            <ProjectInformation />
        </section>
    )
}

export default MainContent