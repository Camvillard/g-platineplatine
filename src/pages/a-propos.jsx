// external libs
import React, { Fragment } from "react";

// internal components
import SEO from "../components/seo";
import Icons from "../components/icons"

// images & assets
import Logo from "../images/platine_logo-principal.svg";

// styles
import '../styles/main.scss';

class About extends React.Component {
  render(){
    return(
      <Fragment>
      <SEO title="À propos de Platine" keywords={['culture', 'livres', 'musique']} />
        todo
        <div className="page-header">

          <h1 className="page-title special-page-title">la bibliothèque</h1>
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
      texte_section_newsletter
      third_section
      image_about
      a_propos
      en_ce_moment_lien
      en_ce_moment_text
      newsletter_title
      newsletter_text
    }
  }
}
`


export default About
