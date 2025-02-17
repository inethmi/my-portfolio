import React from "react";
import GeometricFigures from "./components/GeometricFigures";
import MiddleSection from "./components/MiddleSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div style={{ position: "relative"}}>
      {/* GeometricFigures Component */}
      <GeometricFigures />

      {/* MiddleSection Component */}
      <MiddleSection />

      {/* Navbar Component */}
      <Navbar />

      {/* AboutMe Component */}
      <AboutMe />
    </div>
  );
}

export default App;