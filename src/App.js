import React from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./styles.css";
import ScratchCardView from "./ScratchCardView";

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
