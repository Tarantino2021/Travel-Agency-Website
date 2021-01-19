import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

function SectionThree_Calendar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="SectionThree_Calendar">
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
      />
      <h2> Number Of Travelers</h2>
      <input
        className="SectionThree_Calendar_input"
        min={0}
        defaultValue={1}
        type="number"
      />
      <button className="SectionThree_Calendar_btn">Search </button>
    </div>
  );
}

export default SectionThree_Calendar;
