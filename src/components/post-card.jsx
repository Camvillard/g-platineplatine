// external libs
import React from "react";
import { Link } from "gatsby";

// internal components
import Music from "../images/icon-music.svg"
import Book from "../images/icon-book.svg"
import Podcast from "../images/icon-podcast.svg"
import Images from "../images/icon-images.svg"

// images & assets


// styles


// categories :
// bibliethque : fond aqua / pastille jaune
// jukebox : fond rose / pastille aqua
// etc : fond jaune / pastille bleue

class PostCard extends React.Component {

  setColorBackground = () => {
    const colors = ["aqua", "pink", "yellow", "blue"]
    return colors[Math.floor(Math.random() * colors.length)]
  };

  setIconBackground = (color) => {
    const allColors = ["aqua", "pink", "yellow", "blue"]
    const selectedColors = []
    allColors.forEach( c => {
      if (c !== color) {
        selectedColors.push(c)
      }
    })
    return selectedColors[Math.floor(Math.random() * selectedColors.length)];
  }

  setIcon = (post) => {
    switch (post.categories[0].slug) {
      case 'jukebox':
        return <Music />;
      case 'bibliotheque-livres':
        return <Book />;
      case 'piecesdetheatre':
        return <Images />;
      case 'podcasts':
        return <Podcast />;
      case 'expos':
        return <Images />;
      default:
        console.log('missing category');
        return <Music />;
    }
  }

  render() {
    const post = this.props.post
    const backgroundColor = this.setColorBackground()
    const iconBackgroundColor = this.setIconBackground(backgroundColor)
    return(
      <div className={`regular-card ` + backgroundColor}>

        <div className="post-header">
          <div className={`post-icon ` + iconBackgroundColor}>{this.setIcon(post)}</div>
          <div className="post-header-meta">
            <p className="post-meta">publié le : <span className="meta-content">{post.date}</span></p>
            <p className="post-meta">dans <span className="meta-content">{post.categories[0].name}</span></p>
          </div>
        </div>

        <div className="post-content">
          <img src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg" alt="book open and tea"/>
          <h3 className="post-title">
            <span dangerouslySetInnerHTML= {{__html: post.title}} />
          </h3>
          <p className="post-excerpt">
            <span dangerouslySetInnerHTML= {{__html: post.excerpt}} />
          </p>
          <Link to={"/"+ post.slug} className="button simple-button more-link"><span>lire la suite</span></Link>
        </div>
      </div>

    )
  }
}


export default PostCard;
