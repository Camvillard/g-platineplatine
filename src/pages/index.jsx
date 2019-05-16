// external libs
import React from "react";
import { graphql } from "gatsby";

// internal components
import SEO from "../components/seo";
import Icons from "../components/icons"

// images & assets
import Logo from "../images/platine_logo-principal.svg";



// styles
import '../styles/layouts/_splashpage.scss';

const IndexPage = ({data}) => {
  return (
    <div id="splash-content">
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Logo />
      <Icons />

      <h3>platine arrive très vite !</h3>
    </div>
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
