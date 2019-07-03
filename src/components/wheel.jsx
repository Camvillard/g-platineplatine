// external libs
import React from "react";

// internal components


// images & assets


// styles

const allCategories = ['musique', 'livres', 'podcasts']

class Wheel extends React.Component {

  handleClick = () => {
    // pick a random number btw 0 and 360
    const newDegree = Math.floor(Math.random() * 360)
    console.log(newDegree)

    // spin the wheel using the value
    this.spinTheWheel(newDegree + 2000)
  }

  // spin the wheel using the degree
  // we set a transition duration of 4s,
  // to have that cool effect of speed
  spinTheWheel = (degree) => {
    const wheel = document.getElementById('wheel')
    wheel.style.transform = 'rotate(' + degree + 'deg)'
    console.log('spinned !')

    setInterval(() => {
      this.getCategory(degree % 360)
    }, 6000)
  }

  getCategory = (degree) => {
    let randomCategory
    console.log(degree, typeof degree)

    if (degree >= 0 && degree < 44) {
      randomCategory = "musique"
    } else if (degree > 45 && degree < 89) {
      randomCategory = "books"
    } else if (degree > 90  && degree < 134) {
      randomCategory = "expos"
    } else if (degree > 135  && degree < 179) {
      randomCategory = "theatre"
    } else if (degree > 180  && degree < 224) {
      randomCategory = "random"
    } else if (degree > 225  && degree < 269) {
      randomCategory = "films-series"
    } else if (degree > 270  && degree < 315) {
      randomCategory = "podcasts"
    } else {
      randomCategory = "prout"
    }
    this.chooseRandomArticle(randomCategory)

  }

  chooseRandomArticle = (category) => {
    console.log(category)
    // need to replace that with a props containing all the articles
    const allArticles = ["1", "4", "prout", "test"]
    const random = allArticles[Math.floor(Math.random() * allArticles.length)]
    console.log(random)
    console.log(`/${category}/${random}`)
    // window.location = `/${category}/${random}`
  }


  render() {
    return(
      <div id="wheel-container">
        <div className="wheel" id="wheel">
          <div className="wheel-block un"></div>
          <div className="wheel-block deux"></div>
          <div className="wheel-block trois"></div>
          <div className="wheel-block quatre"></div>
          <div className="wheel-block cinq"></div>
          <div className="wheel-block six"></div>
          <div className="wheel-block sept"></div>
          <div className="wheel-block huit"></div>
        </div>

        <div id="spin" onClick={this.handleClick}>
          faites tourner !
        </div>

      </div>
    )
  }
}


export default Wheel;
