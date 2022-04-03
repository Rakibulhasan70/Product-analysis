import React from 'react';
import './Laptop.css'

const Laptop = (props) => {
    console.log(props.laptop);
    const { name, picture, rating, text } = props.laptop
    return (
        <div className='laptop-detail'>
            <h3>Name:{name}</h3>
            <h5>Rating: {rating} star</h5>
            <p>{text}</p>
        </div>
    );
};

export default Laptop;