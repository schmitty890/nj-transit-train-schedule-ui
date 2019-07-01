import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrainSchedule from "./pages/TrainSchedule/TrainSchedule";
import NoMatch from "./pages/NoMatch/NoMatch";

const App = () =>
  <Router>
    <section>
      <Switch>
        <Route exact path="/" component={TrainSchedule} />
        <Route component={NoMatch} />
      </Switch>
    </section>
  </Router>;

export default App;