import { Link } from "react-router-dom";
import { Motto } from "./motto";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Motto />
        <div className="about-me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec neque rhoncus, facilisis erat eget, rhoncus ipsum. Aenean rutrum
          urna ligula, vel ornare dui vulputate et. Phasellus dapibus preti
        </div>
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
