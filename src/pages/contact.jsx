import React from "react"
import { Link } from "gatsby"

import SEO from "../components/Seo"

const ContactPage = () => (
  <div>
    <SEO title="Page two" id="contact" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ContactPage
