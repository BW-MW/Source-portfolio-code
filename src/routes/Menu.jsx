import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function RenderLinks(props) {
  const currentLocation = useLocation();

  const { routers } = props;
  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current?.slice(0, routers.length);

    refs.current.map((ref) => {
      setWidthOnLi(ref);

      const pathLength = currentLocation.pathname.length;
      const pathName = currentLocation.pathname.slice(1, pathLength);

      if (pathName === ref.textContent) {
        ref.parentNode.classList.add("active");
      } else if (pathName === "" && ref.textContent === "home") {
        ref.parentNode.classList.add("active");
      } else if (
        pathName === "portifolio" &&
        ref.textContent === "portifólio"
      ) {
        ref.parentNode.classList.add("active");
      }
    });
  }, [routers]);

  return routers.map((route, i) => {
    return (
      <li className="navbar-item" key={route.key}>
        <Link
          className="navbar-link"
          to={route.path}
          ref={(element) => (refs.current[i] = element)}
          onClick={(event) => handleClick(event, refs)}
        >
          {route.label}
        </Link>
      </li>
    );
  });
}

function setWidthOnLi(link) {
  const linkWith = link.offsetWidth;
  const li = link.parentNode;
  li.style.width = `${linkWith * 1.3}px`;
}
function handleClick(event, refs) {
  const currentNav = event.target;
  const currentLi = currentNav.parentNode;

  for (let i in refs.current) {
    const listNav = refs.current[i];

    if (currentNav.textContent === listNav.textContent) {
      currentLi.classList.add("active");
    } else listNav.parentNode.classList.remove("active");
  }
}
export default RenderLinks;
