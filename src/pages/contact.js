import React from "react"
import Layout from "../components/layout"
import "../styling/contact.css"
import { InquiryForm } from "../components/Form"

import ContactModal from "../components/ContactModal"

export default ({ data }) => (
  <Layout>
    <div class="contactM">
      <div class="left">
        <div className="contactM__dialogue">
          <i class="fas fa-quote-left" />
          <h1 className="contactM__dialogue--center">
            MIXING &amp; MASTERING ONLINE
          </h1>
          <i class="fas fa-quote-right" />
        </div>

        <div className="contactM__features" />
        <InquiryForm />
      </div>
      <div class="right">Seth img as background here</div>
      <ContactModal />
    </div>
  </Layout>
)
