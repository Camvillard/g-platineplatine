import React from "react";
import { graphql } from "gatsby";

// import Header from "../components/Header";
// import Logo from "../components/Logo";
// import Image from "../components/Image";
import SEO from "../components/Seo";
// import Footer from '../components/Footer'

import Logo from "../images/platine-logo_v0.svg";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'


import '../styles/layouts/_splashpage.scss';

const IndexPage = ({data}) => {
library.add(fab, faCheckSquare, faCoffee, faHeart)
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
