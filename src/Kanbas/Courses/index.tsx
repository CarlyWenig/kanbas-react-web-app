import { courses } from "../../Kanbas/Database";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "../Courses/index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);
  const currentRoute = location.pathname.split("/").pop() || "Home";
  const renderSmallScreenContent = () => {
    switch (currentRoute) {
      case "Home":
        return <Home />;
    }
  };

  return (
    <div>
      <div className="full-screen-div">
        <h1>
          <HiMiniBars3 className="bars" />{" "}
          <span className="course-name"> {course?.name}</span>
          <span className="route">{currentRoute && ` > ${currentRoute}`}</span>
          <button className="btn btn-secondary float-end student-button">
            Student View
          </button>
        </h1>
        <hr />

        <CourseNavigation />
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{ left: "320px", top: "50px" }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
              />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
              <Route path="People" element={<h1>People</h1>} />
              <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
              <Route path="Discussions" element={<h1>Discussions</h1>} />
              <Route path="Announcements" element={<h1>Annoucements</h1>} />
              <Route path="Pages" element={<h1>Pages</h1>} />
              <Route path="Files" element={<h1>Files</h1>} />
              <Route path="Rubrics" element={<h1>Rubrics</h1>} />
              <Route path="Outcomes" element={<h1>Outcomes</h1>} />
              <Route path="Collaborations" element={<h1>Collaborations</h1>} />
              <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            </Routes>
          </div>
        </div>
      </div>

      <div className="small-screen-div">{renderSmallScreenContent()}</div>
    </div>
  );
}
export default Courses;
