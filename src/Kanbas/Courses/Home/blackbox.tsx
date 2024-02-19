import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { courses } from "../../Database";
import { Link, useParams } from "react-router-dom";
import {
  FaUserCircle,
  FaTachometerAlt,
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
  FaEyeSlash,
} from "react-icons/fa";

const BlackBox = () => {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const [isCollapse1Open, setIsCollapse1Open] = useState(false);
  const [isCollapse2Open, setIsCollapse2Open] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapse1Toggle = () => {
    setIsCollapse1Open(!isCollapse1Open);
    if (isCollapse2Open) {
        setIsCollapse2Open(false);
        setIsExpanded(!isExpanded);
      }
    
  };

  const handleCollapse2Toggle = () => {
    setIsCollapse2Open(!isCollapse2Open);
    if(isCollapse1Open) {
        setIsCollapse1Open(false);
    }
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCollapseAndToggle = () => {
    handleCollapse2Toggle();
    handleToggle();
  };

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
            to="#"
            onClick={handleCollapse1Toggle}
            aria-expanded={isCollapse1Open}
            aria-controls="collapseExample"
          >
            <FaBars style={{ color: "white", fontSize: "20px" }} />
          </Link>
        </div>

        <div
          className="col-8"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <h5>{course?.number}</h5>
          <h6>Modules</h6>
        </div>

        <div
          className="col-2"
          style={{ textAlign: "right", marginTop: "20px" }}
        >
          <Link
            to="#"
            onClick={handleCollapseAndToggle}
            aria-expanded={isCollapse2Open}
            aria-controls="collapseExample2"
          >
            {isExpanded ? (
              <FaTimes className="pull-right chevron-icon" />
            ) : (
              <FaChevronRight className="pull-right chevron-icon" />
            )}
          </Link>
        </div>

        <div
          className={isCollapse2Open ? "collapse show" : "collapse"}
          id="collapseExample2"
        >
          <div className="white-background">
            <ul className="chevron-icon.course-nav">
              <li>
                <Link
                  to="src/Kanbas/Courses/Home/index.tsx"
                  className="course-item"
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="src/Kanbas/Courses/Modules/index.tsx" className="course-item">
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
                  to="src/Kanbas/Courses/Assignments/index.tsx"
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
                  <FaEyeSlash/>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaBullhorn /> Announcements
                  <FaEyeSlash/>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaFile /> Pages
                  <FaEyeSlash/>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaFolder /> Files
                  <FaEyeSlash/>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaListAlt /> Rubrics
                  <FaEyeSlash/>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaBullseye /> Outcomes
                  <FaEyeSlash/>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaCircle /> Collaborations
                  <FaEyeSlash/>
                </Link>
              </li>
              <li>
                <Link to="#" className="course-item">
                  <FaFile /> Syllabus
                  <FaEyeSlash/>
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

        <div
          className={isCollapse1Open ? "collapse show" : "collapse"}
          id="collapseExample"
        >
          <div className="white-background ">
            <ul>
              <li>
                <Link 
                  to="/Kanbas/#/Kanbas/Account"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaUserCircle /> Account
                </Link>
              </li>
              <br />
              <li>
                <Link
                  to="/Kanbas/#/Kanbas/Dashboard/index.tsx"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaTachometerAlt /> Dashboard
                </Link>
              </li>
              <br />
              <li>
                <Link
                  to="/Kanbas/#/Kanbas/Courses"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaBook /> Courses&nbsp;
                  <FaChevronRight />
                </Link>
              </li>
              <br />
              <li>
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaCalendar /> Calendar
                </Link>
              </li>
              <br />
              <li>
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaInbox /> Inbox
                </Link>
              </li>
              <br />
              <li>
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaClock /> History
                </Link>
              </li>
              <br />
              <li>
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaTv /> Studio
                </Link>
              </li>
              <br />
              <li>
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaShareSquare /> Commons
                </Link>
              </li>
              <br />
              <li>
                <Link
                  to="#"
                  className="text-danger"
                  style={{ textDecoration: "none" }}
                >
                  <FaQuestionCircle /> Help
                </Link>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackBox;
