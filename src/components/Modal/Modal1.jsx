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

export default function Modal1({ setShowModal }) {

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
                        Ai-SAAS
                    </h1>
                </div>
                <div >
                    <hr className='line' />
                </div>
                <div className='Demo'>
                    <div className='Demo-live'>
                        LIVE DEMO
                    </div>
                    <div className='Demo-live'>
                        SOURCE CODE
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
                            This would hence be a website where all expenses and income were to be tracked on a yearly, monthly, and weekly basis. It is user-friendly, linking them very easily to make it easy for you to navigate through the website without worrying about getting the latest version of the website. It helps to realize the value of money spent by you on unnecessary things that you do not need to do. There are three sections in the website: manage, transaction, and dashboard. You can add, delete, and check history of income and expenses under the dashboard section. In the Manage section, you'll be able to manage your profile and currency category, among other things. The Transaction section will allow the downloading of history in CSV form with pagination, both for income and expense. All of these are going to be accessed by an authenticated user only.
                        </p>
                        <div className='tech'>

                            <strong>Technology Used</strong>
                        </div>

                        <div className='tech_used'>
                            <div>
                                React
                            </div>
                            <div>
                                Next Js
                            </div>
                            <div>
                                MongoDb
                            </div>
                            <div>
                                Tailwind CSS
                            </div>
                            <div>
                                PrismaDb
                            </div>
                        </div>

                        <h1 className='feature'>
                            feature
                        </h1>

                        <p className='para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}
