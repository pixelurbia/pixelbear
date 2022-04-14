import React from 'react';
import ReactDOM from 'react-dom';
import FullWidth from './Comp_FullWidth.js';
import button from '../img/button.png';
import divider from '../img/big-div.png';




      fetch("http://localhost:8000/url")
      .then(response => response.json())
      .then(data => console.log(data[0]));

var listOfImages =[];

class Albums extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../home-album/', false, /\.(png|jpe?g|svg)$/));
    }
  componentDidMount() {
  }
  //https://stackoverflow.com/questions/57058879/how-to-create-dynamic-routes-with-react-router-dom

    render(){
        return(

          <section className="fullWidth img-gallery">
          <div className="big-div" style={{backgroundImage: `url(${divider})`}}></div>
            <div className="headings">
              <h2>Recent Photos</h2>
            </div>  
            <div className="recent-photos">
              {
                    listOfImages.map(
                      (image, index) => <div className="img-contain"><img key={index} src={image.default}></img></div>
                    )
              }
            </div>
              <div className="button" style={{backgroundImage: `url(${button})`}}>
                <a href="/albums">View Albums</a>
              </div>
          </section>


        )
    }
}




export default Albums;