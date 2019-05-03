import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styling/layout.css"
import "../styling/layout2.css"
import BackgroundImage from "gatsby-background-image"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
            client
          }
        }
        ak: file(relativePath: { eq: "AK95.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1001) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        fluid={data.ak.childImageSharp.fluid}
        alt="ak logo"
        id="ak"
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="layout__main">
          <main style={{ zIndex: 1 }}>{children}</main>
          <footer className="layout__foot">
            © {new Date().getFullYear()} All Rights Reserved,{" "}
            {data.site.siteMetadata.client} | {data.site.siteMetadata.author}
          </footer>
        </div>
      </BackgroundImage>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
