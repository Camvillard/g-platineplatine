import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import logo from "../images/platine-logo_v0.png"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

class LogoImage extends React.Component {

  render() {
    const image = this.props.data.placeholderImage.childImageSharp;
    console.log(image)
    return(
      <div id="logo-platine">
        <img src={image.fluid.src} alt=""/>
      </div>
    )
  }
};

export default (props) => {
  return (<StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "platine-logo_v0.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
    }

    render={(data) => <LogoImage data={data} />
    }
  />)
}
