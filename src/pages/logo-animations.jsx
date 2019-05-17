import React from "react";
import { graphql } from "gatsby";

// import Header from "../components/Header";
// import Logo from "../components/Logo";
// import Image from "../components/Image";
import SEO from "../components/seo";
// import Footer from '../components/Footer'

import Logo from "../images/platine-logo_v0.svg";
import Cercle from "../images/cercle.svg";
import Platine from "../images/platine.svg";


import '../styles/layouts/_splashpage.scss';
import '../styles/layouts/_logo-animations.scss';

const LogoAnimationsPage = ({data}) => {
  return (
    <div id="logo-animations">
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="logos-anims" id="logo-hover">
        <h3>animation : survol du logo</h3>
        <Logo />
      </div>
      <div className="logos-anims" id="logo-color">
        <h3>animation : couleur qui change automatiquement</h3>
        <div id="logo-color-box">
          <Cercle className="cercle-platine"/>
          <Platine className="name-platine" />
        </div>
      </div>
    </div>
  )
}



export default LogoAnimationsPage
