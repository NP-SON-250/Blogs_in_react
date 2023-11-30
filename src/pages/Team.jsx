import HeroPage from "../components/HeroPage";
import { useState } from "react";
import video1 from "../Images/About.jpeg";
import "../components/style/about.css";
export default function Team() {
  const [paragraphy, setParagraphy] = useState(
    `A mission statement is a short summary of an organization’s core purpose, focus, and aims. This usually includes a brief description of what the organization does and its key objectives.`
  );

  const handleMission = () => {
    setParagraphy(
      `A mission statement is a short summary of an organization’s core purpose, focus, and aims. This usually includes a brief description of what the organization does and its key objectives.`
    );
  };
  const handleVision = () => {
    setParagraphy(
      `A vision statement is a short description of an organization’s aspirations and the wider impact it aims to create. It should be a guiding beacon to everyone within the organization and something which underpins internal decision-making and determines the intended direction of the organization.`
    );
  };
  const handleValue = () => {
    setParagraphy(
      `Everything we do – from our Conferences to our TED Talks to the projects sparked by The Audacious Project, from the global TEDx community to the TED-Ed lesson series – is driven by this goal: How can we best spread great ideas?`
    );
  };

  return (
    <>
      <HeroPage title={"About Me"} />

      <div className="about-section container">
        <div className="about-row">
          <div className="about-video">
            <div className="play-btn">
              <span className="Play-icon">
                <iconify-icon icon="fe:play"></iconify-icon>
              </span>
            </div>
            <img src={video1} alt="our services" />
          </div>
          <div className="about-info">
            <div className="about-heading">
              <p className="sub-heading">Sandra<span className="span"> -Her</span>Majesty.</p>
              <h2>We give you the best articles you want.</h2>
              <p className="about-desc">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
            <div className="tabulation">
              <ul>
                <li onClick={handleMission}>Our Mission</li>
                <li onClick={handleVision}>Our Vision</li>
                <li onClick={handleValue}>Our Value</li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane">
                <p>{paragraphy}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimony-section">
          <div className="testimony-row">
            <div className="testimony-title">
              <span class="sub-heading">Testimonial</span>
              <h2 class="">Happy Clients</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
