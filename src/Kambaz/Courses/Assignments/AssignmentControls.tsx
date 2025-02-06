import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end"
        id="wd-add-module-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-add-module-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <FormGroup className="mb-3 float-start" controlId="wd-search-assignment">
        <InputGroup>
          <InputGroup.Text>
            <AiOutlineSearch />
          </InputGroup.Text>
          <FormControl type="text" placeholder="Search..." />
        </InputGroup>
      </FormGroup>
    </div>
  );
}

export default AssignmentControls;
