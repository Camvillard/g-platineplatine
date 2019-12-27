// require('dotenv').config();
const path = require('path');
const createPaginatedPages = require('gatsby-paginate')


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // starting the create page actions
  const createWpPosts = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              wordpress_id
              content
              title
              slug
              date

              categories {
                name
                slug
              }

              featured_media {
                id
                source_url
              }
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.error)
      }

      createPaginatedPages({
        edges: result.data.allWordpressPost.edges,
        createPage: createPage,
        pageTemplate: 'src/templates/archives.jsx',
        pageLength: 8, // This is optional and defaults to 10 if not used
        pathPrefix: 'archives',
        buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and defaults to an empty string if not used
        context: {}, // This is optional and defaults to an empty object if not used
      })

      // grab the content pulled thanks to the graphql query
      const postEdges = result.data.allWordpressPost.edges

      // create a new static page for each one of the articles found
      postEdges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/post.jsx`),
          // Data passed to context is available
          // in page queries as GraphQL variables.
          context: {
            id: edge.node.id,
            postId: edge.node.wordpress_id
          },
        })
      })
      resolve()
    }) // end of query.then
  }) // end of createWpPosts


  // starting the create page actions
  const createWpCategories = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressCategory(
          filter: {slug: {nin: ["bibliotheque-livres", "jukebox"]}}
        ){
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.error)
      }

      const allCategories = result.data.allWordpressCategory.edges

      // grab the content pulled thanks to the graphql query
      // const categoryEdges = result.data.allWordpressCategory.edges

      // create a new static page for each one of the articles found
      allCategories.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/category.jsx`),
          // Data passed to context is available
          // in page queries as GraphQL variables.
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    }) // end of query.then
  }) // end of createWpCategories

    // starting the create page actions
  const createWpPages = new Promise((resolve, reject) => {
    const query = graphql(`
      {
       allWordpressPage(filter: {slug: {nin: ["contact", "homepage", "a-propos"]}}) {
         edges {
           node {
             id
             title
             slug
             content
           }
         }
       }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.error)
      }

      const allPages = result.data.allWordpressPage.edges

      // grab the content pulled thanks to the graphql query
      // const categoryEdges = result.data.allWordpressCategory.edges

      // create a new static page for each one of the articles found
      allPages.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/page.jsx`),
          // Data passed to context is available
          // in page queries as GraphQL variables.
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    }) // end of query.then
  }) // end of createWpPosts



  return Promise.all([createWpPosts, createWpCategories, createWpPages])
} // createPages


