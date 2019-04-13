import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./layout2.css"
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
        desktop: file(relativePath: { eq: "AK.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3000, maxHeight: 3001) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <BackgroundImage
          fluid={data.desktop.childImageSharp.fluid}
          alt="ak logo"
          className="bgImage"
        >
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="layout__main">
            <main>{children}</main>
            <footer className="layout__foot">
              © {new Date().getFullYear()}, {data.site.siteMetadata.client} |{" "}
              {data.site.siteMetadata.author}
            </footer>
          </div>
        </BackgroundImage>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
