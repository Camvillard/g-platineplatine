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
    <Fragment>

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

    </Fragment>
  )
}

const HeaderDesktop = () => {
  return(
    <div className="header desktop-header">
      <Icons id="navbar-icons" />
      <Link to="/">
        <Logo className="logo"/>
      </Link>
      <NavbarDesktop />
    </div>
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
      <header>

        {this.state.isMobile ? <HeaderMobile /> : <HeaderDesktop />}

      </header>
    )
  }
}




export default Header

