import React from "react";

import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

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
