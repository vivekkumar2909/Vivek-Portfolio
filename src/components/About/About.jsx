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
          I am a BTech Computer Engineering graduate with a robust skill set in cutting-edge technologies and problem-solving capabilities. Using Next JS and React JS, I have developed dynamic and responsive user interfaces that enrich the user experience. Moreover, my areas of expertise include MySql and PrismaDB Client; therefore, I can architect an efficient and scalable backend system. On the backend, I am excellent at developing robust and optimized solutions with a strong foundation in C++. I have honed my problem-solving skills through constant practice on LeetCode and other such platforms, particularly the development of precise and creative solutions to complex algorithmic challenges. It is these diverse skill sets that, together with my dedication to excellence, make me a valuable asset for any team aiming to create innovation and thrive in a fast-moving technology environment.
        </p>

      </div>
      {/* <a href='https://www.sharda.ac.in/'> */}

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
      {/* </a> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
