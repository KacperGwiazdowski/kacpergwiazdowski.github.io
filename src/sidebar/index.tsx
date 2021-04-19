import { Link } from "react-router-dom";
import { Motto } from "./motto";
import { Greeting } from "./greeting";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Motto />
        <Greeting />
        <div className="navigation">
          <Link className="navigation-button" to="/">
            Me
          </Link>
          <Link className="navigation-button" to="/work">
            Work
          </Link>
          <Link className="navigation-button" to="/projects">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
