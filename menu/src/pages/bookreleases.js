import React from 'react'
import { graphql } from 'gatsby'

import {BookContainer} from '../components/Books/BookContainer'
import {Books} from '../components/Books/Books'
import Layout from '../components/layout'

const BookReleases = ({data}) => {
    return (
        <Layout>
            <BookContainer>
                <h1>Book Releases</h1>
                {
                    data.allContentfulRmBookReleases.edges.map(edge => (
                        <Books>
                            <h2>{edge.node.title}</h2>
                            <img src={edge.node.bookImage.file.url}/>
                            <h2>{edge.node.author}</h2>
                            <p>{edge.node.releaseDate}</p>
                            <p>{edge.node.description.description}</p>
                        </Books>
                    ))
                }
            </BookContainer>
            

        </Layout>
    )
}

export default BookReleases

export const query = graphql `
{
  allContentfulRmBookReleases(sort: {releaseDate: DESC}) {
    edges {
      node {
        title
        bookImage {
          file {
            url
          }
        }
        author
        releaseDate(formatString: "MMMM Do, YYYY")
        description {
          description
        }
      }
    }
  }
}
`