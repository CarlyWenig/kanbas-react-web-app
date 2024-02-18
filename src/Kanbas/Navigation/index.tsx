import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaRegClock,
  FaTv,
  FaRegShareSquare,
  FaRegQuestionCircle,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "N", icon: <span></span> },
    { label: "Account", icon: <FaRegUserCircle className="fs-3" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-3 red-icon" /> },
    { label: "Courses", icon: <FaBook className="fs-3 red-icon" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-3 red-icon" /> },
    { label: "Inbox", icon: <FaInbox className="fs-3 red-icon" /> },
    { label: "History", icon: <FaRegClock className="fs-3 red-icon" /> },
    { label: "Studio", icon: <FaTv className="fs-3 red-icon" /> },
    { label: "Commons", icon: <FaRegShareSquare className="fs-3 red-icon" /> },
    { label: "Help", icon: <FaRegQuestionCircle className="fs-2 red-icon" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div>
        <ul className="wd-kanbas-navigation">
          {links.map((link, index) => (
            <li
              key={index}
              className={pathname.includes(link.label) ? "wd-active" : ""}
            >
              <Link to={`/Kanbas/${link.label}`}>
                {" "}
                {link.icon} {link.label}{" "}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
}
export default KanbasNavigation;
