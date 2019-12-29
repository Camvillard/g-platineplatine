import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
// import Layout from '../components/layout';


class Category extends React.Component {
  render() {
    const category = this.props.data.wordpressCategory
    return(
      <React.Fragment>
        <SEO title={`Archives pour la catégorie ${category.name}`} keywords={[`platine`, `culture`, `musique`, `livres`]} />
        todo dfg
      </React.Fragment>
    )
  }
}

export default Category;

//  $id is defined in gatsby-node, when creating the page
export const query = graphql`
  query($id: String!) {

    wordpressCategory(id: { eq: $id }) {
      id
      name
      slug
      count
    }

    allWordpressPost(filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
      totalCount
       edges {
         node {
           id
           date
           title
           content
           featured_media{
             source_url
           }
           categories {
             id
             name
             slug
           }
         }
       }
    }
  }
`
