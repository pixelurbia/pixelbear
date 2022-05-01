//CSS


//IMGs
import herolines from '../img/herolines.png';
import button from '../img/button.png';


function FullWidth(stuff) {


  return (
    <section className={stuff.className} key="hero"  style={{backgroundImage: `url(${stuff.img})`}}>
      <div className="section-text">
        {(stuff.divider == "top") ?  <span className="top-divider"/> : "" }
          
          <p>
            <span className="side-text-right animate">
                FULL SERVICE DIGITAL STUDIO
            </span>
          </p>
          <div className="herolines" style={{backgroundImage: `url(${herolines})`}}></div>

            <span className="top-text">
              UX Design<br/>Development<br/>Art
            </span>
          <br/>
            <div className="button" style={{backgroundImage: `url(${button})`}}>
            <a href="/works">My Work </a>
            </div>
         

            
      </div>
    </section>
  );
 

}

export default FullWidth;
