// external libs
import React from "react";
import { graphql } from "gatsby";

// internal components
import SEO from "../components/seo";
import Icons from "../components/icons"
import MailChimpForm from "../components/mailchimp-form";

// images & assets
import Logo from "../images/platine_logo-principal.svg";
import { FaBookOpen, FaMusic } from 'react-icons/fa'



// styles
import '../styles/layouts/_splashpage.scss';

const IndexPage = ({data}) => {
  return (
    <div id="splash-content">
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Logo />

      <div id="landing-text">
        <h4>ta dose quotidienne de </h4>

        <div id="landing-books">
          <FaBookOpen />
          <h5>pépites littéraires</h5>
          <p>si tu te demandes mais QUE LIRE ? face à l’étendue des livres dispos en librairie</p>
        </div>


        <div id="landing-music">
          <FaMusic />
          <h5>découvertes musicales</h5>
          <p>yes ! enfin de quoi renouveler  plus souvent ta playlist</p>
        </div>

        <p>à recevoir chaque semaine directement dans ta boîte mail.</p>
        <h5>Tu as hâte ? Moi oui !</h5>

      </div>

      <div id="landing-cta">
      <p>Pour être informé(e) du lancement du site et recevoir la toute première
      newsletter collaborative de Platine, inscris-toi par ici :</p>

      <MailChimpForm />


      </div>
      {/* end of #landing-cta */}


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
