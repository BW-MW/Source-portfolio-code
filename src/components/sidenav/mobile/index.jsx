import { bubble as Menu } from "react-burger-menu";

import { HashRouter as Router } from "react-router-dom";

import RenderLinks from "../../../routes/Menu";
import Routing from "../../../routes/RoutesConfig";

import "./styles.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

function Mobile() {
  return (
    <Menu right noOverlay onStateChange={toggleMenu}>
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
    </Menu>
  );
}

export default Mobile;
