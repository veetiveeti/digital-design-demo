import React from 'react'
import Grid from './Grid'
import MainContent from './MainContent'
import ProjectInformation from './ProjectInformation'

const Main = ({ selectedSubmission, tyotState }) => {

    // Ehdollinen renderöinti

    // Jos komponentin App muuttuja selectedSubmission === null renderöidään <Grid />
    // Muissa tapauksissa renderöidään MainContent. Seuraava askel on renderöidä <MainContent /> 
    // sisältö MongoDBn datan mukaan. Fronttihaaste Veetille? 

    if (selectedSubmission === null) {
        return (
            <main>
                <Grid submissions={tyotState} />
            </main>
        )
    } else {
        return (
            <main>
                <MainContent submissionId={selectedSubmission}  />
            </main>
        )
    }
}

export default Main