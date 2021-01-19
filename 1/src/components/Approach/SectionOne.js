import React from "react";
//Svg
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";

function SectionOne() {
  return (
    <section className="Approach_one_page">
      <div className="Approach_one_container">
        <div className="Approach_one_row">
          <div className="Approach_one_text-column">
            <h2 className="Approach_one_text-columnHeader">What we do</h2>
            <div className="btn-row">
              <Link className="btn-row_a" to="/services">
                Our Services <RightArrow />
              </Link>
            </div>
          </div>

          <div className="Approach_one_text-column_Two">
            <h3 className="Approach_one_text-columnHeader_Two">
              Travel experiences
            </h3>
            <p className="Approach_Paragraph">
              Travel is one of life's greatest pleasures. And we want each
              generation to be able to experience that joy.
            </p>
            <h3 className="Approach_one_text-columnHeader_Two">
              Inspirational Journeys
            </h3>
            <p className="Approach_Paragraph">
              By prioritizing people, we develop outstanding travel plans that
              amplify your dream’s reach, breed customer loyalty and drive
              business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
