import React from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"
import uploadsQuery from "../queries/uploads"

import { Button } from "react-bootstrap"

const UploadFile = ({ mutate }) => {
  console.log("uploadfile fired")
  const handleChange = ({
    target: {
      validity,
      files: [file],
    },
  }) =>
    validity.valid &&
    mutate({
      variables: { file },
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

  return (
    <Button
      as="input"
      variant="outline-warning"
      type="file"
      onChange={handleChange}
    />
  )
}

export default graphql(gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      id
      filename
      mimetype
      path
    }
  }
`)(UploadFile)
