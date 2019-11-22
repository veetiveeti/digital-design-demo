import React from 'react'
import Grid from './Grid'
import MainContent from './MainContent'
import ProjectInformation from './ProjectInformation'
import Hero from './Hero'

const Main = ({ handleSelection, applicationState, selectedSubmission, tyotState }) => {

    // Ehdollinen renderöinti

    // Jos komponentin App muuttuja selectedSubmission === null renderöidään <Grid />
    // Muissa tapauksissa renderöidään MainContent. Seuraava askel on renderöidä <MainContent /> 
    // sisältö MongoDBn datan mukaan.

    //main id='main' for WCAG and Keyboard Navigation reasons.

    if (applicationState === 'landing') {
        return (
            <main id='main'>
                <Hero />
                <Grid submissions={tyotState} handleSelection={handleSelection} />
            </main>
        )
    } else {
        return (
            <main>
                <MainContent handleSelection={handleSelection} submissionId={selectedSubmission} tyotState={tyotState}  />
            </main>
        )
    }
}

export default Main