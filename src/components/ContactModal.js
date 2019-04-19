import React from "react"
import { Modal } from "react-bootstrap"

import "../styling/ContactModal.css"

import { ContactForm } from "./Form"

class ContactModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <>
        <span onClick={this.toggleShow}>Contact</span>
        <Modal show={this.state.show} onHide={this.toggleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Get a reply from the Kurupted</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm />
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </>
    )
  }
}

export default ContactModal
