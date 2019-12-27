// external libs
import React from "react";
import { graphql, Link } from "gatsby";

// internal components
import Layout from "../components/layout"
import {createPrintedDate} from "../utilities/cards"
import CommentForm from "../components/comment-form"

// images & assets


// styles
import '../styles/main.scss';

class Post extends React.Component {

  setFeaturedImage = (post) => {
    if (post.featured_media) {
      return post.featured_media.source_url
    } else {
      return "https://contenu.platineplatine.com/wp-content/uploads/2019/09/placeholder-2.png"
    }
  };

  likePost = () => {
    console.log("like post")
  };

  render() {
    const post = this.props.data.wordpressPost
    const featuredImage = this.setFeaturedImage(post)
    return(
      <Layout>

        <div className="single-article-template container">

          <div className="post-header">
            <div className="header-meta">
              <Link className="meta uppercased-text" to={"/" + post.categories[0].slug }>{post.categories[0].name}</Link>
              <p className="meta uppercased-text">publié le { createPrintedDate(post.date)}</p>
            </div>
            <h2 className="post-title" >
              <span dangerouslySetInnerHTML= {{__html: post.title}} />
            </h2>
            <img src={featuredImage} alt={post.title}/>
          </div>

          <div className="post-content" dangerouslySetInnerHTML= {{__html: post.content}} />

          <div className="single-post-footer">
            <div className="like-section" onClick={this.likePost}>
               <span className="like">j'aime cet article</span>
            </div>
            <div className="footer-meta">
              <Link className="meta uppercased-text" to={"/" + post.categories[0].slug }>{post.categories[0].name}</Link>
              <p className="meta uppercased-text">publié le { createPrintedDate(post.date)}</p>
            </div>
          </div>

        </div>

        <div className="single-article-comments">

          <div className="container columns">

            <div className="add-comment-section">
              <h3>ajouter un commentaire</h3>
              <CommentForm postId={post.wordpress_id} />
            </div>

            <div className="recent-articles">
              <h3>articles reliés</h3>
            </div>
          </div>


        </div>

      </Layout>
    )
  }
}

export const query = graphql`
  query($id: String!, $postId: Int!) {

    wordpressPost(id: { eq: $id }) {

      featured_media {
        source_url
      }

      wordpress_id
      title
      date
      content
      slug
      categories {
        id
        name
        slug
      }
    }

    allWordpressWpComments(filter: {post: {eq: $postId}}){
      totalCount
      edges {
        node {
          id
          post
          content
          author
          author_name
          author_url
          date
          author_avatar_urls {
            wordpress_96
          }
        }
      }
    }
  }
`

export default Post;
