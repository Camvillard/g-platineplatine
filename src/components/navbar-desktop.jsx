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
      showSubLinks: false
    }
  };


  showSubLinks = (e) => {
    this.setState({
      showSubLinks: !this.state.showSubLinks
    })
  }


  render(){
    // grab all the categories returned by the query
    // and build the menu with it
    return(
      <div className={`desktop-navbar`}>

        <div className="category-links">
          <Link to="/jukebox" className="nav-link">le jukebox</Link>
          <Link to="/bibliotheque" className="nav-link">la bibliothèque</Link>
          <span className="nav-link parent-link-nav" onClick={this.showSubLinks}>
            etc. +
            <div className={`sub-links ${this.state.showSubLinks ? 'show-sub-links' : 'hide-sub-links'}`}>
              <div className="sub-links-container">
                <Link to="/categories/podcasts" className="nav-link">podcasts</Link>
                <Link to="/categories/expos" className="nav-link">expos</Link>
                <Link to="/categories/expos" className="nav-link">théâtre</Link>
              </div>
            </div>
          </span>
          <Link to="/contact" className="nav-link">contact</Link>
          <Link to="/a-propos" className="nav-link">à propos</Link>
        </div>

      </div>
    )
  }
}


export default NavbarDesktop;


