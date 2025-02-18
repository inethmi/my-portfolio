import React from "react";
import GeometricFigures from "./components/GeometricFigures";
import MiddleSection from "./components/MiddleSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import StatsSection from "./components/StatsSection"; 
import SkillsSection from "./components/SkillsSection";


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

      {/* StatsSection Component */}
      <StatsSection />

      {/* SkillsSection Component */}
      <SkillsSection />

    </div>
  );
}

export default App;