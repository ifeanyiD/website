import React from "react";
import "../component/style/about.scss";
import Mission from "../utils/pix/mission.png"


const About = () => {
  return (
    <div className="about-page">
      <section className="hero">
        <div className="hero-text">
          <h1>About Me</h1>
          <p>
            Fullstack Web Developer | Software Engineer with strong fundamentals | Data Scientist
          </p>
        </div>
        <div className="hero-image">
        </div>
      </section>

      <section className="mission">
        <div className="mission-image">
            <img src={Mission} alt="About team" />
        </div>
        <div className="mission-text">
          <h2>My Mission</h2>
          <p>
           As a web developer, my mission is to deliver seamless, scalable, and visually engaging applications that work across all devices. I focus on writing clean, maintainable code and integrating the right technologies to create web solutions that not only solve problems but also provide lasting value to your business.
          </p>
        </div>
      </section>
    
      <section className="story">
        <div className="story-text">
          <h2>My Story</h2>
          <p>
            With 3+ years in web development, I specialize in creating responsive, secure, and scalable applications. I prioritize clean coding practices and effective UI/UX collaboration to deliver solutions that work seamlessly across devices and drive long-term success.
          </p>
        </div>
        <div className="story-image">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2c3e50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
                <line x1="2" y1="20" x2="22" y2="20"></line>
  
                <polyline points="10 9 7 12 10 15"></polyline>
                <polyline points="14 9 17 12 14 15"></polyline>

                <polygon points="12,2 13.5,6 18,6.5 14.5,9.5 15.5,14 12,11.5 8.5,14 9.5,9.5 6,6.5 10.5,6"></polygon>
            </svg>

        </div>
      </section>

    </div>
  );
};

export default About;
