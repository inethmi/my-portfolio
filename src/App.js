import React from "react";
import GeometricFigures from "./components/GeometricFigures";
import MiddleSection from "./components/MiddleSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ position: "relative" }}>
      {/* GeometricFigures Component */}
      <GeometricFigures />

      {/* MiddleSection Component */}
      <MiddleSection />

      {/* Navbar Component */}
      <Navbar />
    </div>
  );
}

export default App;
