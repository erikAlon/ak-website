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
      <div class="soundcloud">
        <Soundcloud />
      </div>
      <div class="insta">Carousel placeholder</div>
      <div class="blog">Blog placeholder</div>
    </div>
  </Layout>
)

export default Discography

/*
Soundcloud appearing disappearing list vertical
- ul:
  - li:
    - tracks
      - img:
        - track pic
      - div:
        - name

Instagram carousel horizontal
- ul:
  - li:
    - img:
      - instagram pic

Twitter newsfeed on the far right
- ul:
  - li:
    - div:
      - twitter tweet

Database blog
- ul:
  - li:
    - div:
      - blog
        - h1:
          - title
        - h2:
          - date
        - p:
          - description
*/
