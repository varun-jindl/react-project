import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="heroBannerWrapper">
      <div className="bannerBackgroundCollection">
        <div className="bannerBackgroundVariant"></div>
        <div className="bannerBackgroundOverlay"></div>
      </div>

      <div className="container">
        <div className="bannerContentColumn customWidth">
          <div className="bannerColumnInner">
            <div className="eyebrowText">
              Plan Your Financial Future
            </div>

            <h1 className="bannerTitleTag">
              Elevating dreams into financial reality
            </h1>

            <div className="bannerDescription">
              <p>
                Enabling Your Financial Growth through Expert Guidance delivering 
                smart wealth strategies uniquely designed for you
              </p>
            </div>

            <Link 
                      to="#" 
                      className="primaryButton button">
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

export default Banner;