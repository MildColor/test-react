import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Test/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/">
          <Home></Home>
        </Route>
      </Router>
    </div>
  );
};

export default App;
