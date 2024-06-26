import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import "../src/assests/styles.css";
import ScratchCardView from "./pages/ScratchCardView";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scratch-card" element={<ScratchCardView />} />
      </Routes>
    </Router>
  );
}
