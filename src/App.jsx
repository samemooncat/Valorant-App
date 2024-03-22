import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutesMenu from "./components/RoutesMenu";
import Home from "./screens/Home";
import Maps from "./screens/Maps";

function App() {
  return (
    <div className="App">
      <Router>
        <RoutesMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapas" element={<Maps />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
