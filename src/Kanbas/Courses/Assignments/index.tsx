import React from "react";
import {
  FaCheckCircle,
  FaChevronDown,
  FaEllipsisV,
  FaFileAlt,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../../../../src/Kanbas/Courses/Assignments/index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <div className="assignment-container">
        {/* Add buttons and other fields here  */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="custom-button"
            id="text-fields-search-assignment"
            placeholder="Search for Assignments"
          />
          <div style={{ marginLeft: "auto" }}>
            <button className="custom-button">
              <FaPlus /> Group
            </button>
            <button className="assignment-button">
              <FaPlus /> Assignment
            </button>
            <button className="elp-button">
              <FaEllipsisV className="ms-2" />
            </button>
          </div>
        </div>

        <hr />

        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" />
              <FaChevronDown className="me-2" />
              ASSIGNMENTS
              <span className="float-end">
                40% of Total
                <FaPlus className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <span className="green-file-icon">
                    <FaFileAlt className="me-2" />
                  </span>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                  <div>
                    <li className="text-secondary list-group due-date">
                      {assignment.modules}
                      {" | "}
                      Due Date: {assignment.dueDate}
                      {" | "}
                      {assignment.points}
                      {" pts"}
                    </li>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Assignments;
