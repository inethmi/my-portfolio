import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./MiddleSection.css";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const MiddleSection = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls white box visibility
  const [showTitle, setShowTitle] = useState(false); // Controls typewriting effect for title
  const [showDescription, setShowDescription] = useState(false); // Controls visibility of the description

  useEffect(() => {
    // Show the white box and its contents after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Start the typewriting effect for the title after the white box is visible
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 2000); // 1 second after the white box appears

    // Show the description after the typewriter effect finishes
    const descriptionTimer = setTimeout(() => {
      setShowDescription(true);
    }, 4000); // 2 seconds after the typewriter effect starts

    return () => {
      clearTimeout(timer);
      clearTimeout(titleTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

  return (
    <div className={`middle-section ${isVisible ? "fade-in" : ""}`}>
      <div className="white-box">
        {/* Name */}
        <h1 className="name">HELLO</h1>

        {/* Title with typewriting effect */}
        <h2 className="title">
          {showTitle && (
            <Typewriter
              words={["I'M INURI EDIRIWEERA"]}
              loop={1}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          )}
        </h2>

        {/* Description fades in after the typewriting effect */}
        {showDescription && (
          <p className="description">Undergraduate At SLIIT</p>
        )}

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://facebook.com/nethmi.ediriweera.92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com/@Celebrateitwithus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/inuri-ediriweera-244847202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/inu_ediriweera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/inethmi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        
        <a
          href="/cv.pdf"
          className="cv-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default MiddleSection;
