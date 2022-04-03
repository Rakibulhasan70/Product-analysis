import React from 'react';
import './Reviews.css'
import UseProduct from '../../Hook/UseProduct';
import LaptopDetails from '../LaptopDetails/LaptopDetails';

const Reviews = () => {
    const [laptops, setLaptop] = UseProduct()
    return (
        <div className='products-review'>
            {
                laptops.map(laptop => <LaptopDetails
                    key={laptop.id}
                    laptop={laptop}
                ></LaptopDetails>)
            }
        </div>
    );
};

export default Reviews;