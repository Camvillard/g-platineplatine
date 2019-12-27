// external libs
import { Link, graphql } from "gatsby";
import React, { Fragment } from "react";

// internal components
import SEO from "../components/seo";
import SpecialTemplate from "../components/special-layout";
import PlatineLogo from "../components/platine-logo";

// styles
import '../styles/main.scss';

class Testlayout extends React.Component {

  render() {
    const page = this.props.data.wordpressPage
    return(
      <Fragment>
        <SEO title="contact"/>
        <PlatineLogo />

        <SpecialTemplate>

          <div className="test">

          </div>

        </SpecialTemplate>

      </Fragment>
    )
  }
}

export const query = graphql`
query Testlayout {
  site {
    siteMetadata {
      title
    }
  }

  wordpressPage(title: {eq: "contact"}) {
    id
    content
    title
    slug
  }
}
`


export default Testlayout
