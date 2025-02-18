import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      {/* Photo Container (Left Side) */}
      <div className="photo-container">
        <img src={`${process.env.PUBLIC_URL}/inuri.jpg`} alt="Inuri Ediriweera" />
      </div>

      {/* About Details (Right Side) */}
      <div className="about-details">
        <h2>About Me</h2>
        <h4>
          A Passionate Developer <br /> Who Loves to Code
        </h4>

        <p>
          <strong>Name:</strong> Inuri Ediriweera
        </p>
        <p>
          <strong>Birthday:</strong> 24 May 2000
        </p>
        <p>
          <strong>Age:</strong> 25 years
        </p>
        <p>
          <strong>Degree:</strong> Bsc(Hons) in Information Technology (Undergraduate) SLIIT
        </p>
        <p>
          <strong>Languages:</strong> English, Sinhala
        </p>
      </div>
    </section>
  );
};

export default AboutMe;