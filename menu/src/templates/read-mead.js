import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

const ReadMead = ({data}) => {
    const {title} = data.contentfulReadAndMead;

    return(
        <Layout>
            <h1>{title}</h1>
        </Layout>
    )
}

export default ReadMead;

export const pageQuery = graphql `
    query MyQuery {
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
`