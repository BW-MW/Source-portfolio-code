import React from "react";
import { Link } from "react-router-dom";

function RenderLinks(props) {
  const { routers } = props;

  return <>{mapLinks(routers)}</>;
}

function mapLinks(routers) {
  return routers.map((route) => {
    return (
      <li className="navbar-item" key={route.key}>
        <Link className="navbar-link" to={route.path}>
          {route.label}
        </Link>
      </li>
    );
  });
}

export default RenderLinks;
