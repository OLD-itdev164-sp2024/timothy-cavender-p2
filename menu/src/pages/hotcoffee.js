import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const HotCoffee = ({data}) => {
  return (
    <Layout>
      <Seo title='Hot Coffee' />   
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

export default HotCoffee

export const coffeeQuery = graphql `
  {
    allContentfulReadAndMead(filter: {tags: {eq: "hotcoffee"}}) {
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