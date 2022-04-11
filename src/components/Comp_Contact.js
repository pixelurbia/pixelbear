//Other
import ContactForm from './Comp_ContactForm.js';

//CSS
import '../css/HomePage.css';

//IMGs
import button from '../img/button.png';
import bigTriangle from '../img/big-triangle.png';
import smallTriangle from '../img/small-trigangle.png';
import banner from '../img/pixelbear-banner.png';





function FullWidth(stuff) {

  return (
    <section className={stuff.className} key="hero"  style={{backgroundImage: `url(${stuff.img})`}}>
    
      <div className="contact-form-container">

      <p>
      Drop me a line. 
Tell me about your project. <br /> Or just say hi.
      </p>
        <div className="banner" style={{backgroundImage: `url(${banner})`}}></div>
            <span className="side-text-left">
                <ContactForm />            
                <div className="bluredBG" style={{padding: '0px', border: 'none', background:`802px 0px / contain   url(${stuff.img})`}}></div>
            </span>

          <br/>
     
      </div>

<div className="footer"> 
  <div className="small-div"></div>
  <h4>PIXELBEAR</h4>
  <h5>Full service digital studio</h5>
</div>



    </section>
  );
 

}

export default FullWidth;
