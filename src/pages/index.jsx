// external libs
import React from "react";
import { graphql, Link } from "gatsby";

// internal components
import SEO from "../components/seo";
import Header from "../components/header";
import Icons from "../components/icons"
import MailChimpForm from "../components/mailchimp-form.jsx";

// images & assets
import Logo from "../images/platine_logo-principal.svg";
import Music from "../images/icon-music.svg"
import IconMusic from "../images/music.svg";
import IconBook from "../images/book.svg";

// styles
import '../styles/main.scss';

const IndexPage = ({data}) => {
  return (
    <React.Fragment>
      <SEO id="homepage" title="Home" keywords={[`platine`, `culture`, `musique`, `livres`]} />

      <Header />

      <div className="fullwidth-container">

        <div className="homepage-section last-article-section">

        <div className="last-article-card">

          <div className="last-article-box">
            <p className="uppercased-text">le dernier article</p>
            <h3 className="card-title">comment se remettre à lire après un passage à vide ?</h3>
            <div className="header-meta">
              <p className="meta uppercased-text">publié le : 24/10/2019</p>
              <p className="meta uppercased-text">dans le jukebox</p>
            </div>
          </div>
          {/* end of .last-article-box */}

          <div className="card-content">
            <img src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg" alt="book open and tea"/>
            <h3 className="card-title">Comment soutenir les artistes que vous appréciez ?</h3>
            <p className="card-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis (...)</p>
            <Link to="/" className="button button-aqua more-link"><span>lire la suite</span></Link>
          </div>

        </div>


        </div>

      </div>
      {/* end of .fullwidth-container */}

      <div className="container">

      <div className="homepage-section articles-section">


        <div className="regular-card pink">

          <div className="card-header">
            <div className="card-icon"><Music /></div>
            <div className="header-meta">
              <p className="meta">publié le : <span className="meta-content">24/10/2019</span></p>
              <p className="meta">dans <span className="meta-content">le jukebox</span></p>
            </div>
          </div>

          <div className="card-content">
            <img src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg" alt="book open and tea"/>
            <h3 className="card-title">Comment soutenir les artistes que vous appréciez ?</h3>
            <p className="card-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis, vitae fugiat, tenetur aperiam deleniti saepe sunt quidem illum similique, asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. asperiores rerum aliquam tempora iure, ipsam quis praesentium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id veritatis (...)</p>
            <Link to="/" className="button simple-button more-link"><span>lire la suite</span></Link>
          </div>

        </div>
        {/* end of .regular-card */}

      </div>




      </div>
      {/* end of .container */}

    </React.Fragment>
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
