import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5010/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/pdp.jpg" width={200} />
            <div>
              <h5> CS5010 Programming Design Paradigm </h5>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigm{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5100/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/ai.jpg" width={200} />
            <div>
              <h5> CS5100 Foundations of AI </h5>
              <p className="wd-dashboard-course-title">Foundations of AI </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5800/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/algo.png" width={200} />
            <div>
              <h5> CS5800 Algorithms </h5>
              <p className="wd-dashboard-course-title">Algorithms </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5610/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/webdev.png" width={200} />
            <div>
              <h5> CS5610 Web Development </h5>
              <p className="wd-dashboard-course-title">Web Development </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses6120/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/nlp.jpg" width={200} />
            <div>
              <h5> CS6120 Natural Language Processing </h5>
              <p className="wd-dashboard-course-title">
                Natural Language Processing{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/6240/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/lspdp.png" width={200} />
            <div>
              <h5> CS6240 Large Scale Parallel Data Processing </h5>
              <p className="wd-dashboard-course-title">
                Large Scale Parallel Data Processing{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
