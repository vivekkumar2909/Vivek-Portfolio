// import React from 'react';

import About from './components/About/About';
import Header from './components/Header/Header';
import Work from './components/Work/Work';

import Skills from './components/Skills/Skills';
// import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
// import Coding from './components/Coding/Coding';
import User from './components/User/User';

import  Navbar  from './components/Navbar/Navbar';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    {/* <Coding /> */}
    <User />
    <Footer />
  </div>
);

export default App;
