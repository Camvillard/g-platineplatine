// external libs
import React from "react"
import { Link, graphql } from "gatsby"

// internal components
import SEO from "../components/seo"

// styles
import '../styles/main.scss';

class ContactPage extends React.Component {

  state = {
    email: '',
    name: '',
  }

  render() {
    const page = this.props.data.wordpressPage
    return(
      <div className="page-layout contact-page fullpage-layout flexbox centered">
        <SEO title="contact"/>

        <div className="page-container contact-container">

          <div className="page-header">
            <Link to="/" className="button simple-button back-to-site"><span>retour au site</span></Link>
          </div>

          <h1 className="page-title special-page-title">
            <span dangerouslySetInnerHTML= {{__html: page.title}} />
          </h1>

          <div className="page-intro">
            <div dangerouslySetInnerHTML= {{__html: page.content}} />
          </div>

          <form
            action="/merci"
            // onSubmit={this.handleSubmit}
            method="post"
            name="Contact form"
            id={this.props.id}
            className="form-stroked dark"
            data-netlify="true"
            data-netlify-honeypot="bot-field">

            {/* specifying name of  the form for Netlify */}
            <input type="hidden" name="form-name" value="Contact form" />
            {/* need a bot */}
            <input type="hidden" name="bot-field" />

            <input type="text" name="name" placeholder="prénom :" />
            <input type="email" name="email" placeholder="adresse mail :" />
            <input type="text" name="subject" placeholder="objet :" />
            <textarea name="message" id="" cols="30" rows="3" placeholder="message :"></textarea>
            <button className="button simple-button"><span>envoyer</span></button>
          </form>

        </div>



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
    title
    slug
  }
}
`


export default ContactPage
