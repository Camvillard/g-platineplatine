// external libs
import React from "react";
import { graphql, Link } from "gatsby";
import Slider from "react-slick";

// internal components
import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Instagram from "../components/instagram";
import PostCard from "../components/post-card";

// images & assets

// styles
import '../styles/main.scss';

class Bibliotheque extends React.Component {


  render(){
    const allPosts = this.props.data.allWordpressPost.edges
    const carouselPost = allPosts.slice(0,6)
    // const lastPost = allPosts[0].node
    const carouselSettings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
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
      <div className="page-layout index-page">
        <SEO title="la bibliothèque" keywords={[`platine`, `culture`, `musique`, `livres`]} />

        <Slider {...carouselSettings} className="bibliotheque-carousel">

          {carouselPost.map( post =>  {
              return(
                <div key={post.node.id} className="bibliotheque--carousel-card">

                  {post.node.title}

                </div>)
            }
          )}

        </Slider>

        biblotheque

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

    allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "bibliotheque-livres"}}}}) {
      edges {
        node {
          id
          excerpt
          content
          title
          featured_media {
            id
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
