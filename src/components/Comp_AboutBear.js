//IMGs
import button from '../img/button.png';
import bigTriangle from '../img/big-triangle.png';
import smallTriangle from '../img/small-trigangle.png';
import banner from '../img/pixelbear-banner.png';
import Rellax from "rellax";
import React, { useRef, useEffect } from "react";
// var rellax = new Rellax('.rellax');


function FullWidth(stuff) {

 const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".animate", { // <---- Via class name
      speed: 4,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".animate-two", { // <---- Via class name
      speed: 7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".animate-three", { // <---- Via class name
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(rellaxRef.current, { // <---- Via useRef element
      speed: -10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);

  return (
    <section className={stuff.className} key="hero" style={{backgroundImage: `url(${stuff.img})`}}>
      <div className="section-contain">
      <div className="section-text">
        <div className="banner" style={{backgroundImage: `url(${banner})`}}></div>
          
          <p>
            <span className="side-text-left">

            <h2>Hey There, <br /> I'm Andy.</h2>
            Pixelbear.Studio was born from a love of design and aesthetics. I love making things look good, provacative, inspiring. I am a UX focused product developer. I also just really like bears!
            <br /><br />
            Product Focused Designer, Full-stack Developer, Artist, Project Manager, Business Developer and Marketing Professional. I have lived and breathed the start up life and worked the corporate ladder, these experiences have given me the unique perspective, that simplicity, is a art form that can and should be implmented in all we do. I love to build loveable products.
            <br /><br />
            I also have a deep passion for the visual arts, photography, self expression and personal enrichiment. Honestly I just wanna have a good time though. When I am not creating, I like to unwind with my favorite video game, watch Star Trek reruns or get lost out in the mountains with my overlanding group of friends. 
            </span>
          </p>
            <div className="button" style={{backgroundImage: `url(${button})`}}>
           <a href="/resume">Resume</a>
            </div>
         

            
      </div>
      <div className="triangles">
        
        <div className="main animate"   style={{backgroundImage: `url(${bigTriangle})`}}></div>
        <div className="small animate-two"  style={{backgroundImage: `url(${smallTriangle})`}}></div>
        <div className="small-two animate-three"  style={{backgroundImage: `url(${smallTriangle})`}}></div>
      </div>
      </div>


    </section>
  );
 

}

export default FullWidth;