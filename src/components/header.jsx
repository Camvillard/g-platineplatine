// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff

// styles & assets
import Logo from "../images/platine_logo-principal.svg"

class Header extends React.Component {
  render(){
    return(
      <header>
        <Logo className="logo" />

      </header>
    )
  }
}




export default Header

