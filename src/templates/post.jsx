// external libs
import React from "react";
import { Link } from "gatsby";

// internal components
import Layout from "../components/layout"

// images & assets


// styles
import '../styles/main.scss';

class Post extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    const featuredImage = post.featured_media.source_url
    return(
      <Layout>

      <div className="single-article-template">

        <div className="post-header">
          <div className="header-meta">
            <p className="meta uppercased-text">{post.categories[0].name}</p>
            <p className="meta uppercased-text">publié le : {post.date}</p>
          </div>
          <img src={featuredImage} alt={post.title}/>
        </div>

        <div className="post-content" dangerouslySetInnerHTML= {{__html: post.content}} />

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
