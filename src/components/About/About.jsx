/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
    <div className="heading">
      <h1 >Introduction</h1>

      <div className='Subheading'>
        A Little About Me..
      </div>

      <p>
      As a BTech Computer Engineering graduate, I bring a robust skill set in cutting-edge technologies and 
      problem-solving capabilities to the table. Proficient in Next.js and React, I've developed dynamic and 
      responsive user interfaces that enhance user experiences. My expertise extends to MongoDB and PrismaDB, 
      enabling me to architect efficient and scalable backend systems. With a solid foundation in C++, I excel 
      in backend development, crafting robust and optimized solutions. I have honed my problem-solving skills through 
      extensive practice on platforms like LeetCode, where I tackle complex algorithmic challenges with precision and 
      creativity. My diverse skill set and dedication to excellence make me a valuable asset to any team aiming to innovate 
      and thrive in the rapidly evolving landscape of technology.
      </p>

      </div>

      <div className='app__flex'>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
