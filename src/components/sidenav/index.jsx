import "./styles.css";

import Desktop from "./desktop";

import Mobile from "./mobile";
import { useLayoutEffect, useState } from "react";
function SideNav() {
  const width = useWindowSize();
  return checking(width);
}

function useWindowSize() {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => setSize(window.innerWidth);
    window.addEventListener("resize", updateSize);
    updateSize();
  });

  return size;
}

function checking(width) {
  if (width >= 992) {
    return <Desktop />;
  } else {
    return <Mobile />;
  }
}

export default SideNav;
