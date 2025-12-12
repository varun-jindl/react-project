import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
const [scrolled, setScrolled] = useState(false);
const [mobileMenu, setMobileMenu] = useState(false);
const [dropdown, setDropdown] = useState(null)


useEffect(() => {
const addScroll = () => {
  setScrolled(window.scrollY > 60);
}

window.addEventListener('scroll', addScroll)

const removeScroll = () => {
  window.removeEventListener('scroll', addScroll)
}

return removeScroll;
},[])

useEffect(() => {
  if(mobileMenu){
    document.body.style.overflow = 'hidden';
  }
  else{
    document.body.style.overflow = 'unset';
  }
},[mobileMenu])

const toggleDropdown = (index) => {
setDropdown(dropdown == index ? null : index)
}

  const menuItems = [
    {
      title: 'Services',
      path: '/services',
      submenu: [
        { title: 'Financial Planning', path: '/financial-planning' },
        { title: 'Investment Management', path: '/investment-management' },
        { title: 'Insurance & Risk Management', path: '/insurance-risk-management' }
      ]
    },
    {
      title: 'Blog',
      path: '/blog',
      submenu: [
        { title: 'Blog Post', path: '/blog/post' }
      ]
    }
  ];

  return (
    <>
      <div 
        className={`overlay ${mobileMenu ? 'overlayActive' : ''}`}
        onClick={() => setMobileMenu(false)}
      />

      <div className="headerWrapper">
        <header className={`header ${scrolled ? 'headerScrolled' : ''}`}>
          <div className="container">
            <div className="headerInner">
            
              <div className="logo">
                <Link to="/">
                  <img 
                    src="https://22060013.hs-sites.com/hs-fs/hubfs/Depth/Images/Header%20Logo.png" 
                    alt="Site Logo"
                    loading='lazy'
                  />
                </Link>
              </div>


              <nav className="navDesktop">
                <ul className="navList">
                  {menuItems.map((item, index) => (
                    <li key={index} className="navItem">
                      <Link to={item.path} className="navLink">
                        {item.title}
                        {item.submenu && (
                          <ChevronDown className="chevron" size={16} />
                        )}
                      </Link>
                      {item.submenu && (
                        <ul className="dropdown">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="dropdownItem">
                              <Link to={subItem.path} className="dropdownLink">
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                <Link to="#" className="primaryButton button">
                  <span>Get In Touch</span>
                  <span className="buttonIcon">
                    <ArrowUpRight className="iconInitial" size={20} />
                    <ArrowUpRight className="iconHover" size={20} />
                  </span>
                </Link>
              </nav>


              <button 
                className="mobileTrigger"
                onClick={() => setMobileMenu(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobileNav ${mobileMenu ? 'mobileNavOpen' : ''}`}>
        <div className="mobileNavHeader">
          <div className="mobileNavLogo">
            <Link to="/">
              <img 
                src="https://22060013.hs-sites.com/hs-fs/hubfs/Depth/Images/Header%20Logo.png" 
                alt="Site Logo"
                loading='lazy'
              />
            </Link>
          </div>
          <button 
            className="mobileClose"
            onClick={() => setMobileMenu(false)}
          >
            <X size={28} />
          </button>
        </div>

        <ul className="mobileNavList">
          {menuItems.map((item, index) => (
            <li key={index} className="mobileNavItem">
              <Link 
                to={item.path} 
                className={`mobileNavLink ${dropdown === index ? 'mobileNavLinkActive' : ''}`}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    toggleDropdown(index);
                  }
                }}
              >
                {item.title}
                {item.submenu && (
                  <ChevronDown 
                    size={20} 
                    style={{
                      transform: dropdown === index ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                )}
              </Link>
              {item.submenu && (
                <div className={`mobileDropdown ${dropdown === index ? 'mobileDropdownOpen' : ''}`}>
                  <ul className="mobileDropdownList">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="mobileDropdownItem">
                        <Link 
                          to={subItem.path} 
                          className="mobileDropdownLink"
                          onClick={() => setMobileMenu(false)}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Link 
          to="#" 
          className="primaryButton button mobileButton"
          onClick={() => setMobileMenu(false)}
        >
          <span>Get In Touch</span>
          <span className="buttonIcon">
            <ArrowUpRight className="iconInitial" size={20} />
            <ArrowUpRight className="iconHover" size={20} />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Navigation;