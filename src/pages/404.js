import React from "react"

import SEO from "../components/seo.jsx"

// styles
import '../styles/main.scss';

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>PAGE NON TROUVÉE</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
