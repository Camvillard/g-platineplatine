import React from "react";
import { graphql } from "gatsby";

// import Header from "../components/Header";
// import Logo from "../components/Logo";
// import Image from "../components/Image";
import SEO from "../components/Seo";
// import Footer from '../components/Footer'
import Logo from "../images/platine-logo_v0.svg";
// import LogoImage from "../components/logo";



import '../styles/layouts/_splashpage.scss';

const IndexPage = ({data}) => {
  return (
    <div id="splash-content">
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Logo />
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
