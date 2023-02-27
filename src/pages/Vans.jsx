import { Link } from "react-router-dom"
import VansCard from "../components/VansCard"


const VansPage = () => {



    return (

        <main id='main'>
            < section className='hero wrapper' aria-label='hero container' >
                <div className=' region flow hero__inner ' >
                    <div className='breadcrumb text-center width_unset flow'>
                        <h2>Vans</h2>
                        <p>
                            <Link to="/">Home</Link> / Vans
                        </p>
                    </div>
                </div>
            </ section>

            <section className='region'>
                <div className='wrapper flow '>

                    <div className='flow text-center width_unset'>
                        <h2 >Explore Our Vans </h2>
                    </div>

                    <div className=' mt-l-xl ' data-layout="van-items">
                        <VansCard />

                    </div>

                </div>

            </section>



        </main>

    )
}

export default VansPage