// external libs
import React, { Fragment } from "react";

// internal components
import SEO from "../components/seo";
import Icons from "../components/icons"
import MailChimpContainer from "../components/mailchimp-form"

// images & assets
import Logo from "../images/platine_logo-principal.svg";

// styles
import '../styles/main.scss';

class About extends React.Component {
  render(){
    const siteInfo = this.props.data.site
    const data = this.props.data.wordpressPage
    const firstSection = data.acf.first_section
    const thirdSection = data.acf.third_section
    const aboutImage = data.acf.image_about
    return(
      <Fragment>
      <SEO title="À propos de Platine" keywords={['culture', 'livres', 'musique']} />

      <div className="about-page">

        <div className="page-header">
          <h1 className="page-title special-page-title">à propos de Platine</h1>
        </div>

        <div className="small-container">
          <div className="about-first-section" dangerouslySetInnerHTML={{ __html: firstSection }} />
        </div>

          <div className="newsletter-section">
            <div className="small-container">
              <MailChimpContainer />

            </div>
          </div>

          <div className="small-container">
            <img className="one-half" src={aboutImage} alt="platine about"/>
            <div className="about-second-section one-half" dangerouslySetInnerHTML={{ __html: thirdSection }} />
            <div className="button-block">
              <a href="#" className="button button-aqua">découvrir maora</a>
            </div>
          </div>
      </div>


      </Fragment>
    )
  }
}


export const query = graphql`
query aboutPage {
  site {
    siteMetadata {
      title
    }
  }

  wordpressPage(slug: {eq: "a-propos"}) {
    id
    title
    acf {
      first_section
      third_section
      image_about
    }
  }
}
`


export default About
