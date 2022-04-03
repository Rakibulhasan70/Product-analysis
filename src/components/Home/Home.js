import React from 'react';
import './Home.css'
import image from '../../Images/mackbook.jpg'


const Home = () => {
    return (
        <div className='container'>
            <div className='details'>
                <h1 id='heading1'>Your Next Choice</h1>
                <h1 id='heading2'>Your Best Choice</h1>
                <p>Your best choice is here.Here is a lot of laptop collection.If you want any kind of laptop and barand or color etc, we will provied us instantly.Our shop is the best and trust worthy not only in area but also in city.Our product and service is masterpice. So sir/medum please visit our shop and choice your next one

                </p>
            </div>
            <div className='image'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;