import React from "react";
import {
  FaBan,
  FaCheckCircle,
  FaUpload,
  FaBullseye,
  FaChartBar,
  FaBullhorn,
  FaExclamation,
  FaCalendar,
} from "react-icons/fa";

function Status() {
  return (
    <div>
      <br />
      <h1 style={{ fontWeight: "normal" }}>Course Status</h1>
      <button type="button" className="unpub-button">
        <FaBan /> Unpublish
      </button>
      <button type="button" className="pub-button">
        <FaCheckCircle /> Published
      </button>
      <br />
      <br />
      <button type="button" className="status-button">
        <FaUpload /> Import Existing Content
      </button>
      <button type="button" className="status-button">
        <FaUpload /> Import From Commons
      </button>
      <button type="button" className="status-button">
        <FaBullseye /> Choose Home Page
      </button>
      <button type="button" className="status-button">
        <FaChartBar /> View Course Stream
      </button>
      <button type="button" className="status-button">
        <FaBullhorn /> New Announcement
      </button>
      <button type="button" className="status-button">
        <FaChartBar /> New Analytics
      </button>
      <button type="button" className="status-button">
        <FaBullhorn /> View Course Notifications
      </button>
      <br />
      <br />
      {/* To Do */}
      <h3 style={{ fontWeight: "normal" }}>To Do</h3>
      <hr />
      <h6 style={{ color: "red", fontWeight: "normal" }}>
        <FaExclamation /> Grade A1 - ENV + HTML
      </h6>
      <p style={{ color: "lightgray", fontSize: "small" }}>
        &nbsp;&nbsp;&nbsp;100 points Sep 18 at 11:59pm
      </p>
      <br />
      {/* Coming up */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ fontWeight: "normal" }}>Coming Up</h3>
        <p style={{ color: "red", fontSize: "small" }}>
          <FaCalendar /> View Calendar
        </p>
      </div>
      <hr />
      <h6 style={{ color: "red" }}>
        <FaCalendar /> Lecture
      </h6>
      <p style={{ color: "lightgray", fontSize: "small", marginBottom: "2px" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CS 4550.12631.202410
      </p>
      <p style={{ color: "lightgray", fontSize: "small", marginBottom: "2px" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sep 11 at 11:45am
      </p>

      <br />
      {/* second event */}
      <h6 style={{ color: "red" }}>
        <FaCalendar /> CS5610 Web Development Summer 1 2023- Lecture
      </h6>
      <p style={{ color: "lightgray", fontSize: "small", marginBottom: "2px" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CS 5610.12631.202410
      </p>
      <p style={{ color: "lightgray", fontSize: "small", marginBottom: "2px" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sep 11 at 7pm
      </p>
    </div>
  );
}

export default Status;
