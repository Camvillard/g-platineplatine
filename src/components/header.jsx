// external libs
import React from "react";

// internal stuff
import Icons  from "./icons";

// styles & assets
import Logo from "../images/platine_logo-principal.svg";

class Header extends React.Component {
  render(){
    return(
      <header>
        <Icons id="navbar-icons" />
        <Logo className="logo" />
      </header>
    )
  }
}




export default Header

