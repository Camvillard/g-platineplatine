// external libs
import React from "react";
import { graphql, Link } from "gatsby";
import Slider from "react-slick";

// internal components
import SEO from "../components/seo";
import LightHeader from "../components/light-header";
import Instagram from "../components/instagram";
import PostCard from "../components/post-card";
import BibliothequeCard from "../components/bibliotheque-card";

// images & assets
import { setColorBackground } from "../utilities/cards";

// styles
import '../styles/main.scss';

class Bibliotheque extends React.Component {


  render(){
    const allPosts = this.props.data.allWordpressPost.edges
    const carouselPost = allPosts.slice(0,6)
    console.log(carouselPost)
    // const lastPost = allPosts[0].node
    const carouselSettings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
    return(
      <div className="page-layout index-page page-container">
        <SEO title="la bibliothèque" keywords={[`platine`, `culture`, `musique`, `livres`]} />

        <LightHeader />

        <h1 className="page-title special-page-title">la bibliothèque</h1>

        <Slider {...carouselSettings} className="bibliotheque-carousel">

          {carouselPost.map( post =>  {
              return(
                <BibliothequeCard post={post} key={post.node.id} />)
            }
          )}

        </Slider>

        <div className="posts-container container">
          <h3>les autres articles</h3>

          <div className="grid two-columns">
            { allPosts.map( post => <PostCard post={post.node} key={post.node.id} />) }
          </div>

        </div>




        <Instagram />

      </div>


    )
  }
}


export const query = graphql`
  query bibliothequePage {
    site {
      siteMetadata {
        title
      }
    }

    allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "bibliotheque"}}}}) {
      edges {
        node {
          id
          excerpt
          slug
          content
          title
          date(formatString: "DD MMMM YYYY", locale: "fr-FR")
          featured_media {
            id
            source_url
          }
          categories {
            id
            name
          }
        }
      }
    }
  }
`


export default Bibliotheque
