// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import Icons  from "./icons";

// styles & assets
import Logo from "../images/platine_logo-principal.svg";

class Header extends React.Component {
  render(){
    return(
      <header>
        <Icons id="navbar-icons" />

        <Link to="/">
          <Logo className="logo" />
        </Link>

      </header>
    )
  }
}




export default Header

