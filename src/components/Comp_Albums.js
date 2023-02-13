import React from 'react';
import ReactDOM from 'react-dom';
import FullWidth from './Comp_FullWidth.js';
import button from '../img/button.png';
import LazyLoad from 'react-lazyload';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";



// var images = {};
class FullAlbums extends React.Component{


   constructor(props) {

    super(props);
    //setting intital state
    this.state = {
      error: null,
      isLoaded: false,
      albums: {},
      folder: 'Albums',
      fullSize: null,
      imageStatus:null
    };
    //onclick events can go here 
  }

  //api for albums 
  componentDidMount() {

    const imagesURL = 'https://pixelbear.studio/api/albums';
    fetch(imagesURL, {
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
            albums: result
          });
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


 dir = (takeMe) => {
    this.setState({
      folder: takeMe
    })
    // console.log(this.state);
    this.forceUpdate();
  }

 back = () => {
    this.setState({
      folder: 'Albums'
    })
    // console.log(this.state);
    this.forceUpdate();
  }
fullSize = (fullSizedImage) => {
    this.setState({
      fullSize: fullSizedImage
    })
    // console.log(this.state);
    
  }
  closeBtn = () => {
    this.setState({
      fullSize: null,
      imageStatus: null
    })
    // console.log(this.state);
  }

   handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
    console.log(this.state); 
  }
 
renderFullimage() { 
    const { error, isLoaded, albums, folder, fullSize, imageStatus } = this.state
     if (isLoaded) {
      console.log(albums.fullSize); 
      
            if (this.state.fullSize != null){
        return (
          <div className="image-container-modal">
          <div className={`loading-button ${imageStatus ? null: 'fading'}`}>Loading</div>
          <div className={`fullsized ${imageStatus ? null: 'fade-in'}`}>
            <span className="closed-button" onClick={() => this.closeBtn()}>X Close</span>
            <img src={fullSize}  onLoad={this.handleImageLoaded.bind(this)}/>
          </div>
          <div className="fullbg fade-in"></div>
          </div>

          )
        }
     }
}

renderElement() {
  const { error, isLoaded, albums, folder } = this.state
 

     if (isLoaded) {


const album = albums.children.filter(album => album.name == this.state.folder);




      if (this.state.folder == 'Albums'){
        return (
          <div className="recent-photos">
               <ol> 
                  {albums.children.map(folders => (
                  <LazyLoad key={folders.name}>   
                    <li className="fade-in">
                     <h4 onClick={() => this.dir(folders.name)}>{folders.name} </h4>
                    </li>
                  </LazyLoad> 
                  ))}
                   </ol> 
              </div>
              );
      } else {


        return (

               <div className="album-photos">
               <h4 onClick={() => this.back()}>Back</h4>
              




                      {album[0].children.map(image => (

                <div 
                  key={image.name} 
                  style={{ background: `url(${image.path}) no-repeat`}}
                  className="fade-in  gal-img-contain" 
                  onClick={() => this.fullSize(image.full)} > 
                </div>

              ))}




            
              </div>
          );
      }
    }
}


  render() {
    const { error, isLoaded, albums, folder } = this.state
console.log(this.state);
// if (isLoaded){
//     // console.log(FullAlbums);
// }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
         <section className="fullWidth fullAlbum img-gallery">
            <div className="headings">
              <h3>{folder}</h3>
            </div>  


          { this.renderFullimage() }
          { this.renderElement() }


           
          </section>


      );
    }
  }
}



export default FullAlbums;