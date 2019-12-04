import React from 'react'
import { ReactComponent as Logo } from '../assets/placeholder_logo.svg'
import { ReactComponent as ExternalLink } from '../assets/external-link.svg'


const Navigation = ({handleSelection}) => {
    return (
        <nav className='header-navigation'>
            <a className='skip' href='#main' role='link' tabIndex='0'>
                Skip to Main Content
            </a>
            <Logo onClick={handleSelection(null)} handleSelection={handleSelection}/>
            <ul className='header-navigation-items' role='navigation'>
            <li className='external-link'><a href="https://www.metropolia.fi/en/academics/degree-programmes-in-finnish/media/#c42666" target='_blank' role='link' aria-label='This will you transfer to external Metropolia Digital Design Website'> Metropolia </a></li>
            </ul>
        </nav>
    )
}

export default Navigation