import React from "react"
import Bio from "../components/Bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styling/index.css"

const IndexPage = () => (
  <Layout id="top">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Bio />
  </Layout>
)

export default IndexPage
