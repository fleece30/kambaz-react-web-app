import { Link, NavLink } from "react-router-dom";

import {
  AiOutlineBook,
  AiOutlineClockCircle,
  AiOutlineDashboard,
  AiOutlineInbox,
} from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCollectionPlay } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";
export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed
       bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <br />
      <NavLink
        to="/Kambaz/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </NavLink>
      <NavLink
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) => `list-group-item text-center border-0
                  ${
                    !isActive ? "bg-black text-white" : "bg-white text-danger"
                  }`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard{" "}
      </NavLink>
      <NavLink
        to="/Kambaz/Dashboard"
        id="wd-course-link"
        className={({ isActive }) => `list-group-item text-center border-0
        ${!isActive ? "bg-black text-white" : "bg-white text-danger"}`}
      >
        <AiOutlineBook className="fs-1 text-danger" />
        <br />
        Courses{" "}
      </NavLink>
      <NavLink
        to="/Kambaz/Calendar"
        id="wd-course-link"
        className={({ isActive }) => `list-group-item text-center border-0
        ${!isActive ? "bg-black text-white" : "bg-white text-danger"}`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar{" "}
      </NavLink>
      <NavLink
        to="/Kambaz/Inbox"
        id="wd-course-link"
        className={({ isActive }) => `list-group-item text-center border-0
        ${!isActive ? "bg-black text-white" : "bg-white text-danger"}`}
      >
        <AiOutlineInbox className="fs-1 text-danger" />
        <br />
        Inbox{" "}
      </NavLink>
      <NavLink
        to="/Kambaz/History"
        id="wd-course-link"
        className={({ isActive }) => `list-group-item text-center border-0
        ${!isActive ? "bg-black text-white" : "bg-white text-danger"}`}
      >
        <AiOutlineClockCircle className="fs-1 text-danger" />
        <br />
        History{" "}
      </NavLink>
      <NavLink
        to="/Kambaz/Studio"
        id="wd-course-link"
        className={({ isActive }) => `list-group-item text-center border-0
        ${!isActive ? "bg-black text-white" : "bg-white text-danger"}`}
      >
        <BsCollectionPlay className="fs-1 text-danger" />
        <br />
        Studio{" "}
      </NavLink>
      <NavLink
        to="/Kambaz/Help"
        id="wd-course-link"
        className={({ isActive }) => `list-group-item text-center border-0
        ${!isActive ? "bg-black text-white" : "bg-white text-danger"}`}
      >
        <GoQuestion className="fs-1 text-danger" />
        <br />
        Help{" "}
      </NavLink>
      {/* complete styling the rest of the links */}
    </div>
  );
}
