// external libs
import React from "react";
import { Link } from "gatsby";

// internal components

// images & assets
import SEO from "../components/seo"

// styles


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
