import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { modules } from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

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
        <ul className="wd-modules">
          {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => setSelectedModule(module)}
              >
                <span className="list-group-item">
                  {module.name}
                  &nbsp;
                  &nbsp;
                  <button
                    className="custom-button-r"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  &nbsp;
                  
                  <button
                    className="custom-button-g"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </span>

                {selectedModule._id === module._id && (
                  <ul className="list-group">
                    {module.lessons?.map(
                      (lesson: {
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                      }) => (
                        <li className="list-group-item">
                          <FaEllipsisV className="me-2" />
                          {lesson.name}
                          <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                )}
                <hr />
              </li>
            ))}
        </ul>
      </ul>
    </>
  );
}
export default ModuleList;
