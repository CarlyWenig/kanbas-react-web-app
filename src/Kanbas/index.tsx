import KanbasNavigation from "./Navigation";
import {Routes, Route} from "react-router";
import Nav from "../Nav";

function Kanbas() {
    return (
      <div className="d-flex">
        <div>
            <Nav />
          <h1>Kanbas Navigation</h1>
        </div>
        <div style={{ flexGrow: 1 }}>
            <Routes>
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<h1>Dashboard</h1>} />
                <Route path="Courses" element={<h1>Courses</h1>} />
            </Routes>
          <h1>Account</h1>
          <h1>Dashboard</h1>
          <h1>Courses</h1>
        </div>
      </div>
  );}
  export default Kanbas;