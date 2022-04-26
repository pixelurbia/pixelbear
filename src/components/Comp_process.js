//CSS
import '../css/HomePage.css';

//IMGs
import paper from '../img/paper.jpg';



function Process() {


  return (
   
        <section className="process">
          <div className="fullWidth">
            <div className="process-section">  
              <div className="text-entry">
                <p>
                  <h5>Product Owner - Live Streaming Services</h5>
                  <br/>
                  <b>Accretive Technology Group | Seattle | Dec 2019 - Present</b>
                  <br/>

                </p>
              </div>  
            </div>  
            </div>  
          <div className="paper" style={{backgroundImage: `url(${paper})`}}></div>

          </section>
  );
 

}

export default Process;