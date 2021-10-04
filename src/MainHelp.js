import "./App.css";
import React from "react";
import Navbar from "./components_help/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components_help/pages/Home";
import Services from "./components_help/pages/Services";
import Products from "./components_help/pages/Products";
import App from "./App";
import LoginForm from "./components/LoginForm";

function MainHelp() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/services" render={Services} />
          <Route path="/products" render={Products} />
          <Route path="/chat" render={App} />
          <Route path="/login/:user" render={LoginForm} />
        </Switch>
      </Router>
    </>
  );
}

export default MainHelp;
