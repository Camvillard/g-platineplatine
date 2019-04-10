import React from "react";
import { graphql } from "gatsby";

// import Header from "../components/Header";
// import Image from "../components/Image";
import SEO from "../components/Seo";
// import Footer from '../components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'


import '../styles/main.scss';

const IndexPage = ({data}) => {
library.add(fab, faCheckSquare, faCoffee, faHeart)
  return (
    <div>
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>platine</h1>
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
