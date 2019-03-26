import React from "react"

import Layout from "../components/layout"

import "./discography.css"
import Soundcloud from "../components/Soundcloud"

const Discography = () => (
  <Layout>
    <div class="disco">
      <div class="tweet">tweet</div>
      <div class="soundcloud">
        <Soundcloud />
      </div>
      <div class="insta">insta</div>
      <div class="blog">blog</div>
    </div>
  </Layout>
)

export default Discography
