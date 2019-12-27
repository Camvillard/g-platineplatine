// external libs
import React from "react";
import { graphql, Link } from "gatsby";
import Slider from "react-slick";

// internal components
import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import Instagram from "../components/instagram";
import MailChimpForm from "../components/mailchimp-form";
import LastPostCard from "../components/last-post";
import PostCard from "../components/post-card";

// images & assets

// styles
import '../styles/main.scss';

class IndexPage extends React.Component {
  render(){
    const pageData = this.props.data.wordpressPage.acf
    const allPosts = this.props.data.allWordpressPost.edges
    const carouselPost = allPosts.slice(0,3)
    const firstSectionPosts = allPosts.slice(1, 5)
    const secondSectionPosts = allPosts.slice(6, 8)
    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return(
      <div className="page-layout index-page">
        <SEO id="homepage" title="Home" keywords={[`platine`, `culture`, `musique`, `livres`]} />

        <Layout>


          <div className="large-container">

            <div className="homepage-section last-article-section">
              <Slider {...carouselSettings} className="homepage-carousel">

                {carouselPost.map( post =>  {
                  return <LastPostCard key={post.node.id} post={post.node} />
                })}
              </Slider>


            </div>

          </div>
          {/* end of .fullwidth-container */}

          <div className="container">

            <div className="homepage-section grid two-columns">

            { firstSectionPosts.map( post => <PostCard post={post.node} key={post.node.id} />) }

            </div>
            {/* end of .homepage-section.articles-section */}

          </div>
          {/* end of .container */}

          <div className="homepage-section newsletter-section">

            <MailChimpForm />

          </div>
          {/* end of .newsletter-section */}


          <div className="container">

            <div className="homepage-section grid two-columns">

            { secondSectionPosts.map( post => <PostCard post={post.node} key={post.node.id} />) }

            <div className="more-link-container">
              <Link to="/" className="button button-aqua more-link">lire tous les articles</Link>
            </div>


            </div>
            {/* end of .homepage-section.articles-section */}

          </div>
          {/* end of .container */}

          <div className="container">

            <div className="homepage-section about-section">

                <h3>à propos de platine</h3>
                <p>Come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback.So thirsty, deluminator firs’ years follow me 12 inches of parchment.
                </p>
                <Link to="/a-propos" className="button simple-button more-link">
                  <span>en savoir plus</span>
                </Link>

            </div>

          </div>
          {/* end of container */}
        </Layout>

      </div>


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
