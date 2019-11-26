import React from 'react'
import { ReactComponent as Logo } from '../assets/placeholder_logo.svg'


const Navigation = () => {
    return (
        <nav className='header-navigation'>
            <a className='skip' href='#main' role='link' tabIndex='0'>
                Skip to Main Content
            </a>
            <Logo />
            <ul className='header-navigation-items' role='navigation'>
            <li className='external-link'><a href="#" role='link' aria-label='This will you transfer to external Metropolia Digital Design Website'> Metropolia</a></li>
            </ul>
        </nav>
    )
}

export default Navigation