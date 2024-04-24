import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Liquor = ({data}) => {
  return (
    <Layout>
      <Seo title='Liquor' />      
      <div className='container'>
        {
          data.allContentfulReadAndMead.edges.map(edge => (
            <div className='container-item' key={edge.node.title}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.body.body}</p>    
              <img src={edge.node.image.url} alt={edge.node.image.title} />     
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Liquor

export const liquorQuery = graphql `
  {
    allContentfulReadAndMead(filter: {tags: {eq: "liquor"}}) {
      edges {
        node {
          title
          body {
            body
          }
          image {
            title
            url
          }
        }
      }
    }
  }
`