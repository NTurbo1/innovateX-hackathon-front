import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/missingPeople-style.css'
import { apiEndPoints } from '../apiEndPoints';
import ReactModal from 'react-modal';

const MissingPeople = () => {
    
    const [missingPeople, setMissingPeople] = useState({})
    const [modelOpen, setModelOpen] = useState(false)
    const [modelContent, setModelContent] = useState("")

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
        fetch(apiEndPoints.missing, { mode: "cors" })
        .then((response) => response.json())
        .then((data) => {
            const missingPeople = {}
            data.forEach(element => {
                missingPeople[`${element.id}`] = element
            });
            setMissingPeople(missingPeople);
        })
        .catch((error) => console.error(error));
    }, []);

    return (
        <Carousel
            className='bg-gray-500 h-96 w-11/12 mx-auto m-0 p-7 rounded-lg'
            responsive={responsive}
        >
            {Object.entries(missingPeople).map(([id, missingPerson]) => (
                <div key={id} className='relative flex flex-col gap-5 items-center'>
                    <img
                        id={`${id}`}
                        onClick={(event) => {
                            setModelContent(() => {
                                return (
                                    <div className='model-content'>
                                        <span
                                            className='text-4xl w-full flex justify-center'
                                        >
                                            {missingPerson.name}
                                        </span>

                                        <div
                                            className='flex flex-col gap-3.5'
                                        >
                                            <span 
                                                className='text-2xl font-black text-center'
                                            >
                                                Additional Info
                                            </span>
                                            <span>{missingPerson.additional}</span>
                                        </div>
                                    </div>
                                )
                            })
                            setModelOpen(true)
                        }}
                        src={missingPerson.image}
                        alt={`missingPerson ${missingPerson.id}`}
                        className='h-72 w-72 object-cover rounded-lg'
                    />
                </div>
            ))}

            <ReactModal
                isOpen = {modelOpen}
                contentLabel="Example Modal"
                onRequestClose={() => setModelOpen(false)}
                className='w-96 h-96 bg-white rounded-xl p-5 flex flex-col items-center'
            >
                <button
                    onClick={() => setModelOpen(false)}
                    className='model-close-btn grow-0'
                >
                    X
                </button>

                {modelContent}
            </ReactModal>
        </Carousel>
    );
};

export default MissingPeople;