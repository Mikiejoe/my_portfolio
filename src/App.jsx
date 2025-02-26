import {  useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {
 
  return (
    <Router>
      <div  className="w-screen h-screen overflow-x-hidden bg-primary-bg">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
