import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" id="about" />
    <h1>Hi from the about page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/contact">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
