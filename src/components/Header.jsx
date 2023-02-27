import React from 'react'
import { Link } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'


const Header = () => {
    return (
        <header className=' region header'>
            <a id="skip-to-content" href="#main">Skip To Main</a>

            <div className='wrapper header__inner'>
                <p><Link to='/'>Vanlife</Link></p>

                <nav>
                    <span><Link href='/'>About</Link></span>
                    <span><Link href='/'>Vans</Link></span>
                    <span><Link href='/'>Blog</Link></span>
                    <span><Link href='/'>Contact</Link></span>
                    <span className='login'><Link href='/'><BsPersonCircle fontSize={24} /></Link></span>
                </nav>

            </div>

        </header>
    )
}

export default Header