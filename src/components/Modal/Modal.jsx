/* eslint-disable react/prop-types */
import './Modal.scss';
import budget from './../../assets/aisaas5.png'
import budget1 from './../../assets/aisaas2.png'
import budget2 from './../../assets/aisaas1.png'
import budget3 from './../../assets/aisaas3.png'
import budget4 from './../../assets/aisaas4.png'
// import React from 'react';
// import {Link} from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'

import { IoClose } from "react-icons/io5";
import { useEffect, useState } from 'react';

export default function Modal({ setShowModal }) {

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
                        <a href='https://ai-saa-s-one.vercel.app/' target="_blank" rel="noreferrer">
                            LIVE DEMO
                        </a>
                    </div>
                    <div className='Demo-live'>
                        <a href='https://github.com/vivekkumar2909/Ai-SaaS' target="_blank" rel="noreferrer">
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
                            This project is an advanced AI-driven SaaS platform designed to provide users with a wide range of generative capabilities using the powerful OpenAI API. The platform offers a suite of AI services, including Code, Conversation, Image, Music and video generation.This AI SaaS platform is designed to cater to a wide range of creative and technical requirements, providing users with powerful tools to bring their ideas to life.
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
                                1. Code Generation: Effortlessly generate code snippets, functions, or entire modules in various programming languages. Whether for web development, data processing, or automation, users can quickly obtain code tailored to their specific needs.
                            </div>
                            <div>
                                2. Image Generation: Users can create custom images by specifying detailed prompts. The platform leverages AI to generate high-quality visuals suitable for creative projects, marketing, and more.
                            </div>

                            <div>

                                3. Video Generation: Transform text prompts into dynamic video content. The AI-powered video generation tool enables users to create engaging videos for presentations, advertisements, and other multimedia applications.
                            </div>

                            <div>

                                4. Conversation Generation: Build realistic and context-aware conversations. This feature can be used for developing chatbots, simulating human interactions, or enhancing user engagement in various applications.
                            </div>
                            <div>
                                5. Music Generation: Compose unique music tracks based on user inputs. Whether for background music, soundtracks, or personal projects, this tool provides endless creative possibilities.
                            </div>

                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}
