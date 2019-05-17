import React from "react"
import { Link } from "gatsby"

import SEO from "../components/Seo.jsx"

const AboutPage = () => (
  <div>
    <SEO title="About" id="about" />
    <h1>Hi from the about page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/contact">Go back to the homepage</Link>
  </div>
)

export default AboutPage
