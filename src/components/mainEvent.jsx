import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/mainEvent-style.css'
import { apiEndPoints } from '../apiEndPoints';

const MainEvent = () => {
    // For testing only (replace with useEffect later)
    // const mockData = [{"id":1,"name":"DSKHC","date":"11.11.2023","time":"13:30","image":"picture.png"}]
    
    const [events, setEvents] = useState([]);

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

    useEffect(() => {
        fetch(apiEndPoints.events, { mode: "cors" })
        .then((response) => response.json())
        .then((data) => {
            setEvents(data);
        })
        .catch((error) => console.error(error));
    }, []);

    return (
        <Carousel
            className='bg-gray-500 h-96 w-11/12 mx-auto m-0 p-7 rounded-lg'
            responsive={responsive}
            >
            {events.map((event) => (
                <div key={event.id} className='relative flex flex-col gap-5'>
                    <img
                        src={event.image}
                        alt={`Event ${event.id}`}
                        className='h-full object-cover rounded-lg'
                    />

                    <span>{event.name}</span>
                    <span>Time: {event.date} {event.time}</span>
                </div>
            ))}
        </Carousel>
    );
};

export default MainEvent;