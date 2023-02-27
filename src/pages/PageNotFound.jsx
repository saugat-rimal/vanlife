import React from 'react'
import { GiSurferVan } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='region flow wrapper text-center width_unset '>
            <h1>404 Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <button className='secondary_button flex margin_auto'
                aria-label='find your van button'
                onClick={() => navigate(`/`)}
            >
                Go to Home Page
                <GiSurferVan color='#CDA274' />
            </button>
        </div>
    )
}

export default PageNotFound