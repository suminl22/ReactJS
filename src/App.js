import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route>
        <Detail path="/movie/:id"/>
      </Route>
    
    </Switch>
  </Router>;
}

export default App;
