import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


/*The tags are going to be put into an array to create a new div based on distinct tags.
We will then pass in the appropriate data based on the matching tags*/
const IndexPage = ({data}) => {
  const tagGroups = {};

  data.allContentfulRmMenu.edges.forEach(edge => {
  const {tags} = edge.node;
  const tagsArray = Array.isArray(tags) ? tags : [tags];

  tagsArray.forEach(tag => {
    if(!tagGroups[tag]){
      tagGroups[tag] = [];
    }
    tagGroups[tag].push(edge);
  });
});

  return (
    <Layout>
      <Seo title='Main Menu'/>
      <div className="container">
      <h1>Read and Mead Menu</h1>
      {
        Object.keys(tagGroups).map(tag => (
          <div key={tag} className="container-item">
            <h1>{tag}</h1>
            {
              tagGroups[tag].map(edge => (
                <div>
                  <h2>{edge.node.name}</h2>
                  <p>{edge.node.description.description}</p>
                  <p>{edge.node.price}</p>
                </div>
              ))
            }
          </div>
        ))
      }
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql `{
  allContentfulRmMenu(sort: {tags: ASC}) {
    edges {
      node {
        name
        description {
          description
        }
        price
        tags
      }
    }
  }
} `