import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const VansCard = () => {
    const [vansData, setVansData] = useState([])

    useEffect(() => {
        fetch('/api/vans')

            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    return (
        <div>
            <div className='grid place-center' data-layout="van-items">

                {vansData.map(van => {
                    return (
                        <div className="simple" key={van.id}>
                            <Link to={`/vans/${van.id}`} className='flow' aria-label='van item'>
                                <img src={van.imageUrl} alt="van on rent " className='imageBox br-tl' />
                                <i className="vansType">{van.type}</i>
                                <h3>{van.name}</h3>
                                <p><strong>${van.price}</strong>/day </p>


                            </Link>
                        </div>

                    )
                })}

            </div>

        </div>
    )
}

export default VansCard