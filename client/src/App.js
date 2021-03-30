import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactState from "./Context/ContactState";
import AuthState from "./Context/AuthState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import AlertState from "./Context/AlertState";
import Alerts from "./Components/Alerts";
import setAuthToken from "./Context/setAuthToken";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
