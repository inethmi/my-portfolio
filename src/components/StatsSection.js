import React from "react";
import "./StatsSection.css"; // Create a CSS file for styling

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Stat 1: Years of Experience */}
        <div className="stat">
          <h2>1+</h2>
          <p>Years of Experience</p>
        </div>

        {/* Stat 2: Projects Completed */}
        <div className="stat">
          <h2>20+</h2>
          <p>Projects Completed</p>
        </div>

        {/* Stat 3: Happy Clients */}
        <div className="stat">
          <h2>10+</h2>
          <p>Happy Clients</p>
        </div>

        {/* Stat 4: Lines of Code */}
        <div className="stat">
          <h2>10K+</h2>
          <p>Lines of Code</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;