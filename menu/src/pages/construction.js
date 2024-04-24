import React from 'react'
import { graphql, Link } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'

import comingSoon from '../images/comingsoon.jpg'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Construction = () => {
    return (
        <Layout>
        <Seo title="Coming Soon" />
        <div className="construction">
            <h2>COMING SOON</h2>
        </div>
            
        </Layout>
    )
}

export default Construction;