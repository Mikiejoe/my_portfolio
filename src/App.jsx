import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
