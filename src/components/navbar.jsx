// external libs
import React from "react";
import { Link, StaticQuery, graphql } from 'gatsby';

// internal stuff
// import SocialIcons from "./social-icons"
// import SearchBar from "./search-bar"

// import Search from "./search"



// styles & assets

// const searchIndices = [
//   { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
//   { name: `Posts`, title: `Articles`, hitComp: `PostHit` },
//   { name: `Favoris`, title: `Favoris`, hitComp: `FavHit` },
// ]

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdownIsActive: false,
      isMobileNav: false
    }
  };

  toggleDropdownMenu = () => {
    this.setState({
      dropdownIsActive: !this.state.dropdownIsActive
    })
  };

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
          {categories.map( cat =>  {
            return <li key={cat.node.slug}>
                      <Link to={`/categories/${cat.node.slug}`}>{cat.node.name}</Link>
                    </li>
          })}
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

