import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomepageOne from "./views/HomepageOne";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomepageOne} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
