import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Menu = ({data}) => {
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

export default Menu
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