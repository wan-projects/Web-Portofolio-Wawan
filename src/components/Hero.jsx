import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.png";

const ROLES = ["AI Engineer", "ML Engineer", "Data Scientist", "Data Analyst"];

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timer;
    if (!deleting) {
      if (charIdx < target.length) {
        timer = setTimeout(() => {
          setDisplayed(target.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 110);
      } else {
        // pause at full word, then start deleting
        timer = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setDisplayed(target.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 55);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="home" className="hero-section">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I am 👋</p>
          <h1 className="hero-name">Wawan.</h1>
          <h2 className="hero-role">
            I am a <span className="role-typed">{displayed}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-bio">
            AI/ML Engineer and Data Scientist with{" "}
            <strong>hands-on experience across the modern AI ecosystem</strong>{" "}
            — spanning classical machine learning, deep learning, Agentic AI,
            RAG, and LLM-based application development. Technical foundation
            in <strong>Cloud Computing</strong> architecture, particularly
            Google Cloud Platform (GCP). Published research in{" "}
            <strong>IEEE Xplore</strong>{" "}
            and holds <strong>BNSP Associate Data Scientist</strong> and{" "}
            <strong>Certiport Data Analytics</strong> certifications.
            Graduated with a Bachelor's degree in Informatics from
            Universitas Nasional, GPA 3.92. Currently{" "}
            <strong>open to career opportunities</strong> as a Data Analyst,
            Data Scientist, AI/ML Engineer, or Cloud Engineer. Has a strong
            passion for leveraging data, AI technology, and cloud computing
            to build impactful solutions.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              Explore My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/wan-projects/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/wawan11/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="mailto:wawn.1106@gmail.com" className="social-btn">
              <FaEnvelope size={16} /> Email
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-glow" />
          <img src={profileImg} alt="Wawan" className="hero-photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;