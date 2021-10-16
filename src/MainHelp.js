import "./App.css";
import React from "react";
import Navbar from "./components_help/Navbar";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components_help/pages/Home";
import Services from "./components_help/pages/Services";
import Products from "./components_help/pages/Products";
import App from "./App";
import LoginForm from "./components/LoginForm";
import LoginHelp from "./components/LoginHelp";
import LoginSpecial from "./components/LoginSpecial";
import Register from "./components/Register";

function MainHelp() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <PrivateRoute path = '/chat' >
            <App/>
          </PrivateRoute>
          <Route path="/loginHelp" component={LoginHelp} />
          <Route path="/loginSpecial" component={LoginSpecial} />
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/signIn" component={Register} />
          <Redirect from='/userForm' to='/chat' ></Redirect>
        </Switch>
      </Router>
    </>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem("username")

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/loginForm',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default MainHelp;
