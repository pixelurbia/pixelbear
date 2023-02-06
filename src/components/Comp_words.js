//IMGs
import button from '../img/button.png';
import divider from '../img/big-div.png';
import React from 'react';


function FullWidth(stuff) {

  return (
    <section className={stuff.className}>
           <div className="big-div" style={{backgroundImage: `url(${divider})`}}></div>

      <div className="section-text">

         
          
          <p>
            <span className="word-cloud">
<span> PHOTOGRAPHY </span>
<span> VIDEO </span>
<span> DEVELOPMENT </span>
<span> DESIGN  </span>
<span> PROJECTMGNT </span>
<span> SYSTEMADMIN </span>
<span> ILLUSTRATION </span>
<span> SOFTWAREDESIGN </span>
<span> PRODUCTDESIGN </span>
<span> PLATFORMMGMT </span>
<span> USEREXPERIENCE </span>
<span> ENTERPRISESYSTEMS </span>
<span> ART </span>
<span> DATAVISUALIZATION </span>
<span> WEBHOSTING </span>
<span> INBOUNDMARKETING </span>
<span> CONTENTCREATOR </span>
<span> OCM </span>
<span> AGILE </span>
<span> PPM </span>
            </span>
          </p>
          </div>
         

    </section>
  );
 

}

export default FullWidth;
