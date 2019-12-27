// external libs
import  { Link }  from "gatsby";
import React from "react";

// images & assets
import LogoLight from "../images/logo_mobile.svg";
import LogoFull from "../images/platine_logo-principal.svg";

// styles


const PlatineLogo = (props) => {
  return(

    <Link to="/">
    {window && window.innerWidth < 768 ? <LogoLight className="logo logo-top logo-mobile" /> : <LogoFull /> }}
    </Link>
  )
}


export default PlatineLogo;
