import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage.js";
import NextPage from "./NextPage.js";
import PositiveResult from "./PositiveResult";
import NegativeResult from "./NegativeResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/positive" element={<PositiveResult />} />
        <Route path="/negative" element={<NegativeResult />} />
      </Routes>
    </Router>
  );
}

export default App;