import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialVimeo } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/approach" exact>
                  Approach
                </Link>
              </li>
              <li>
                <Link to="/services" exact>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about-us" exact>
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>Get in touch</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>135 Sunset Street</li>
                <li>Los Angeles, CA</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>818-442-1465</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Follow</li>
                <div className="social_icons">
                  <TiSocialFacebook className="icon" />
                  <TiSocialVimeo className="icon" />
                  <TiSocialPinterest className="icon" />
                  <TiSocialTwitter className="icon" />
                  <TiSocialYoutube className="icon" />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
