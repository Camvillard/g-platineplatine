// external libs
import React from "react";

// internal components
import SEO from "../components/Seo";
import Icons from "../components/Icons"

// images & assets
import Logo from "../images/platine_logo-principal.svg";

// styles
import '../styles/layouts/_merci.scss';


const Merci = ({data}) => {
  return (
    <div id="merci-content">
      <SEO id="homepage" title="Home" keywords={['culture', 'livres', 'musique']} />
      <Icons id="icons-merci"/>
      <div id="merci-text">
        <h2>merci !</h2>
        <p>vous aurez tout bientôt<br/>des nouvelles de Platine.</p>
        <Logo id="merci-logo"/>
      </div>
    </div>
  )
}



export default Merci
