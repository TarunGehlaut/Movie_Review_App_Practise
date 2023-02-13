import React from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import "./style.scss";
const FooterComponent = () => {
  return (
    <footer className="footer">
      <ContentWrapper className="contentWrapper">
        <ul className="menuItems">
          <li className="menuItem">Terms of use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">About</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>

        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default FooterComponent;
