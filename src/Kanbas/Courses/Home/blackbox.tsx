import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaChevronDown,
  FaTimes,
  FaBars,
  FaHome,
  FaSitemap,
  FaPlug,
  FaPencilRuler,
  FaRocket,
  FaCheckSquare,
  FaUsers,
  FaComments,
  FaBullhorn,
  FaFile,
  FaFolder,
  FaListAlt,
  FaBullseye,
  FaCircle,
  FaCog,
  FaChevronRight,
  FaBook,
  FaCalendar,
  FaInbox,
  FaClock,
  FaTv,
  FaShareSquare,
  FaQuestionCircle,
} from "react-icons/fa";

const BlackBox = () => {
  return (
    <div>
      <link rel="stylesheet" href="/libs/bootstrap/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="/libs/font-awesome/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="/Kanbas/styles.css" />
      <link rel="stylesheet" href="/Kanbas/Navigation/index.css" />
      <link rel="stylesheet" href="/Kanbas/Courses/Navigation/index.css" />
      <link rel="stylesheet" href="/Kanbas/Courses/Home/index.css" />
      <link rel="stylesheet" href="/Kanbas/Courses/Modules/index.css" />
      <link rel="stylesheet" href="/Kanbas/Courses/Home/index.css" />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

      <div className="row wd-bar">
        <div className="col-2" style={{ marginTop: "25px" }}>
          <Link
            to="#collapseExample2"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            <FaBars style={{ color: "white", fontSize: "20px" }} />
          </Link>
        </div>

        <div
          className="col-8"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <h5>CS5610.12631.202410</h5>
          <h6>Modules</h6>
        </div>

        <div
          className="col-2"
          style={{ textAlign: "right", marginTop: "20px" }}
        >
          <Link
            to="#collapseExample"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <FaChevronDown className="pull-right chevron-icon" />
            <FaTimes className="pull-right course-item chevron-icon" />
          </Link>
        </div>

        <div className="collapse" id="collapseExample">
          <div>
            <ul className="chevron-icon.course-nav">
              <li>
                <Link
                  to="/Kanbas/Courses/Home/screen.html"
                  className="course-item"
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaSitemap /> Modules
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaPlug /> Piazza
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaPlug /> Zoom Meetings
                </Link>
              </li>
              <li>
                <Link
                  to="/Kanbas/Courses/Assignments/screen.html"
                  className="course-item"
                >
                  <FaPencilRuler /> Assignments
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaRocket /> Quizzes
                </Link>
              </li>
              <li>
                <Link
                  to="/Kanbas/Courses/Grades/screen.html"
                  className="course-item"
                >
                  <FaCheckSquare /> Grades
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaUsers /> People
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaPlug /> Panopto Video
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaComments /> Discussions
                  <i className="fa fa-eye-slash wd-indented"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaBullhorn /> Announcements
                  <i className="fa fa-eye-slash wd-indented"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaFile /> Pages
                  <i className="fa fa-eye-slash wd-indented"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaFolder /> Files
                  <i className="fa fa-eye-slash wd-indented"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaListAlt /> Rubrics
                  <i className="fa fa-eye-slash wd-indented"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaBullseye /> Outcomes
                  <i className="fa fa-eye-slash wd-indented"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaCircle /> Collaborations
                  <i className="fa fa-eye-slash wd-indented"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaFile /> Syllabus
                  <i className="fa fa-eye-slash wd-indented"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaPlug /> Progress Reports (EAB Navigate)
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaCog /> Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse" id="collapseExample2">
          <div className="card">
            <div className="card-body">
              <div className="nav-item">
                <Link
                  to="/Kanbas/Account/Profile/screen.html"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaUserCircle /> Account
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/Kanbas/Dashboard/screen.html"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaTachometerAlt /> Dashboard
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/Kanbas/Courses/Home/screen.html"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaBook /> Courses&nbsp;
                  <FaChevronRight />
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaCalendar /> Calendar
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaInbox /> Inbox
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaClock /> History
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaTv /> Studio
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaShareSquare /> Commons
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaQuestionCircle /> Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackBox;
