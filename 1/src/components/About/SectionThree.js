import React, { useState } from "react";
import { cardInfo } from "../../utils/data";
import SectionThreeCard from "./SectionThree_Card";
import SectionThree_Calendar from "./SectionThree_Calendar";

function SectionThree() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="brands_page">
      <div className="brands_container">
        <div className="brands_header">
          <h2 className="brands_header_text">Destinations</h2>
        </div>

        <div className="brands_items">
          {cardInfo.map((info) => (
            <SectionThreeCard
              img={info.img}
              title={info.title}
              text={info.text}
              price={info.price}
            />
          ))}
        </div>
      </div>
      <div className="brands_search">
        {showCalendar && <SectionThree_Calendar />}
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="brands_searchBtn"
        >
          {showCalendar ? "Hide" : "Search Dates"}
        </button>
      </div>
    </div>
  );
}

export default SectionThree;
