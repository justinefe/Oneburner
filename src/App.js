import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomepageTwo from "./views/HomepageTwo";
import HomepageOne from "./views/HomepageOne";
import ContactSale from "./views/ContactSales";
import Login from "./views/Login";
import "./App.scss";
function App() {
  return (
    <div className=" container App">
      <Router>
        <Switch>
          <Route exact path="/landing" component={HomepageTwo} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sales" component={ContactSale} />
          <Route exact path="/" component={HomepageOne} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
