// external libs
import React from "react";
import { Link, StaticQuery, graphql } from 'gatsby';
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

// internal stuff
import NavbarMobile from "./navbar-mobile";
import NavbarDesktop from "./navbar-desktop";

// styles & assets



class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  };


  componentDidMount() {
    if (window && window.innerWidth < 768) {
      this.setState({
        isMobile: true
      })
    }
  }


  render(){
    // grab all the categories returned by the query
    // and build the menu with it
    const categories = this.props.data.allWordpressCategory.edges
    console.log(this.state)
    return(
      <React.Fragment>
         {this.state.isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      </React.Fragment>
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

