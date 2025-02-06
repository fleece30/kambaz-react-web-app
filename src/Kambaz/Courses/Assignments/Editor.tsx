import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="">
      <Form.Group className="mb-3" controlId="name1">
        <Form.Label column sm={2}>
          Assignment Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Assignment name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="textarea2">
        <Col sm={10}>
          <Form.Control
            as="textarea"
            style={{ height: "200px" }}
            defaultValue={`The assignment is available online.
Submit a link to the landing page of your Web Application running on Netlify.
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="points">
        <Form.Label column sm={2} className="text-align-end">
          Points
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Points" value={100} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="assignmentGroup">
        <Form.Label column sm={2} className="text-align-end">
          Assignment Group
        </Form.Label>
        <Col sm={8}>
          <FormSelect>
            <option selected value="ASSIGNMENTS">
              ASSIGNMENTS
            </option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAM">EXAM</option>
            <option value="PROJECT">PROJECT</option>
          </FormSelect>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="submissionType">
        <Form.Label column sm={2} className="text-align-end">
          Submission Type
        </Form.Label>
        <Col sm={8} className="border border-secondary p-3 rounded">
          <FormSelect className="mb-1">
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </FormSelect>
          <b className="mb-1">Online Entry Options</b>
          <Form.Check type="checkbox" id="text-entry" label="Text Entry" />
          <Form.Check type="checkbox" id="website-url" label="Website URL" />
          <Form.Check
            type="checkbox"
            id="media-recordings"
            label="Media Recordings"
          />
          <Form.Check
            type="checkbox"
            id="student-annotation"
            label="Student Annotation"
          />
          <Form.Check type="checkbox" id="file-uploads" label="File Uploads" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="assign">
        <Form.Label column sm={2} className="text-align-end">
          Assign
        </Form.Label>
        <Col sm={8} className="border border-secondary p-3 rounded">
          <b className="mb-1">Assign to</b>
          <Form.Control type="text" placeholder="Assign to" value="Everyone" />
          <b className="pb-3">Due</b>
          <Form.Control
            type="datetime"
            placeholder="Assignment name"
            value={new Date("2025-11-23T23:59:00").toUTCString()}
          />
          <div className="d-flex gap-2">
            <div className="flex-grow-1">
              <b>Available from</b>
              <Form.Control
                type="datetime"
                placeholder="Assignment name"
                value={new Date("2025-11-30T23:59:00").toUTCString()}
              />
            </div>
            <div className="flex-grow-1">
              <b>Until</b>
              <Form.Control
                type="datetime"
                placeholder="Assignment name"
                value={new Date("2025-11-23T23:59:00").toUTCString()}
              />
            </div>
          </div>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="buttons">
        <Col sm={10}>
          <hr />
          <Button
            variant="danger"
            className="me-1 float-end"
            id="wd-add-module-btn"
          >
            Save
          </Button>
          <Button
            variant="secondary"
            className="me-1 float-end"
            id="wd-add-module-btn"
          >
            Cancel
          </Button>
        </Col>
      </Form.Group>
    </div>
  );
}
