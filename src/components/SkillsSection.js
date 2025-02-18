import React from "react";
import "./SkillsSection.css"; // Create a CSS file for styling

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* Heading */}
        <h2>I Work Hard to Improve My Skills Regularly</h2>

        {/* Skills List */}
        <div className="skills-list">
          <div className="skill">
            <h3>HTML</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <h3>CSS</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <h3>JavaScript</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill">
            <h3>React</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "75%" }}></div>
            </div>
          </div>

          <div className="skill">
            <h3>ASP.NET Core</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "55%" }}></div>
            </div>
          </div>

          <div className="skill">
            <h3>C#</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "50%" }}></div>
            </div>
          </div>

          <div className="skill">
            <h3>Git</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "60%" }}></div>
            </div>
          </div>


          <div className="skill">
            <h3>SQL</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "50%" }}></div>
            </div>
          </div>

          <div className="skill">
            <h3>iQuery / Bootstrap</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "50%" }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;