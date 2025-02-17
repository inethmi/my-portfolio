import React, { useState, useEffect } from "react";
import "./Navbar.css"; 

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delay for 1 second

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <nav className={`navbar ${isVisible ? "visible" : ""}`}>
      <ul className="nav-links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
