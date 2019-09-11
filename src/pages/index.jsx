// external libs
import React from "react";
import { graphql } from "gatsby";

// internal components
import SEO from "../components/seo";
import Header from "../components/header";
import Icons from "../components/icons"
import MailChimpForm from "../components/mailchimp-form.jsx";

// images & assets
import Logo from "../images/platine_logo-principal.svg";
import IconMusic from "../images/music.svg";
import IconBook from "../images/book.svg";

// styles
import '../styles/main.scss';

const IndexPage = ({data}) => {
  return (
    <React.Fragment>
      <SEO id="homepage" title="Home" keywords={[`platine`, `culture`, `musique`, `livres`]} />

      <Header />

    </React.Fragment>
  )
}


export const query = graphql`
query homePage {
  site {
    siteMetadata {
      title
    }
  }
}
`


export default IndexPage
