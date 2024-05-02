import { Route, Switch, Router } from "wouter";
import Home from "../pages/Home";
import Classes from "../pages/Classes";

export default function PageRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/classes" component={Classes} />
      </Switch>
    </Router>
  );
}
