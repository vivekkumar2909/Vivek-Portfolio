/* eslint-disable react/prop-types */
import './Modal.scss';
import Aisass from '../../assets/Ai-sass.png';
// import React from 'react';
// import {Link} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { CgCloseO } from "react-icons/cg";
import { useEffect } from 'react';

export default function Modal({setShowModal}) {

    const handleChangeImg = function(e){
        console.log( "Event",e.target);
    }

    // const [showModal,setShowModel] = useState();

    useEffect(()=>{
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    },[])

    return (
        <div className='modal' >
            <div className='scroll_model'>
            <div className='cross1'>
                    <CgCloseO className='cross' onClick={() => {setShowModal(false)} }/>
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
                        <img src={Aisass} alt='pro' />
                        <div className='image_con2'>
                            <img onClick={handleChangeImg} className='items' src={Aisass} alt='pro' />
                            <img onMouseEnter={handleChangeImg} className='items' src={Aisass} alt='pro' />
                            <img className='items' src={Aisass} alt='pro' />
                            <img className='items' src={Aisass} alt='pro' />
                        </div>
                    </div>

                    <div className='image-con1'>
                        <h1 className='description'>
                            Description
                        </h1>

                        <p className='para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <h1 className='tech'>Technology Used</h1>

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
