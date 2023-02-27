import { Link } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'

const Header = () => {
    return (
        <header className=' region header'>
            <a id="skip-to-content" href="#main">Skip To Main</a>

            <div className='wrapper header__inner'>
                <p><Link to='/'>Vanlife</Link></p>

                <nav>
                    <Link to='/about'>About</Link>
                    <Link to='/vans'>Vans</Link>
                    <Link aria-label="My Account" className='login' to='/'><BsPersonCircle fontSize={24} /></Link>
                </nav>

            </div>




        </header>
    )
}

export default Header