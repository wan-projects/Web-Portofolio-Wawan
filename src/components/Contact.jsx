import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="blob blob-1" style={{ opacity: 0.05 }} />
    <div className="blob blob-2" style={{ opacity: 0.05 }} />
    <div className="container">
      <div className="contact-inner fade-in-section">
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-desc">
          I'm a Data Scientist and AI/ML Engineer with hands-on experience
          across classical ML, deep learning, computer vision, NLP, and
          LLM/agentic AI systems. Open to full-time roles, research
          collaborations, and freelance projects — whether you have an
          opportunity, an idea, or just want to talk about data and AI, my inbox
          is always open!
        </p>
        <a
          href="mailto:wawn.1106@gmail.com"
          className="btn-primary"
          style={{ display: "inline-flex", margin: "0 auto" }}
        >
          <FaEnvelope size={15} /> Say Hello
        </a>
        <div className="contact-links">
          <a
            href="https://github.com/wan-projects"
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
            <FaEnvelope size={16} /> wawn.1106@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
