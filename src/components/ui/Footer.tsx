import React from 'react';
import { socialLinks } from '@/data/socialLinks';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">Austin Luk</div>
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <div className="social-links">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label={social.ariaLabel}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Austin Luk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
