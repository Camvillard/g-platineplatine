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

  return(
    <div className={`bibliotheque-card-container card-background ${backgroundColor}`}>
        <div className="bibliotheque-card" style={{backgroundImage: `url(${featuredImage})`}}>

          <Link to={post.slug}>
            <div className="post-header">

              <div className="post-header-meta">
                <p className="post-meta">publié le : <span className="meta-content">{post.date}</span></p>
              </div>

              <h3 className="post-title">
                <span dangerouslySetInnerHTML= {{__html: post.title}} />
              </h3>

            </div>
          </Link>


        </div>

        <div className="bibliotheque-hover-content">

          <div className="post-header">
            <div className="post-header-meta">
              <p className="post-meta">publié le : <span className="meta-content">{post.date}</span></p>
            </div>

            <h3 className="post-title">
              <span dangerouslySetInnerHTML= {{__html: post.title}} />
            </h3>
          </div>


          <div className="post-content">

            <p className="post-excerpt">
             <span dangerouslySetInnerHTML= {{__html: post.excerpt}} />
            </p>

            <Link to={"/"+ post.slug} className="button simple-button more-link">
              <span>lire la suite</span>
            </Link>

          </div>

        </div>
    </div>

  )
}



export default BibliothequeCard

