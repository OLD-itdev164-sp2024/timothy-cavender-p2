import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const BookReleases = ({data}) => {
    return (
        <Layout>
            <h1>Book Releases</h1>
        </Layout>
    )
}

export default BookReleases

/*export const query = graphql `
{

}
`*/