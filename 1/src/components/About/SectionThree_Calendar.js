import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

function SectionThree_Calendar() {
  const [firstDate, setFirstDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(addDays(new Date(), 7));

  const ranges = {
    startDate: firstDate,
    endDate: lastDate,
    key: "selection",
  };

  const handleCalendar = (DateRanges) => {
    setFirstDate(DateRanges.selection.firstDate);
    setLastDate(DateRanges.selection.lastDate);
  };

  return (
    <div className="SectionThree_Calendar">
      <DateRangePicker ranges={[ranges]} onChange={handleCalendar} />
      <h2> Number Of Travelers</h2>
      <input min={0} defaultValue={1} type="number" />
      <button>Search </button>
    </div>
  );
}

export default SectionThree_Calendar;
