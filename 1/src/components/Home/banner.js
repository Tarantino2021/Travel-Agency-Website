import React from "react";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>We’re the travel agency</span>
            </div>
            <div className="line">
              <span>that creates memories</span>
            </div>
          </h2>
          <div className="btn-row">
            <Link to="/about-us">
              More about us <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
