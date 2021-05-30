import React from "react";

import { Switch, Route } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/portifolio" component={Portfolio} />
      <Route path="/contato" component={Contact} />
    </Switch>
  );
}

export default Routes;
