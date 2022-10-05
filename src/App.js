import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
import Test from "./routers/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
