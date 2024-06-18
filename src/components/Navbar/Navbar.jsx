import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import logo from '../../assets/favicon.ico'


import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" width={100} height={100} />

      </div>
      <h2>Vivek Kumar</h2>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'coding', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <a href='https://drive.google.com/file/d/1gZHIyQhOBEaqt5Rj4JQ69VGm5i9ptYDg/view?usp=sharing' target="_blank" rel="noreferrer">
        <motion.div className='Resume'
          whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.8 }}
          transition={{ delay: .1 }}
        >
          <motion.p whileTap={{ scale: 0.8 }} transition={{ delay: .1 }} >My Resume</motion.p>
        </motion.div>
      </a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
