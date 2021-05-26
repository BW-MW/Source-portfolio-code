import "./sidenav.css";
import { HashRouter as Router } from "react-router-dom";

import RenderLinks from "./../../routes/Menu";
import Routing from "../../routes/RoutesConfig";

function SideNav() {
  return (
    <div className="side-nav">
      <header className="header-side-nav">
        <div className="name">Bruno silas</div>
        <div className="photo"></div>
      </header>

      <nav className="navbar">
        <ul className="navbar-nav">
          <Router>
            <RenderLinks routers={Routing} />
          </Router>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
