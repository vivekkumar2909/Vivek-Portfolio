import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import logo from '../../assets/favicon.ico'


import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const previewURL =
    "https://drive.google.com/file/d/11paP4YjLnUoST017OJ2JlTXadEw91_f8/view?usp=sharing";

  const downloadURL =
    "https://drive.google.com/uc?export=download&id=11paP4YjLnUoST017OJ2JlTXadEw91_f8";

  const handleResumeClick = () => {
    // Open preview
    window.open(previewURL, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = "Vivek_Kumar_Resume.pdf";
    link.click();
  };

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
      <motion.div
        className="Resume"
        whileHover={{ scale: 1.1 }}
        onClick={handleResumeClick}
      >
        <motion.p whileTap={{ scale: 0.8 }} transition={{ delay: 0.1 }}>
          My Resume
        </motion.p>
      </motion.div>


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
