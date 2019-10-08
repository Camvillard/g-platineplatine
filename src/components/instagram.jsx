// external libs
import React from "react";
import { StaticQuery, graphql } from "gatsby";

// internal stuff
import Icons  from "./icons";

// styles & assets
import Logo from "../images/platine_logo-principal.svg";


const InstagramThumbnail = (data) => {
  return(
    <img
      className="instagram-pic"
      src={data.image}
      alt="instagram image"/>
  )
}



const Instagram = () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(limit: 7, sort: {fields: timestamp}) {
          edges {
            node {
              id
              original
            }
          }
        }
      }
    `}
    render={data => {
      return(
        <div className="instagram-footer">
          <h3>Platine sur Instagram</h3>
          <div className="instagram-images">
            {data.allInstaNode.edges.map( d => <InstagramThumbnail key={d.node.id} image={d.node.original} /> )}
            <div className="subscribe-button">
              <a href="#" className="button button-block simple-button"><span>s'abonner</span></a>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default Instagram
