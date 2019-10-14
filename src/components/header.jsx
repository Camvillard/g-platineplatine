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

const HeaderMobile = () => {
  return(
    <header>
      <Link to="/">
        <Logo className="logo mobile" />
      </Link>

      <div className="header mobile-header">
        <Link to="/">
          <MiniLogo className="mini-logo" />
        </Link>
        <Icons class="navbar-icons" />
        <NavbarMobile />
      </div>
    </header>
  )
}

const HeaderDesktop = () => {
  return(
    <header>
      <div className="header desktop-header">
        <Icons class="desktop-header-icons" />
        <Link to="/">
          <Logo className="logo"/>
        </Link>
        <NavbarDesktop />
      </div>
    </header>
  )
}

const HeaderSpecial = () => {
  return(
    <header>
      <div className="header special-header">
        <Icons class="desktop-header-icons" />
        <Link to="/">
          <Logo className="logo"/>
        </Link>
      </div>
    </header>
  )
}

class Header extends React.Component {
  state = {
    isMobile: false
  }

  componentDidMount() {
    if (window && window.innerWidth < 768) {
      this.setState({
        isMobile: true
      })
    }
  }

  render(){
    return(
      this.state.isMobile  ? <HeaderMobile />: <HeaderDesktop />
    )
  }
}




export default Header

