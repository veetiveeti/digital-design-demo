import React from 'react'

const ProjectInformation = (props) => {
    //This data should be received from parent component with props

    return (
        <section className='hero-project-container'>
            <div className='hero-text-container'>
                <h1 className='project-headline'> Falling Leads </h1>
                <span className="yellowLine" />
                <p className='short-description'> Mobile application where user can solve or explore mysteries, phenomenons and themes individually or together with other users.
             Application provides a platform for creating and sharing games and stories. </p>
            </div>
            <div className='makers-year'>
                <ul className='makers'>
                    <h2>Team</h2>
                    <li>Johanna</li>
                    <li>Teemu</li>
                    <li>Akseli</li>
                </ul>
                <ul className='year'>
                    <h2>Year</h2>
                    <li>2017</li>
                </ul>
            </div>
        </section>
    )
}

export default ProjectInformation