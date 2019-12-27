// external libs
import React, { Fragment } from "react";
import { Link } from "gatsby";

// internalcomponents
import Icons  from "./icons";
import NavbarMobile from "./navbar-mobile";
import NavbarDesktop from "./navbar-desktop";

import { FaInstagram } from "react-icons/fa";


// styles & assets
import Logo from "../images/platine_logo-principal.svg";
import MiniLogo from "../images/mini-logo.svg";



class Header extends React.Component {

  state = {
    showSubLinks: false
  };

  showSubLinks = (e) => {
    this.setState({
      showSubLinks: !this.state.showSubLinks
    })
  };

  render(){
    return(
      <div className="desktop-navbar">

        <div className="category-links">
          <Link to="/jukebox" className="nav-link">le jukebox</Link>
          <Link to="/bibliotheque" className="nav-link">la bibliothèque</Link>
          <span className="nav-link parent-link-nav" onClick={this.showSubLinks}>
            etc. +
            <div className={`sub-links ${this.state.showSubLinks ? 'show-sub-links' : 'hide-sub-links'}`}>
              <div className="sub-links-container">
                <Link to="/categories/podcasts" className="nav-link">podcasts</Link>
                <Link to="/categories/expos" className="nav-link">expos</Link>
                <Link to="/categories/expos" className="nav-link">théâtre</Link>
              </div>
            </div>
          </span>
          <Link to="/contact" className="nav-link">contact</Link>
          <Link to="/a-propos" className="nav-link">à propos</Link>
        </div>

      </div>
    )
  }
}




export default Header

