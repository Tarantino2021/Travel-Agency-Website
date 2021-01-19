import React from "react";
import headshot from "../../assets/headshot.jpg";

function SectionOne() {
  return (
    <div className="about_page">
      <div className="page_container">
        <div className="About_column">
          <h2 className="About_columnh2">
            Once upon a<br />
            time in <br /> <strike>Hollywood</strike> <br /> the World
          </h2>
        </div>
        <div className="About_columnTwo">
          <p className="About_columnTwoP">
            Travel was created by Jim Sellzer, an entrepreneur who loved
            traveling the world and exploring each corner of our beautiful
            planet.
          </p>
          <p className="About_columnTwoP">
            When we started in 2015, we set out to do things differently. We
            wanted to show all flight options in one place, creating a simple
            alternative to the confusing sites that make travel feel like hard
            work.
          </p>
          <p className="About_columnTwoP">
            Travel was born in 2015 from the ambition to create a agency capable
            of providing people with options to plan out their trip in the m,ost
            detailed way possible without the husttle and trouble.
          </p>
          <img className="About_columnTwoIMG" src={headshot} />
          <figcaption className="about_columntTwo_caption">
            Jim Sellzer
            <br />
            <span className="about_columntTwo_caption_span">Founder</span>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
