// external libs
import React from "react";
import { graphql, Link } from "gatsby";

// internal components
import Layout from "../components/layout"
import {createPrintedDate} from "../utilities/cards"
import CommentForm from "../components/comment-form"
import RelatedPostCard from "../components/related-post-card"
import CommentCard from "../components/comment-card"

// images & assets


// styles
import '../styles/main.scss';

class Post extends React.Component {

  state = {
    comments: null
  }

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

  createCommentNodes = (comments) => {
    // console.log("all comments", comments);
    const parentComments = comments.filter( comment =>
      comment.node.wordpress_parent === 0
   )
    // console.log("parent comments", parentComments)
    const childcomments = comments.filter( comment =>  comment.node.wordpress_parent !== 0)
    if (childcomments) {
      childcomments.forEach( comment => {
        const parent = parentComments.find( parentComment =>
          parentComment.node.wordpress_id === comment.node.wordpress_parent
          )
          parent.node.children ?
          parent.node.children = [...parent.node.children, comment]
          : parent.node.children = [comment]
        })
      }
    this.setState({
      comments: parentComments
    })

  }

  componentDidMount() {
    this.createCommentNodes(this.props.data.allWordpressWpComments.edges)
    this.setState({
      commentCount: this.props.data.allWordpressWpComments.totalCount
    })
  }

  render() {
    const post = this.props.data.wordpressPost
    const featuredImage = this.setFeaturedImage(post)
    const relatedArticles = this.props.data.allWordpressPost.edges
    const { comments } = this.state
    console.log(comments)
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

        <div className="single-article-comment-form">

          <div className="container columns">

            <div className="add-comment-section">
              <h3>ajouter un commentaire</h3>
              <CommentForm postId={post.wordpress_id} />
            </div>

            <div className="related-articles">
              <h3>articles reliés</h3>

              {relatedArticles && relatedArticles.map( node => {
                 return(
                    <RelatedPostCard post={node.node} key={node.node.id} />
                  )
              })}

            </div>
          </div>

        </div>

        <div className="single-article-comments container">

            { comments ?
              comments.map( comment => <CommentCard key={comment.node.id} comment={comment.node} />)
              : <p>il n'y a pas encore de commentaire</p> }
        </div>



      </Layout>
    )
  }
}

export const query = graphql`
  query($id: String!, $postId: Int!, $mainCategory: String!) {

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
          author_name
          author_url
          date
          wordpress_parent
          wordpress_id
          author_avatar_urls {
            wordpress_96
          }
        }
      }
    }

    allWordpressPost(
      filter: {categories: {elemMatch: {slug: {eq: $mainCategory}}} },
      limit: 3
    ) {
      edges {
        node {
          id
          comment_status
          excerpt
          slug
          title
          featured_media {
            id
            source_url
          }
        }
      }
    }
  }
`



export default Post;
