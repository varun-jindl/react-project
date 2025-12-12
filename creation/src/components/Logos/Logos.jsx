import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Logos.css";

const LogoSlider = () => {
  const logos = [
    { src: "/images/logoipsum-375.png", alt: "Logoipsum" },
    { src: "/images/logoipsum-391.png", alt: "Logoipsum" },
    { src: "/images/logoipsum-395.png", alt: "Logoipsum" },
    { src: "/images/logoipsum-402.png", alt: "Logoipsum" },
    { src: "/images/logoipsum-398.png", alt: "Logoipsum" },
  ];

  const infiniteLogos = [...logos, ...logos];

  return (
    <div className="logoSliderWrapper">
      <div className="logoSliderTopContentWrapper">
        <div className="container">
          <div className="topContent">
            <div className="eyebrowText">Our Partners</div>

            <h2 className="heading">Trusted by Leading Financial Innovators</h2>

            <p>
              We're proud to collaborate with a network of forward-thinking
              partners and institutions who share our vision for smarter, deeper
              financial growth. Their trust fuels our mission to deliver
              exceptional results across the finance ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="logoSliderMainContentWrapper">
        <div className="fullWidth">
          <div className="logoSliderMainContent">
            <div className="sliderTrack">
              {infiniteLogos.map((elem, index) => (
                <div key={`logo-${index}`} className="logoSlide">
                  <img src={elem.src} alt={elem.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="buttonWrap">
            <Link to="#" className="secondaryButton button">
              <span>Get In Touch</span>
              <span className="buttonIcon">
                <ArrowUpRight className="iconInitial" size={20} />
                <ArrowUpRight className="iconHover" size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
