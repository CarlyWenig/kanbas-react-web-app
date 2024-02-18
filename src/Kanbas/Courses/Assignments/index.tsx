import React from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaFileAlt,
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
      {/* Add buttons and other fields here  */}
      <input
        className="custom-button"
        id="text-fields-search-assignment"
        placeholder="Search for Assignments"
      />
      <button className="custom-button">Group</button>
      <button className="custom-button">Assignment</button>
      <select className="custom-button">
        <option value="Edit Assignment Dates">Edit Assignment Dates</option>
      </select>
      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
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
    </>
  );
}
export default Assignments;
