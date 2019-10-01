import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

class  ContactPage extends React.Component {

  render() {
    return(
      <div className="page-layout contact-page">
        <SEO title="contact"/>

        <form onSubmit={this.handleSubmit} id={this.props.id} className="form-stroked dark">
          <input type="text" name="name" placeholder="prénom :" onChange={this.handleChange} onBlur={this.addCompleted}/>
          <input type="email" name="email" placeholder="adresse mail :" onChange={this.handleChange} onBlur={this.addCompleted}/>
          <button className="button simple-button"><span>envoyer</span></button>
        </form>


      </div>
    )
  }
}

export const query = graphql`
query contactPage {
  site {
    siteMetadata {
      title
    }
  }

  wordpressPage(title: {eq: "contact"}) {
    id
    content
  }
}
`


export default ContactPage
