import React from "react";
import "./footer.css";
const Footer = () => {
  const Links = Array.from({ length: 10 }, (_, i) => `Link ${i + 1}`);

  return (
    <div className="footer">
      <div className="footer-links">
        {Links.map((link, index) => (
          <a key={index} href="#">
            {link}
          </a>
        ))}
      </div>
      <div className="copyright">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
