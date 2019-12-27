// external libs
import React, { Fragment } from "react";
import { Link } from "gatsby";

// internalcomponents
import Icons  from "./icons";
import { FaInstagram } from "react-icons/fa";
import HeaderMobile from "./header-mobile";
import Header from "./header";


// styles & assets
import Logo from "../images/platine_logo-principal.svg";
import MiniLogo from "../images/mini-logo.svg";



class SpecialTemplate extends React.Component {
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
      <Fragment>
        {this.state.isMobile ? <HeaderMobile direction={this.props.header} /> : <Header />}
        <div className={`template template-${this.props.layout}`}>
         {this.props.children}
        </div>
      </Fragment>
    )
  }
}




export default SpecialTemplate

