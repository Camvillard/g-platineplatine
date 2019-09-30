// external libs
import React from "react";
import { graphql, Link } from "gatsby";
import Slider from "react-slick";

// internal components
import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import MailChimpForm from "../components/mailchimp-form";
import LastPostCard from "../components/last-post";
import PostCard from "../components/post-card";

// images & assets

// styles
import '../styles/main.scss';

class IndexPage extends React.Component {
  render(){
    const pageData = this.props.data.wordpressPage.acf
    console.log(pageData)
    const allPosts = this.props.data.allWordpressPost.edges
    const carouselPost = allPosts.slice(0,3)
    const firstSectionPosts = allPosts.slice(1, 5)
    const secondSectionPosts = allPosts.slice(6, 8)
    // const lastPost = allPosts[0].node
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
        <Navbar />

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
          <h3 className="section-title">la newsletter collaborative de platine</h3>
          <p>Un rendez-vous, tous les 15 jours, pour se raconter des petites histoires, partager ensemble nos dernières découvertes rayons livres et musique et tomber amoureux de nouveaux artistes. </p>

          <MailChimpForm />

        </div>
        {/* end of .newsletter-section */}


        <div className="container">

          <div className="homepage-section articles-section">

          { secondSectionPosts.map( post => <PostCard post={post.node} key={post.node.id} />) }

          <div className="more-link-container">
            <Link to="/" className="button button-aqua more-link">lire tous les articles</Link>
          </div>


          </div>
          {/* end of .homepage-section.articles-section */}

        </div>
        {/* end of .container */}

        <div className="fullwidth-container">

          <div className="homepage-section about-section">

            <div className="section-content">

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
  ){
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
  wordpressPage(title: {eq: "homepage"}) {
    acf {
      a_propos
      en_ce_moment {
        url
      }
      en_ce_moment_lien
      en_ce_moment_text
      newsletter_title
      en_ce_moment_text
    }
  }
}
`


export default IndexPage
