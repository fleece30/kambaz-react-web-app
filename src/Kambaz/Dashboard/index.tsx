import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card style={{ height: "330px" }}>
              <Link
                to="/Kambaz/Courses/5010/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/pdp.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5010 Programming Design Paradigm
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Programming Design Paradigm
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card style={{ height: "330px" }}>
              <Link
                to="/Kambaz/Courses/5100/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/ai.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5100 Foundations of AI
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Foundations of AI
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card style={{ height: "330px" }}>
              <Link
                to="/Kambaz/Courses/5800/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/algo.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5800 Algorithms
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Algorithms
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card style={{ height: "330px" }}>
              <Link
                to="/Kambaz/Courses/5610/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/webdev.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5610 Web Development
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Web Development
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card style={{ height: "330px" }}>
              <Link
                to="/Kambaz/Courses/6120/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/nlp.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS6120 Natural Language Processing
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Natural Language Processing
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card style={{ height: "330px" }}>
              <Link
                to="/Kambaz/Courses/6240/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/lspdp.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS6240 Large Scale Parallel Data Processing
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    LSPDP
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card style={{ height: "330px" }}>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
