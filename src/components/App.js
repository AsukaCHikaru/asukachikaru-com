
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import Navbar from './Navbar';
import Summary from './Summary';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import '../styles/App.css';
library.add(faTwitter);

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-wrapper'>
        <Summary />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
