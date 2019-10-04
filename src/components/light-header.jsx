// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import Icons  from "./icons";

// styles & assets
import LightLogo from "../images/platine_logo-light.svg";

class LightHeader extends React.Component {
  render(){
    return(
      <header className="light-header">

        <Link to="/">
          <LightLogo className="light-logo" />
        </Link>

      </header>
    )
  }
}




export default LightHeader

