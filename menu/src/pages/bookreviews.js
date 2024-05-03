import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const BookReviews = ({data}) => {
    return (
        <Layout>
            <h1>Book Reviews</h1>
        </Layout>
    )
}

export default BookReviews

export const query = graphql `
    {   
        allContentfulRmBookReviews {
            edges {
                node {
                    title
                    author
                    rating
                    reviewer
                    tags
                    reviewDate(formatString: "MMMM Do, YYYY")
                    review {
                        review
                    }
                }
            }
        }
    }
`