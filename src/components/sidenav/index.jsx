import "./styles.css";

import Desktop from "./desktop";

import Mobile from "./mobile";
function SideNav() {
  return checking();
}

function checking() {
  if (window.innerWidth >= 992) {
    return <Desktop />;
  } else {
    return <Mobile />;
  }
}

export default SideNav;
