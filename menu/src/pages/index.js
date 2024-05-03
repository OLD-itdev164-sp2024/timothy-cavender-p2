import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Seo title='Main Menu'/>
        {
          data.allContentfulRmMenu.edges.map(edge => (
            <div>
              <h2>{edge.node.name}</h2>
              <p>{edge.node.description.description}</p>
              <p>{edge.node.price}</p>
            </div>
          ))
        }
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql `{
  allContentfulRmMenu {
    edges {
      node {
        name
        description {
          description
        }
        price
      }
    }
  }
} `

/*export const query = graphql `
  {
    allContentfulReadAndMead {
      edges {
        node {
          id
          title
          body {
            body
          }
        }
      }
    }
  }
`*/