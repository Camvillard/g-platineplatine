// external libs
import React from "react";
import { graphql } from "gatsby";

// internal components
import SEO from "../components/seo";
import Icons from "../components/icons"
import MailChimpForm from "../components/mailchimp-form";

// images & assets
import Logo from "../images/platine_logo-principal.svg";
import IconMusic from "../images/music.svg";
import IconBook from "../images/book.svg";
import { FaBookOpen, FaMusic } from 'react-icons/fa'

// styles
import '../styles/layouts/_splashpage.scss';

const IndexPage = ({data}) => {
  return (
    <div id="splash-content">
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Logo id="icon-logo"/>

      <div id="landing-grid">

        <div id="landing-text">
          <h4><span>ta dose quotidienne de :</span></h4>

          <div className="landing-cats">
            <div className="landing-cat">
              <IconBook id="icon-book" />
              <h5>pépites littéraires</h5>
              <p>si tu te demandes mais QUE LIRE ? face à l’étendue des livres dispos en librairie.</p>
            </div>


            <div className="landing-cat">
              <IconMusic id="icon-music" />
              <h5>découvertes musicales</h5>
              <p>yes ! enfin de quoi renouveler  plus souvent ta playlist.</p>
            </div>

          </div>

          <div className="landing-msg">
            <h4>à recevoir chaque semaine directement dans ta boîte mail.</h4>
            <h5 id="landing-accent">Tu as hâte ?<br/>Moi oui !</h5>

          </div>



        </div>

        <div id="landing-cta" className="accent-text-bold">
          <p>Pour être informé(e) du lancement du site et recevoir la toute première
          newsletter collaborative de Platine, inscris-toi par ici :</p>

          <MailChimpForm id="landing-form" />

        </div>
        {/* end of #landing-cta */}

      </div>


      <Icons />

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
