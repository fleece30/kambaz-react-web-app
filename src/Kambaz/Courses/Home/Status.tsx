import { Button } from "react-bootstrap";
import { AiOutlineStop } from "react-icons/ai";
import { BsCrosshair, BsGraphUp } from "react-icons/bs";
import { CiBellOn, CiCircleCheck, CiImport } from "react-icons/ci";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoMegaphoneOutline } from "react-icons/io5";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <Button variant="secondary" size="lg" className="me-1" id="wd-unpublish">
        <AiOutlineStop
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Unpublish
      </Button>
      <Button variant="success" size="lg" className="me-1" id="wd-published">
        <CiCircleCheck
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Published
      </Button>
      <br />
      <Button
        variant="secondary"
        size="lg"
        className="me-1 mt-1"
        id="wd-import-existing"
      >
        <CiImport
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Import Existing Content
      </Button>
      <br />
      <Button
        variant="secondary"
        size="lg"
        className="me-1 mt-1"
        id="wd-import-commons"
      >
        <FaArrowRightFromBracket
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Import from Commons
      </Button>
      <br />
      <Button
        variant="secondary"
        size="lg"
        className="me-1 mt-1"
        id="wd-choose-home"
      >
        <BsCrosshair
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Choose Home Page
      </Button>
      <br />
      <Button
        variant="secondary"
        size="lg"
        className="me-1 mt-1"
        id="wd-course-stream"
      >
        <BsGraphUp
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        View Course Stream
      </Button>
      <br />
      <Button
        variant="secondary"
        size="lg"
        className="me-1 mt-1"
        id="wd-announcement"
      >
        <IoMegaphoneOutline
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        New Announcement
      </Button>
      <br />
      <Button
        variant="secondary"
        size="lg"
        className="me-1 mt-1"
        id="wd-analytics"
      >
        <BsGraphUp
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        New Analytics
      </Button>
      <br />
      <Button
        variant="secondary"
        size="lg"
        className="me-1 mt-1"
        id="wd-notifications"
      >
        <CiBellOn
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        View COuse Notifications
      </Button>
    </div>
  );
}
