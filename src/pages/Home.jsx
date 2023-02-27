import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <main id='main'>

            < section className='hero wrapper' aria-label='hero container' >

                <div className='wrapper region flow hero__inner' >
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button className='primary_button'>
                        Find Your Van
                        <HiOutlineArrowRight color='#CDA274' />
                    </button>
                </div>

            </ section>

            <article className='region' aria-label='what we do'>
                <div className='wrapper grid text-center ' data-layout="what_we_do">

                    <div className='flow width_unset'>
                        <h2 className='h3'>What is #vanlife</h2>

                        <p>Vanlife is a lifestyle that involves living in a van, truck, or other vehicle. </p>

                        <button className='skeleton_button '>
                            Read More
                            <HiOutlineArrowRight color='#CDA274' />
                        </button>
                    </div>

                    <div className='flow width_unset'>
                        <h2 className='h3'>What is #vanlife</h2>

                        <p>Vanlife is a lifestyle that involves living in a van, truck, or other vehicle. </p>

                        <button className='skeleton_button'>
                            Read More
                            <HiOutlineArrowRight color='#CDA274' />
                        </button>
                    </div>

                    <div className='flow width_unset'>
                        <h2 className='h3'>What is #vanlife</h2>

                        <p>Vanlife is a lifestyle that involves living in a van, truck, or other vehicle. </p>

                        <button className='skeleton_button'>
                            Read More
                            <HiOutlineArrowRight color='#CDA274' />
                        </button>
                    </div>

                </div>


            </article>


            <article>
                <div className='wrapper grid align-center' data-layout="50-50">

                    <div className='flow' tabIndex='0' aria-label='vanlife short intro'>
                        <h2>What is #vanlife?</h2>
                        <p>Vanlife is a lifestyle that involves living in a van, truck, or other vehicle. It is a way of life that allows you to travel and explore the world while living in a small space. </p>

                        <p> Vanlife is a way to live a more minimalistic lifestyle, and to be more in tune with nature. Vanlife is a way to live a more adventurous life.</p>
                    </div>

                    <img src="/about.png" alt="van on rent " className='imageBox' />

                </div>

            </article>

            <section className='region'>
                <div className='wrapper flow '>

                    <div className='flow text-center width_unset'>
                        <h2 >Explore Our Vans </h2>
                        <p >Don’t squeeze in a sedan when you could relax in a van.</p>
                    </div>

                    <div className='grid  mt-l-xl' data-layout="van-items">

                        <div>
                            <Link to='/van/1' className='flow' aria-label='van item'>
                                <img src="/van1.png" alt="van on rent " className='imageBox br-tl' />
                                <h3>Modest Explorer</h3>
                                <p><strong>$60</strong>/day </p>
                            </Link>
                        </div>

                    </div>

                </div>

            </section>


        </main >
    )
}

export default HomePage