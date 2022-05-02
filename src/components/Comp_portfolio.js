import React from 'react';
import ReactDOM from 'react-dom';
import Img from 'react-optimized-image';
import button from '../img/button.png';
import LazyLoad from 'react-lazyload';
import parse from "html-react-parser";



// var images = {};
class Portfolio extends React.Component{

   constructor(props) {

    super(props);
    //setting intital state
    this.state = {
      error: null,
      isLoaded: false,
      portfolio: {},
      project: null,
      title: 'Portfolio',
      nav: 'UX Focused Product Design'
    };
    //onclick events can go here 
  }

  //api for albums 
  componentDidMount() {

    const portfolioURL = 'https://pixelurbia.com/wp-json/wp/v2/portfolio';
    fetch(portfolioURL, {
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
     .then((response) => response.json())
     .then(
        (result) => {
          this.setState({
            isLoaded: true,
            portfolio: result
          });
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


 project = (takeMe) => {
    this.setState({
      project: takeMe,
      title: takeMe.title.rendered,
      nav: '< Back'
    })
    // console.log(this.state);
    this.forceUpdate();
  }
   back = () => {
    this.setState({
      project: null,
      title: 'Portfolio',
      nav: 'UX Focused Product Design'
    })
    // console.log(this.state);
    this.forceUpdate();
  }

 

renderElement() {
  const { error, isLoaded, portfolio, project } = this.state
 

     if (isLoaded) {


      if (this.state.project == null){
        return (
          
          <div className="portfolio-area">
           {portfolio.map(works => (
              
              <div className="portfolioItem fade-in" key={works.id} onClick={() => this.project(works)}>
                


                <div className="imgContain" >
                  <img src={works.featured_image_src} />
                </div>
               
                
                
              </div>
            
            ))}
          </div>
              );
      } else {
        return (
            <div className="portfolio-full fade-in" key={project.id}>
                <div className="imgContain" >
                  <img src={project.featured_image_src} />
                </div>
                <div className="content">{parse(project.content.rendered)}</div>
            
            
          </div>
          );
      }
    }
}


  render() {
    const { error, isLoaded, portfolio, project, title, nav } = this.state
   // console.log(this.state);
    if (isLoaded){
    // console.log(portfolio);
    console.log(this.state);
    }
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        

        <section className="fullWidth portfolio">

            <div className="headings">
              <h3>{parse(title)}</h3>
              <h4 onClick={() => this.back()} >{nav}</h4>
            </div>  

            { this.renderElement() }


          </section>

      );
    }
  }  
}
      

//<h4 className="itemTitle">{parse(works.title.rendered)}</h4> 




export default Portfolio;