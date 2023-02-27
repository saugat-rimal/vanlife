import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <main id='main'>
            < section className='hero wrapper' aria-label='hero container' >

                <div className=' region flow hero__inner ' >
                    <div className='breadcrumb text-center width_unset flow'>
                        <h2>About US</h2>
                        <p>
                            <Link to="/">Home</Link> / About
                        </p>
                    </div>
                </div>
            </ section>

            <article className='region'>
                <div className='wrapper grid align-center' data-layout="50-50">

                    <div className='flow' tabIndex='0' aria-label='vanlife short intro'>
                        <h2>Why are we?</h2>
                        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br />
                            (Hitch costs extra 😉)</p>
                        <p>
                            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    </div>

                    <img src="/about.png" alt="van on rent " className='imageBox br-full' />

                </div>

            </article>
        </main>
    )
}

export default AboutPage