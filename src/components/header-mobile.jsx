// external libs
import React, { Fragment } from "react";
import { Link, StaticQuery, graphql } from 'gatsby';
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";

// internal components
import Icons  from "./icons";
import MiniLogo from "../images/mini-logo.svg";
import Logo from "../images/logo_mobile.svg";
import NavbarMobile from "./navbar-mobile";


class HeaderMobile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdownIsActive: false,
      showSubLinks: false
    }
  };

  toggleDropdownMenu = () => {
    this.setState({
      dropdownIsActive: !this.state.dropdownIsActive
    })
  };

  showSubLinks = (e) => {
    if (document.querySelector('.rotate-link')) {
      e.target.classList.remove('rotate-link')
    } else {
      e.target.classList.add('rotate-link')
    }
    this.setState({
      showSubLinks: !this.state.showSubLinks
    })
  }


  render(){
    // grab all the categories returned by the query
    // and build the menu with it
    return(
      <Fragment>

          <header className="mobile-header">
            <Link to="/" className="mobile-logo">
              <Logo />
            </Link>
          </header>

          <NavbarMobile />


      </Fragment>

    )
  }
}


export default HeaderMobile;


