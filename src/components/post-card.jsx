// external libs
import React from "react";
import {Link} from "gatsby";

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

  setColorBackground = (post) => {
    switch (post.categories[0].slug) {
      case 'bibliotheque-livres':
        return "aqua";
        break;
      case 'jukebox':
        return "pink";
        break;
      case 'piecesdetheatre':
        return "yellow";
        break;
      case 'podcasts':
        return "blue";
        break;
      case 'expos':
        return "pink";
        break;
      default:
        console.log('missing category');
    }
  };

  setIcon = (post) => {
    switch (post.categories[0].slug) {
      case 'jukebox':
        return <Music />;
        break;
      case 'bibliotheque-livres':
        return <Book />;
        break;
      case 'piecesdetheatre':
        return <Images />;
        break;
      case 'podcasts':
        return <Podcast />;
        break;
      case 'expos':
        return <Images />;
        break;
      default:
        console.log('missing category');
    }
  }

  render() {
    const post = this.props.post
    const backgroundColor = this.setColorBackground(post)
    return(
      <div className={`regular-card ` + backgroundColor}>

        <div className="card-header">
          <div className="card-icon">{this.setIcon(post)}</div>
          <div className="header-meta">
            <p className="meta">publié le : <span className="meta-content">{post.date}</span></p>
            <p className="meta">dans <span className="meta-content">{post.categories[0].name}</span></p>
          </div>
        </div>

        <div className="card-content">
          <img src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg" alt="book open and tea"/>
          <h3 className="card-title">
            <span dangerouslySetInnerHTML= {{__html: post.title}} />
          </h3>
          <p className="card-excerpt">
            <span dangerouslySetInnerHTML= {{__html: post.excerpt}} />
          </p>
          <Link to={post.slug} className="button simple-button more-link"><span>lire la suite</span></Link>
        </div>
      </div>

    )
  }
}


export default PostCard;
