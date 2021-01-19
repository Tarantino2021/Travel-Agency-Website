import React, { useState } from "react";
//data
import {
  accordionInfosOne,
  accordionInfosTwo,
  accordionInfosTree,
} from "../../utils/data";
//components
import Accordion from "../Services/accordion";

function SectionTwo() {
  const [active, setActive] = useState(null);

  return (
    <section className="Services_one_page">
      <div className="Services_one_container">
        <div className="Services_one_accordionOne">
          <h3 className="Services_one_accordionOne_Header">Strategy</h3>
          {accordionInfosOne.map((info, index) => (
            <Accordion
              key={index}
              info={info}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
        <div className="Services_one_accordionTwo">
          <h3 className="Services_one_accordionTwo_Header">
            Travel Experience
          </h3>
          {accordionInfosTwo.map((info, index) => (
            <Accordion
              key={index}
              info={info}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
        <div className="Services_one_accordionTree">
          <h3 className="Services_one_accordionTree_Header">Planning</h3>
          {accordionInfosTree.map((info, index) => (
            <Accordion
              key={index}
              info={info}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
