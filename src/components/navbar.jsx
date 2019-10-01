// external libs
import React from "react";
import { Link, StaticQuery, graphql } from 'gatsby';
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

// internal stuff

// import SearchBar from "./search-bar"

// import Search from "./search"



class Navbar extends React.Component {

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
    const categories = this.props.data.allWordpressCategory.edges
    return(
      <div className={`navbar main-navbar ${this.state.isMobileNav ? 'mobile-navbar' : 'desktop-navbar'}`}>

        {this.state.isMobileNav &&
          <div className={`toggle-menu ${this.state.dropdownIsActive ? 'opened' : 'closed'}`} onClick={this.toggleDropdownMenu}>
            {this.state.dropdownIsActive ? 'fermer' : 'menu'}
          </div> }

        <ul className={`nav-links ${this.state.dropdownIsActive ? 'show-links' : 'hide-links'}`}>
          <li className="link-nav"><Link to="/categories/jukebox">le jukebox</Link></li>
          <li className="link-nav"><Link to="/categories/bibliotheque">la bibliothèque</Link></li>
          <li className="link-nav parent-link-nav" onClick={this.showSubLinks}>etc</li>
          <div className={`sub-links ${this.state.showSubLinks ? 'show-sub-links' : 'hide-sub-links'}`}>
            <li className="link-nav"><Link to="/categories/podcasts">podcasts</Link></li>
            <li className="link-nav"><Link to="/categories/expos">expos</Link></li>
          </div>
          <li className="link-nav"><Link to="/contact">contact</Link></li>
          <li className="link-nav"><Link to="/contact">à propos</Link></li>
          {this.state.isMobileNav && (
            <div className="nav-social-icons">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
            </div>
          ) }
        </ul>
      </div>
    )
  }
}


// export default Navbar


export default (props) => {
  return (<StaticQuery
    query={graphql`
      query {
          allWordpressCategory {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
    `
    }

    render={(data) => {
      return (
        <Navbar data={data}  />
      )}
    }
  />)
}

