import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "aos/dist/aos.css";
import AOS from "aos";
import NavBar from "./components/NavBar/NavBar";

function App() {
 
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <div  className="w-screen bg-primary overflow-x-hidden-hidden ">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
