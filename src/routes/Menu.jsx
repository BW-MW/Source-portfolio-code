import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function RenderLinks(props) {
  const { routers } = props;
  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current?.slice(0, routers.length);

    refs.current.map((ref) => {
      setWidthOnLi(ref);

      if (ref.id === "Home") ref.parentNode.classList.add("active");

      ref.addEventListener("click", (event) => {
        const currentNav = event.target;
        const currentLi = currentNav.parentNode;

        for (let i in refs.current) {
          const listNav = refs.current[i];

          if (currentNav.textContent === listNav.textContent) {
            currentLi.classList.add("active");
          } else listNav.parentNode.classList.remove("active");
        }
      });
    });
  }, [routers]);

  return routers.map((route, i) => {
    return (
      <li className="navbar-item" key={route.key}>
        <Link
          className="navbar-link"
          to={route.path}
          id={route.label}
          ref={(element) => (refs.current[i] = element)}
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

export default RenderLinks;
