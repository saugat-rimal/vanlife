import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='region footer'>
            <p className='wrapper'>
                Copyright © Vanlife | Designed by Saugat Rimal | View Source <Link to="https://github.com/saugat-rimal/vanlife" target='_blank' >Code on Github</Link>
            </p>
        </footer>
    )
}

export default Footer