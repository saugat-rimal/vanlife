import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const VansDetail = () => {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    console.log(van)



    return (
        <>
            {van ? (
                <main id='main'>

                    {/* hero section  */}
                    < section className='hero wrapper' aria-label='hero container' >
                        <div className=' region flow hero__inner ' >
                            <div className='breadcrumb text-center width_unset flow'>
                                <h2>{van.name}</h2>
                                <p>
                                    <Link to="/">Home</Link> /  <Link to="/vans">Vans</Link> / {van.name}
                                </p>
                            </div>
                        </div>
                    </ section>

                    {/* about vans  */}
                    <article className='region'>
                        <div className='wrapper grid align-center' data-layout="50-50">

                            <img src={van.imageUrl} alt="van on rent " className='imageBox' />

                            <div className='flow' tabIndex='0' aria-label='vanlife short intro'>
                                <h2>{van.name}</h2>
                                <p>{van.description}</p>
                                <span className='flex'>
                                    <p><strong>Price: </strong> ${van.price}/day</p>
                                    <em className="vansType">{van.type}</em>
                                </span>
                            </div>
                        </div>
                    </article>

                </main>
            ) : (

                <div className='region wrapper text-center width_unset'>
                    <h2> Loading... </h2>
                </div>
            )
            }


        </>
    )
}

export default VansDetail