import "./App.css";
import React from "react";
import Navbar from "./components_help/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components_help/pages/Home";
import Services from "./components_help/pages/Services";
import Products from "./components_help/pages/Products";

function MainHelp() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default MainHelp;
