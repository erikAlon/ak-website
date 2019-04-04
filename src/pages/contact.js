import React from "react"

import Layout from "../components/layout"
import "./contact.css"
import ContactForm from "../components/form"

const Contact = () => (
  <Layout>
    <div class="contact">
      <div class="left">
        <h1>Outro</h1>
        <h1>Mixing and mastering details</h1>

        <ContactForm />
      </div>

      <div class="right">Seth img as background here</div>
    </div>
  </Layout>
)

export default Contact
