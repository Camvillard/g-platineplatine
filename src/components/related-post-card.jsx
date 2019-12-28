import React from "react";
import { Link } from "gatsby";


const RelatedPostCard = (props) => {
  const post = props.post
  const featuredImage = post.featured_media ? post.featured_media.source_url : "test"
  return(
    <div className="related-post-card">
      <img src={featuredImage} alt={post.title}/>
      <h5 className="post-title">
        <span dangerouslySetInnerHTML={{__html:  post.title}} />
      </h5>
      <p className="post-excerpt">
        <span dangerouslySetInnerHTML={{ __html: post.excerpt}}/>
      </p>

      <Link to={"/"+ post.slug} className="button simple-button more-link">
        <span>lire la suite</span>
      </Link>

    </div>
  )
}


export default RelatedPostCard;
