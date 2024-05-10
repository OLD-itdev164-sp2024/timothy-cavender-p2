import * as React from "react"
import { graphql, Link } from "gatsby"

import { MenuContainer } from "../components/Menu/MenuContainer/MenuContainer"
import{List, ListItem} from "../components/Menu/List"
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
      <MenuContainer>
      {
        Object.keys(tagGroups).map(tag => (
          <List key={tag} className="container-item">
            <h1>{tag}</h1>
            {
              tagGroups[tag].map(edge => (
                <ListItem>
                  <h2 id="name">{edge.node.name}</h2>
                  <div>
                    <p id="desc">{edge.node.description.description}</p>
                    <p id="price">${edge.node.price}</p>
                  </div>
                </ListItem>
              ))
            }
          </List>
        ))
      }
      </MenuContainer>
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