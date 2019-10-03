// external libs
import React from "react";
import { graphql, Link } from "gatsby";
import Slider from "react-slick";

// internal components


// images & assets

// styles
import '../styles/main.scss';

class Bibliotheque extends React.Component {
  render(){

    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return(
      <div className="bibliothque-carousel-container">

      </div>


    )
  }
}



export default Bibliotheque
