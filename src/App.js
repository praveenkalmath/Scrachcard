import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScratchCardView from "./ScratchCardView";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/scratch-card" element={<ScratchCardView />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
