import React from 'react';
import './LaptopDetails.css'

const LaptopDetails = (props) => {
    const { name, picture, rating, text } = props.laptop
    return (
        <div className='laptopDetailsAll'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h5>Rating: {rating} star</h5>
            <p>{text}</p>
        </div>
    );
};

export default LaptopDetails;