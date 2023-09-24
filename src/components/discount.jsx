import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/discount-style.css'
import { apiEndPoints } from '../apiEndPoints';

const Discount = () => {
    
    const [discounts, setDiscounts] = useState([]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1080 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1080, min: 464 },
            items: 3,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    useEffect(() => {
        fetch(apiEndPoints.discounts, { mode: "cors" })
        .then((response) => response.json())
        .then((data) => {
            setDiscounts(data);
        })
        .catch((error) => console.error(error));
    }, []);

    return (
        <Carousel
            className='bg-gray-500 h-96 w-11/12 mx-auto m-0 p-7 rounded-lg'
            responsive={responsive}
            >
            {discounts.map((discount) => (
                <div key={discount.id} className='relative'>
                    <img
                        src={discount.image}
                        alt={`Discount ${discount.id}`}
                        className='h-full rounded-lg discount-img'
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default Discount;
