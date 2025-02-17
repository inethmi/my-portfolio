import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      {/* Photo Container (Left Side) */}
      <div className="photo-container">
        <img
          src="/inuri.jpg" 
          alt="Inuri Ediriveera"
        />
      </div>

      {/* About Details (Right Side) */}
      <div className="about-details">
        <h2>About Me</h2>
        <h4>
          A Passionate Developer <br /> Who Loves to Code
        </h4>

        <p>
          <strong>Name:</strong> Inuri Ediriveera
        </p>
        <p>
          <strong>Birthday:</strong> 24 May 2000
        </p>
        <p>
          <strong>Age:</strong> 24 years
        </p>
        <p>
          <strong>Degree:</strong> Bsc Hons in Software Engineering (Undergraduate) SLIIT
        </p>
        <p>
          <strong>Languages:</strong> English, Sinhala
        </p>
      </div>
    </section>
  );
};

export default AboutMe;