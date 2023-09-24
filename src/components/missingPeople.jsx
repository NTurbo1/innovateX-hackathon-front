import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/missingPeople-style.css'
import { apiEndPoints } from '../apiEndPoints';

const MissingPeople = () => {
    // For testing only (replace with useEffect later)
    const mockData = [{"id":1,"category":"human","name":"Sayat","additional":"IT fan is missing, prolly sleeps somewhere. If you see him, please tell to return home.","image":"https://media.licdn.com/dms/image/D4D03AQH0ouS4XgTGKA/profile-displayphoto-shrink_800_800/0/1688196619724?e=2147483647\u0026v=beta\u0026t=cy0oQF5IxquCDqDHstjzMeZJb_dIrQys3P7MJrXVW-E"}]
    
    const [missingPeople, setMissingPeople] = useState(mockData);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    // useEffect(() => {
    //     fetch(apiEndPoints.missing, { mode: "cors" })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setMissingPeople(data);
    //     })
    //     .catch((error) => console.error(error));
    // }, []);

    return (
        <Carousel
            className='bg-gray-500 h-96 w-11/12 mx-auto m-0 p-7 rounded-lg'
            responsive={responsive}
        >
            {missingPeople.map((missingPerson) => (
                <div key={missingPerson.id} className='relative flex flex-col gap-5 items-center'>
                    <img
                        src={missingPerson.image}
                        alt={`missingPerson ${missingPerson.id}`}
                        className='h-48 w-48 object-cover rounded-lg'
                    />

                    <span>{missingPerson.name}</span>
                    <span>Additional Info: {missingPerson.additional}</span>
                </div>
            ))}
        </Carousel>
    );
};

export default MissingPeople;