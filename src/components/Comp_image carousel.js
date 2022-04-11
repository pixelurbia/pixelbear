import '../css/HomePage.css';




function ImageCarousel(stuff) {

  return (
    <section id="fullWidth" class={stuff.class} key="hero"  style={{backgroundImage: `url(${stuff.img})`}}>
      <div class="section-text">
        {(stuff.divider == "top") ?  <span class="top-divider"/> : "" }
           <p> <span class="top-text">{stuff.TopText}</span>
            <br/>
            <span class="bottom-text">{stuff.BottomText}</span>
            {(stuff.divider == "bottom") ?  <span class="bottom-divider"/> : "" }
          </p>
            <p class="defining-text">{stuff.DefiningText}</p>
      </div>
    </section>
  );
 

}

export default ImageCarousel;
