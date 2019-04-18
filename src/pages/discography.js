import React from "react"

import Layout from "../components/layout"

import "./discography.css"
import Soundcloud from "../components/Soundcloud"
import Twitter from "../components/Twitter"

const Discography = () => (
  <Layout>
    <div class="disco">
      <div class="tweet">
        <Twitter />
      </div>
      <Soundcloud />
    </div>
  </Layout>
)

export default Discography
