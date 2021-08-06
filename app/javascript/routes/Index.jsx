import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import SuperAdminDashboard from "../components/SuperAdminDashboard";
import NewUser from "../components/NewUser"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={User} />
      <Route path="/superAdminDashboard" exact component={SuperAdminDashboard} />
      <Route path="/newUser" exact component={NewUser} />
    </Switch>
  </Router>
);