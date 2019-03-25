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
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            color: "white",
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              fontSize: ".75rem",
              color: "#B17E0B",
              textAlign: "center",
            }}
          >
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
