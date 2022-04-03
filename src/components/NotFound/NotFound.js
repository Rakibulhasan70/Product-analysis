import React from 'react';
import image from '../../Images/error.webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error'>
            <h2>Opps!!!! sorry
                no data found
            </h2>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;