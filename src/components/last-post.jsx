// external libs
import React from "react";
import {Link} from "gatsby";

// internal components
import { createExcerpt } from "../utilities/cards";

// images & assets


// styles


class LastPostCard extends React.Component {

  render(){
    const post = this.props.post
    return(
      <div className="last-article-card">

        <div className="last-article-box">
          <p className="uppercased-text">le dernier article</p>

          <h3 className="post-title">
            <span dangerouslySetInnerHTML= {{__html: post.title}} />
          </h3>

          <div className="post-header-meta">
            <p className="post-meta uppercased-text">publié le : {post.date}</p>
            <p className="post-meta uppercased-text">dans {post.categories[0].name}</p>
          </div>
        </div>
        {/* end of .last-article-box */}

        <div className="post-content">
          <img src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg" alt="book open and tea"/>
          <div className="post-excerpt">
            <div dangerouslySetInnerHTML= {{__html: createExcerpt(post.excerpt)}} />
            <Link to={"/" + post.slug} className="button button-block simple-button more-link"><span>lire la suite</span></Link>
          </div>
        </div>
      </div>
    )
  }
}


export default LastPostCard;
