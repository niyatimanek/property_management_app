import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Users from "../components/Users";
import SuperAdminDashboard from "../components/SuperAdminDashboard";
import NewUser from "../components/NewUser";
import User from "../components/User";
import Admins from "../components/Admins";
import Properties from "../components/Properties";
import NewProperty from "../components/NewProperty";
import Property from "../components/Property";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={Users} />
      <Route path="/superAdminDashboard" exact component={SuperAdminDashboard} />
      <Route path="/newUser/:role" exact component={NewUser} />
      <Route path="/user/:id" exact component={User} />
      <Route path="/admins" exact component={Admins} />
      <Route path="/properties" exact component={Properties} />
      <Route path="/newProperty" exact component={NewProperty} />
      <Route path="/property/:id" exact component={Property} />
    </Switch>
  </Router>
);