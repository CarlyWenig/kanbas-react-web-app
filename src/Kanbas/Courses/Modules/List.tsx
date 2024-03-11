import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import { FaEllipsisV, FaPlus } from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex justify-content-end modules-container">
        <button className="custom-button">Collapse All</button>
        <button className="custom-button">View Progress</button>
        <select className="custom-button">
          <option value="Publish All">Publish All</option>
        </select>
        <button className="mod-button">
          <FaPlus /> Module
        </button>
        <button className="elp-button">
          <FaEllipsisV className="ms-2" />
        </button>
      </div>
      <hr />
      <ul className="list-group-item">
        <li className="list-group-item">
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <span className="float-end">
            <button
              className="custom-button-b"
              onClick={() => dispatch(updateModule(module))}
            >
              Update
            </button>
            <button
              className="custom-button-g"
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
          </span>
          <br />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
        <hr />
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <span style={{ fontSize: "32px", fontWeight: "bold" }}>
                {module.name}
              </span>
              <span className="float-end">
                <button
                  className="custom-button-r"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
                <button
                  className="custom-button-g"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
              </span>
              <p>{module.description}</p>
              <p>{module._id}</p>
              <hr />
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
