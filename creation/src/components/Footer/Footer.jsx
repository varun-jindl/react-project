import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy', path: '/privacy-policy' },
    { name: 'Terms and conditions', path: '/term-and-condition' }
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Youtube, url: '#', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div className="container">
          <div className="footerColumns">
            <div className="footerColumnHolder footerColumn1">
              <div className="footerRow footerRowLogo">
                <div className="footerLogoWrapper">
                  <Link to="/">
                    <img 
                      src="https://22060013.hs-sites.com/hs-fs/hubfs/Depth/Images/Header%20Logo.png" 
                      alt="Site Logo"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="footerColumnHolder footerColumn2">
              <div className="footerRow footerRowText">
                <div className="footerTextWrapper">
                  <h6 className="footerHeading">Our address</h6>
                </div>
              </div>
              <div className="footerRow footerRowRichText">
                <div className="footerContentWrapper">
                  <p>65 Parliament Street, Lutyens Delhi 110043</p>
                </div>
              </div>
            </div>

            <div className="footerColumnHolder footerColumn3">
              <div className="footerRow footerRowText">
                <div className="footerTextWrapper">
                  <h6 className="footerHeading">Contact Us</h6>
                </div>
              </div>
              <div className="footerRow footerRowRichText">
                <div className="footerContentWrapper">
                  <p>
                    <a href="mailto:reach@info.com">reach@info.com</a>
                  </p>
                  <p>
                    <a href="tel:+011-22334455">+(011) 223 - 344 - 55</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="footerColumnHolder footerColumn4">
              <div className="footerRow footerRowText">
                <div className="footerTextWrapper">
                  <h6 className="footerHeading">Our Social</h6>
                </div>
              </div>
              <div className="footerRow footerRowSocialShare">
                <div className="footerSocialShareWrapper">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div key={index} className="footerSocialItem">
                        <a 
                          href={social.url} 
                          target="_blank"
                        >
                          <Icon size={20} />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="footerBottomSection">
            <div className="footerCopyrightText">
              <span>Copyright © {currentYear} Site, All Rights Reserved.</span>
            </div>

            <div className="footerCopyrightMenu">
              <ul>
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;