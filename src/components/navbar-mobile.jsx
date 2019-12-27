// external libs
import React, { Fragment } from "react";
import { Link, StaticQuery, graphql } from 'gatsby';
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";

// internal stuff

// import SearchBar from "./search-bar"

// import Search from "./search"



class NavbarMobile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdownIsActive: false,
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


  render(){
    // grab all the categories returned by the query
    // and build the menu with it
    return(
      <Fragment>
        <div
          className={`toggle-menu ${this.state.dropdownIsActive ? 'opened' : 'closed'}`}
          onClick={this.toggleDropdownMenu}
         >
          {this.state.dropdownIsActive ?
            'fermer' :
            'menu'}
        </div>

        <div className={`mobile-navbar ${this.state.dropdownIsActive ? 'show-links' : 'hide-links'} `}>

          <div className="category-links">
            <Link to="/contact" className="nav-link">contact</Link>
            <Link to="/contact" className="nav-link">à propos</Link>
            <Link to="/jukebox" className="nav-link">le jukebox</Link>
            <Link to="/bibliotheque" className="nav-link">la bibliothèque</Link>
            <span className="nav-link parent-link-nav" onClick={this.showSubLinks}>
              etc {this.state.showSubLinks ? '-' : '+'}
              <div className={`sub-links ${this.state.showSubLinks ? 'show-sub-links' : 'hide-sub-links'}`}>
                <Link to="/categories/podcasts" className="nav-link">podcasts</Link>
                <Link to="/categories/expos" className="nav-link">expos</Link>
                <Link to="/categories/expos" className="nav-link">théâtre</Link>
              </div>
            </span>
          </div>

          <div className="nav-link social-link">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookSquare />
          </div>

          <div className="background-circles">
            <div className="color-circle-aqua"></div>
            <div className="color-circle-pink"></div>
          </div>

        </div>


      </Fragment>

    )
  }
}


export default NavbarMobile;


