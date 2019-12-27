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




const DesktopHeader = (props) => {
  return(
    <Fragment>

      <div className="desktop-navbar">

        <div className="category-links">
          <Link to="/jukebox" className="nav-link">le jukebox</Link>
          <Link to="/bibliotheque" className="nav-link">la bibliothèque</Link>
          <span className="nav-link parent-link-nav" onClick={props.onshowSubLinks}>
            etc. +
            <div className={`sub-links ${props.showSubLinks ? 'show-sub-links' : 'hide-sub-links'}`}>
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
    </Fragment>
   )
}


class Header extends React.Component {

  state = {
    isMobile: true,
    showSubLinks: false
  };

  showSubLinks = (e) => {
    this.setState({
      showSubLinks: !this.state.showSubLinks
    })
  };

  componentDidMount() {
    if (window && window.innerWidth > 768  ) {
      this.setState({isMobile: false})
    }
  }

  adaptOnResize = (e) => {
    console.log("resizing")
  }

  render(){
    return this.state.isMobile ?
      <NavbarMobile /> :
      <DesktopHeader
        onshowSubLinks={this.showSubLinks}
        showSubLinks={this.state.showSubLinks} />
  }
}




export default Header

