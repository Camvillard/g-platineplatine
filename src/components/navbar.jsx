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
    }
  };

  toggleDropdownMenu = () => {
    this.setState({
      dropdownIsActive: true
    })
  };


  render(){
    // grab all the categories returned by the query
    // and build the menu with it
    const categories = this.props.data.allWordpressCategory.edges
    return(
      <div className="navbar main-navbar">
        <ul className="nav-links">
          {categories.map( cat => <li key={cat.node.slug}><Link to={`/categories/${cat.node.slug}`}></Link></li>)}
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

