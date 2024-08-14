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
                        <a href='https://vivek-portfolio-kappa.vercel.app/' target="_blank" rel="noreferrer">
                            LIVE DEMO
                        </a>
                    </div>
                    <div className='Demo-live'>
                        <a href='https://github.com/vivekkumar2909/Budget-Tracker' target="_blank" rel="noreferrer">
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
                            This would hence be a website where all expenses and income were to be tracked on a yearly, monthly, and weekly basis. It is user-friendly, linking them very easily to make it easy for you to navigate through the website without worrying about getting the latest version of the website. It helps to realize the value of money spent by you on unnecessary things that you do not need to do. There are three sections in the website: manage, transaction, and dashboard. You can add, delete, and check history of income and expenses under the dashboard section. In the Manage section, you'll be able to manage your profile and currency category, among other things. The Transaction section will allow the downloading of history in CSV form with pagination, both for income and expense. All of these are going to be accessed by an authenticated user only.
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
                            <div className='boarderClass'>
                                MongoDb
                            </div>
                            <div className='boarderClass'>
                                Tailwind CSS
                            </div>
                            <div className='boarderClass'>
                                PrismaDb
                            </div>
                        </div>

                        <h1 className='feature'>
                            feature
                        </h1>

                        <p className='para'>

                            <div>
                                1. User Authentication: Secure login, password recovery, and restricted access for authenticated users only.
                            </div>
                            <div>
                                2. Dashboard: Track income and expenses across different periods, manage transaction history, and visualize spending with charts.
                            </div>

                            <div>

                                3. Manage Section: Update profile details, and manage currency preferences and expense categories.
                            </div>

                            <div>

                                4. Transaction Section: Download transaction history in CSV format with pagination support.
                            </div>
                            <div>
                                5. User Interface: Intuitive, responsive design with real-time updates for seamless navigation.
                            </div>

                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}
