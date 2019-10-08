// external libs
import React from "react";
import { graphql } from "gatsby";

// internal components
import Layout from "../components/layout"

// images & assets


// styles
import '../styles/main.scss';

class PageTemplate extends React.Component {

  setFeaturedImage = (post) => {
    if (post.featured_media) {
      return post.featured_media.source_url
    } else {
      return "https://contenu.platineplatine.com/wp-content/uploads/2019/09/placeholder-2.png"
    }
  }

  render() {
    const page = this.props.data.wordpressPage
    return(
      <Layout>

      <div className={`page-layout ${page.slug}`}>



        <div className="post-content" dangerouslySetInnerHTML= {{__html: page.content}} />

      </div>



      </Layout>
    )
  }
}

export const query = graphql`
  query($id: String!) {

    wordpressPage(id: { eq: $id }) {
      title
      slug
      id
      content
    }

  }
`

export default PageTemplate;
