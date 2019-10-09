// external libs
import React from "react";
import { Link, StaticQuery, graphql } from 'gatsby';
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

// internal stuff

// import SearchBar from "./search-bar"

// import Search from "./search"



class NavbarDesktop extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdownIsActive: false,
      isMobileNav: false,
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

  componentDidMount() {
    if (window && window.innerWidth < 768) {
      this.setState({
        isMobileNav: true
      })
    }
  }


  render(){
    // grab all the categories returned by the query
    // and build the menu with it
    return(
      <div className={`navbar main-navbar'}`}>

      todo
      </div>
    )
  }
}


export default NavbarDesktop;


