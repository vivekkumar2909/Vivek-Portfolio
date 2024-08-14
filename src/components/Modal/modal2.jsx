/* eslint-disable react/prop-types */
import './Modal.scss';
import budget from './../../assets/budget.png'
import budget1 from './../../assets/budget1.png'
import budget2 from './../../assets/budget2.png'
import budget3 from './../../assets/budget3.png'
import budget4 from './../../assets/budget4.png'
// import React from 'react';
// import {Link} from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'

import { IoClose } from "react-icons/io5";
import { useEffect, useState } from 'react';

export default function Modal2({ setShowModal }) {

    const [image, setImage] = useState(budget4);

    const handleChangeImg = function (e) {
        console.log("Event", e.target.src);
        setImage(e.target.src);
    }
    const handleChangeImgOut = function () {
        // console.log("Event", e.target.src);
        setImage(budget4);
    }


    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return (
        <div className='modal' >
            <div className='scroll_model'>
                <div className='cross1'>
                    <IoClose className='cross' onClick={() => { setShowModal(false) }} />
                </div>
                <div className='Heading'>

                    <h1 >
                        IMDB Clone
                    </h1>
                </div>
                <div >
                    <hr className='line' />
                </div>
                <div className='Demo'>
                    <div className='Demo-live'>
                        <a href='https://imdb-clone-swart-three.vercel.app/' target="_blank" rel="noreferrer">
                            LIVE DEMO
                        </a>
                    </div>
                    <div className='Demo-live'>
                        <a href='https://github.com/vivekkumar2909/IMDB' target="_blank" rel="noreferrer">
                            SOURCE CODE
                        </a>
                    </div>
                </div>


                <div className='container'>
                    <div className='image-con'>
                        <img src={image} alt='pro' />
                        <div className='image_con2'>
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items' src={budget1} alt='pro' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items' src={budget2} alt='pro' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items' src={budget} alt='pro' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items' src={budget3} alt='pro' />
                        </div>
                    </div>

                    <div className='image-con1'>
                        <div className='description'>
                            <strong >
                                Description
                            </strong>
                        </div>

                        <p className='para'>
                            This project is a fully functional clone of the popular IMDb website, designed to provide users with an intuitive and engaging platform to explore movies, TV shows, and more. The clone includes several key features.The IMDb clone is built with a focus on user experience, offering a smooth and responsive interface, ensuring a seamless experience across all devices.
                        </p>
                        <div className='tech'>

                            <strong>Technology Used</strong>
                        </div>

                        <div className='tech_used'>
                            <div className='boarderClass'>
                                React
                            </div>
                            <div className='boarderClass'>
                                Next Js
                            </div>
                            {/* <div className='boarderClass'>
                                MongoDb
                            </div> */}
                            <div className='boarderClass'>
                                Tailwind CSS
                            </div>
                            {/* <div className='boarderClass'>
                                PrismaDb
                            </div> */}
                        </div>

                        <h1 className='feature'>
                            feature
                        </h1>

                        <p className='para'>

                            <div>
                                1. Trending Section: Stay updated with what's currently popular. This section displays the latest trending movies and TV shows, dynamically updated based on user interactions and latest releases.
                            </div>
                            <div>
                                2. Top Rated Section: Discover the best-rated content on the platform. This section lists movies and shows with the highest ratings, giving users easy access to critically acclaimed content.
                            </div>

                            <div>

                                3. About Section: A detailed overview of each movie or TV show, including a plot summary, cast and crew information, release dates, and more. Users can explore everything they need to know about their favorite titles.
                            </div>

                            <div>

                                4. User Interactions:

                                Dislikes: Users can express their opinions by disliking movies or shows they didn't enjoy. This feedback helps improve recommendations and content visibility.
                                Favorites: Users can mark movies and shows as favorites, creating a personalized list for easy access to their preferred content.
                            </div>
                            <div>
                                5. Dark Mode: For a modern and comfortable viewing experience, the clone includes a dark mode option. Users can switch between light and dark themes according to their preference.
                            </div>

                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}
