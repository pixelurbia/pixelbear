import Img from 'react-optimized-image';
import FullWidth from './Comp_FullWidth.js';
import AboutBear from './Comp_AboutBear.js';
import Words from './Comp_words.js';
import Contact from './Comp_Contact.js';
import Albums from './Albums.js';
import React, { Component } from "react";



//IMGAES
import HeroImg from '../img/hero.jpg';
import pbs from '../img/pbs.png';
import dev from '../img/dev.jpg';
import portrait from '../img/pixelbear-blurred.png';
import contactbg from '../img/seattle-bg.png';






function HomePage() {
  return (
    <>

      <FullWidth 
        className="bottom-left fullWidth heroArea"
        TopText
        DefiningText="Cle Elum - Washington State"
        img={HeroImg}
        divider="bottom"
      />
  
       <AboutBear 
        className="about fullWidth"
        img={portrait}
        divider="bottom"

       />

       <Words 
        className="words fullWidth"
        divider="bottom"

        />


       <Contact 
        className="contact fullWidthNoFrame"
        img={contactbg}
        divider="bottom"

        />



    </>

  );




}

export default HomePage;
