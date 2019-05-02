import React from "react"
import { Email, DownloadUrl, Notes } from "./FormFields"
import { Button, Form } from "react-bootstrap"
import "../styling/InquiryForm.css"
import gql from "graphql-tag"
import { graphql } from "react-apollo"
import uploadsQuery from "../queries/uploads"
import "../styling/InquiryForm.css"

class InquiryForm extends React.Component {
  state = {
    email: "",
    url: "",
    file: null,
    notes: "",
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleChangeFile = ({
    target: {
      validity,
      files: [file],
    },
  }) => {
    validity.valid && this.setState({ file })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { email, url, file, notes } = this.state

    this.props.mutate({
      variables: { email, url, file, notes },
      update(
        proxy,
        {
          data: { singleUpload },
        }
      ) {
        const data = proxy.readQuery({ query: uploadsQuery })
        data.uploads.push(singleUpload)
        proxy.writeQuery({ query: uploadsQuery, data })
      },
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="inquiry__main">
        <Email props={this.state.email} onChange={this.handleChange} />
        <DownloadUrl props={this.state.url} onChange={this.handleChange} />
        <Notes props={this.state.notes} onChange={this.handleChange} />
        <Form.Group>
          <Form.Label>Upload file</Form.Label>
          <input type="file" onChange={this.handleChangeFile} />
        </Form.Group>
        <Button variant="outline-warning" type="submit">
          Send message!
        </Button>
      </Form>
    )
  }
}

export default graphql(gql`
  mutation($file: Upload!, $email: String!, $url: String, $notes: String) {
    singleUpload(file: $file, email: $email, url: $url, notes: $notes) {
      id
      filename
      mimetype
      path
    }
  }
`)(InquiryForm)
