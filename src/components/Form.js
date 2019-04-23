import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  Button,
  Form,
  Jumbotron,
  Container,
  Row,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap"
import UploadFile from "./UploadFile"
import "../styling/Form.css"

const Contact = () => (
  <Form.Group controlId="formContactName">
    <Form.Label>Contact Name</Form.Label>
    <Form.Control size="sm" type="contact" />
  </Form.Group>
)

const Company = () => (
  <Form.Group controlId="formCompany">
    <Form.Label>Company / Label</Form.Label>
    <Form.Control size="sm" type="company" />
  </Form.Group>
)

const Artist = () => (
  <Form.Group controlId="formArtist">
    <Form.Label>Artist / Band</Form.Label>
    <Form.Control size="sm" type="artist" />
  </Form.Group>
)

const Email = () => (
  <Form.Group controlId="formEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control size="sm" type="email" />
  </Form.Group>
)

const Phone = () => (
  <Form.Group controlId="formPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control size="sm" type="phone" />
  </Form.Group>
)

const Address = () => (
  <Form.Group controlId="formAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control size="sm" type="address" />
  </Form.Group>
)

const City = () => (
  <Form.Group controlId="formCity">
    <Form.Label>City</Form.Label>
    <Form.Control size="sm" type="city" />
  </Form.Group>
)

const StateList = () => (
  <StaticQuery
    query={graphql`
      query {
        twitterapi {
          get_states {
            states {
              abbreviation
            }
          }
        }
      }
    `}
    render={data => {
      return data.twitterapi.get_states.states.map(state => (
        <option>{state.abbreviation}</option>
      ))
    }}
  />
)

const State = () => (
  <Form.Group controlId="formState">
    <Form.Label>State</Form.Label>
    <Form.Control size="sm" as="select">
      <option />
      <StateList />
    </Form.Control>
  </Form.Group>
)

const Postal = () => (
  <Form.Group controlId="formPostal">
    <Form.Label>Postal Code</Form.Label>
    <Form.Control size="sm" type="postal" />
  </Form.Group>
)

const File = () => (
  <Form.Group controlId="formPostal">
    <Form.Label>File Format returned to you</Form.Label>
    <Form.Control size="sm" as="select">
      <option>-other-</option>
      <option>Pro Tools</option>
      <option>Logic</option>
      <option>Ableton</option>
      <option>Raw Files</option>
      <option>FL Studio</option>
      <option>Reason</option>
      <option>Garage Band</option>
    </Form.Control>
    <Form.Text className="text-muted">
      If -other- is selected, please specify with additional notes.
    </Form.Text>
  </Form.Group>
)

const Count = () => (
  <Form.Group controlId="formCount">
    <Form.Label>Track Count</Form.Label>
    <Form.Check
      aria-label="radio 24"
      label="Up to 24 Tracks | $50"
      type="radio"
    />
    <Form.Check
      aria-label="radio 48"
      label="Up to 48 Tracks | $75"
      type="radio"
    />
    <Form.Check
      aria-label="radio 48"
      label="Up to 48 Tracks | $100"
      type="radio"
    />
  </Form.Group>
)

const UrlTip = () => (
  <OverlayTrigger
    placement="right"
    overlay={
      <Tooltip id="urlTips">
        <span>
          You can send your file with any cloud platform you may have such as:
        </span>{" "}
        <br />
        <br />
        <i class="fab fa-dropbox" /> <i class="fab fa-google-drive" />{" "}
        &lt;mediafire-icon&gt; &lt;onedrive-icon&gt;
      </Tooltip>
    }
  >
    <i class="fas fa-exclamation-circle" />
  </OverlayTrigger>
)

const DownloadUrl = () => (
  <Form.Group controlId="formURL">
    <Form.Label>URL to your file</Form.Label>
    <div className="downloadUrl">
      <Form.Control size="sm" type="download" />
      <UrlTip />
    </div>
    <Form.Text className="text-muted">Link to file if any</Form.Text>
  </Form.Group>
)

const Notes = () => (
  <Form.Group controlId="formNotes">
    <Form.Label>Additional Notes</Form.Label>
    <Form.Control as="textarea" rows="4" />
  </Form.Group>
)

const ContactForm = () => (
  <Form className="form__main">
    <Contact />
    <Company />
    <Artist />
    <Phone />
    <Address />
    <City />
    <State />
    <Postal />
    <File />
    <Count />
    <h1>google captcha goes here</h1>
    <Button variant="danger" type="submit">
      Submit
    </Button>
  </Form>
)

const InquiryForm = () => (
  <Row>
    <Form className="form__main">
      <Email />
      <DownloadUrl />
      <Notes />
      <Jumbotron fluid>
        <Container>
          <h1>File Upload</h1>
          <br />
          <UploadFile />
        </Container>
      </Jumbotron>
      <h1>&lt;google captcha goes here before uploading to prevent spam&gt;</h1>
      <Button variant="outline-warning" type="submit">
        Submit
      </Button>
    </Form>
  </Row>
)

export { ContactForm, InquiryForm }
