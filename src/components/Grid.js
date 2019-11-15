import React from 'react'
import Preview from './Preview'
import mainImage from '../assets/hero_placeholder_image.png';

const Grid = ({ submissions, handleSelection }) => {
    // Grid toiminta: for työ in työt <Preview /> ja css grid. 
    // const renderPreviews = () => {
    // tyotArray.map(tyo => {
    //     console.log(tyo)
    //     return (
    //         <Preview otsikko="otsiikkoo" kuva="otsiiiikkoo" />
    // Jos laitetaan App komponenttiin niin: <Grid tyotArray={tyotState} />    )
    // })
    const renderPreviews = () =>
        submissions.map(submission => <Preview key={submission.id} name={submission.headline}
            // picture= not yet supported
            description={submission.shortDesc}
            handleSelection={handleSelection(submission.id)}
        />)
    return (
        <section className="grid-wrapper">
            <div className='grid-container'>{renderPreviews()}</div>
        </section>
    )
}

export default Grid