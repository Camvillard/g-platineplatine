// external libs
import React from "react";
import { graphql, Link } from "gatsby";
import Slider from "react-slick";

// internal components
import SEO from "../components/seo";
import Header from "../components/header";
import Icons from "../components/icons"
import MailChimpForm from "../components/mailchimp-form";
import LastPostCard from "../components/last-post";
import PostCard from "../components/post-card";

// images & assets
import Logo from "../images/platine_logo-principal.svg";


// styles
import '../styles/main.scss';

class IndexPage extends React.Component {
  render(){
    const allPosts = this.props.data.allWordpressPost.edges
    const carouselPost = allPosts.slice(0,3)
    const firstSectionPosts = allPosts.slice(1, 5)
    const secondSectionPosts = allPosts.slice(6, 8)
    const lastPost = allPosts[0].node
    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return(
      <React.Fragment>
        <SEO id="homepage" title="Home" keywords={[`platine`, `culture`, `musique`, `livres`]} />

        <Header />

        <div className="fullwidth-container">

          <div className="homepage-section last-article-section">
            <Slider {...carouselSettings}>

              {carouselPost.map( post =>  {
                return <LastPostCard key={post.node.id} post={post.node} />
              })}
            </Slider>


          </div>

        </div>
        {/* end of .fullwidth-container */}

        <div className="container">

          <div className="homepage-section articles-section">

          { firstSectionPosts.map( post => <PostCard post={post.node} key={post.node.id} />) }

          </div>
          {/* end of .homepage-section.articles-section */}

        </div>
        {/* end of .container */}

        <div className="homepage-section newsletter-section">
          <h3 className="section-title">s'inscrire à la newsletter</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quae dolore rerum, neque mollitia, laborum nam at. Ad, alias illum enim nemo magnam sint eligendi consequuntur, voluptatum quia labore ullam.</p>

          <MailChimpForm />

        </div>
        {/* end of .newsletter-section */}


        <div className="container">

          <div className="homepage-section articles-section">

          { secondSectionPosts.map( post => <PostCard post={post.node} key={post.node.id} />) }

            <Link to="/" className="button simple-button more-link"><span>lire tous les articles</span></Link>

          </div>
          {/* end of .homepage-section.articles-section */}

        </div>
        {/* end of .container */}

        <div className="fullwidth-container">

          <div className="homepage-section about-section">

            <div className="left-section">
              en ce moment
            </div>

            <div className="right-section">

              <h3>à propos de platine</h3>
              <p>Come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback.So thirsty, deluminator firs’ years follow me 12 inches of parchment.
              </p>
              <Link to="/" className="button simple-button more-link">
                <span>en savoir plus</span>
              </Link>

            </div>

          </div>

        </div>
        {/* end of .fullwidth-container */}

      </React.Fragment>


    )
  }
}


export const query = graphql`
query homePage {
  site {
    siteMetadata {
      title
    }
  }

  allWordpressPost(
  limit: 8,
  sort: {fields: [date], order: [DESC] }
  ) {
      edges {
        node {
          id
          slug
          featured_media {
            source_url
          }
          title
          excerpt
          date(formatString: "DD/MM/YYYY" )
          categories {
            id
            slug
            name
          }

        }
      }
    }
}
`


export default IndexPage
