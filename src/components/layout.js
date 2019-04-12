import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./layout2.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            client
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <div className="layout--overlay" />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="layout__main">
          <main>{children}</main>
          <footer className="layout__foot">
            © {new Date().getFullYear()}, {data.site.siteMetadata.client} |{" "}
            {data.site.siteMetadata.author}
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
