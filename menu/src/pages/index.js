import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import hotCoffee from "../images/hotcoffee.jpg"
import liquor from "../images/liquor.jpg"
import books from "../images/books.jpg"
import cBrew from "../images/coldbrew.jpg"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="container-item">
        <h2>Hot Coffee Menu</h2>
        <Link to="/hotcoffee">
          <img src={hotCoffee}alt="Hot Coffee" />
        </Link>
      </div>
      <div className="container-item">
        <h2>Liquor Menu</h2>
        <Link to="/liquor">
          <img src={liquor}alt="Liquor" />
        </Link>
      </div>
      <div className="container-item">
        <h2>Cold Brew Menu</h2>
        <Link to="/construction">
          <img src={cBrew}alt="Cold Brew" />
        </Link>
      </div>
      <div className="container-item">
        <h2>Book Menu</h2>
        <Link to="/construction">
          <img src={books}alt="Books" />
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql `
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
`