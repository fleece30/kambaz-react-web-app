import { ListGroup } from "react-bootstrap";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentButtons from "./AssignmentButtons";
import { TfiWrite } from "react-icons/tfi";
import "./Assignments.css";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />{" "}
            <FaCaretDown
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />{" "}
            Assignments <AssignmentButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0 border-start border-3 border-success">
            <ListGroup.Item className="d-flex wd-lesson p-3 ps-1 align-items-center">
              <BsGripVertical className="me-2 fs-3" />{" "}
              <TfiWrite className="me-4 fs-3 text-success" />
              <span className="wd-flex-col-container flex-grow-1">
                <span>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-black text-decoration-none"
                  >
                    <b>A1</b>
                  </a>
                </span>
                <span>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00am |
                </span>
                <span>
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </span>
              </span>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />{" "}
              <TfiWrite className="me-4 fs-3 text-success" />
              <span className="wd-flex-col-container flex-grow-1">
                <span>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-black text-decoration-none"
                  >
                    <b>A2</b>
                  </a>
                </span>
                <span>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am |
                </span>
                <span>
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </span>
              </span>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />{" "}
              <TfiWrite className="me-4 fs-3 text-success" />
              <span className="wd-flex-col-container flex-grow-1">
                <span>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-black text-decoration-none"
                  >
                    <b>A3</b>
                  </a>
                </span>
                <span>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00am |
                </span>
                <span>
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                </span>
              </span>
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
