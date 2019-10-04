// external libs
import React from "react";
import { graphql, Link } from "gatsby";
import Slider from "react-slick";

// internal components
import { setColorBackground } from "../utilities/cards";

// images & assets

// styles
import '../styles/main.scss';

const BibliothequeCard = (props)  => {
  const post = props.post.node
  const featuredImage = post.featured_media.source_url ? post.featured_media.source_url : ""
  const backgroundColor = setColorBackground()
  console.log(backgroundColor)
  return(
    <div className={`bibliotheque-card-container card-background ${backgroundColor}`}>
      <div className="bibliotheque-card" style={{backgroundImage: `url(${featuredImage})`}}>
        <div className="post-header">

          <div className="post-header-meta">
            <p className="post-meta">publié le : <span className="meta-content">{post.date}</span></p>
          </div>

          <h3 className="post-title">
            <span dangerouslySetInnerHTML= {{__html: post.title}} />
          </h3>


        </div>

      </div>
    </div>

  )
}



export default BibliothequeCard

 // <div className={`regular-card ` + backgroundColor}>

 //        <div className="post-header">
 //          <div className={`post-icon ` + iconBackgroundColor}>{this.setIcon(post)}</div>
 //          <div className="post-header-meta">
 //            <p className="post-meta">publié le : <span className="meta-content">{post.date}</span></p>
 //            <p className="post-meta">dans <span className="meta-content">{post.categories[0].name}</span></p>
 //          </div>
 //        </div>

 //        <div className="post-content">
 //          <img src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg" alt="book open and tea"/>
 //          <h3 className="post-title">
 //            <span dangerouslySetInnerHTML= {{__html: post.title}} />
 //          </h3>
 //          <p className="post-excerpt">
 //            <span dangerouslySetInnerHTML= {{__html: post.excerpt}} />
 //          </p>
 //          <Link to={"/"+ post.slug} className="button simple-button more-link"><span>lire la suite</span></Link>
 //        </div>
 //      </div>
