import React from "react";

function SectionThree_Card({ img, title, text, price }) {
  return (
    <div className="SectionThree_Card">
      <img src={img} />
      <div className="SectionThree_Card_info">
        <h2>{title}</h2>
        <h4>{text}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default SectionThree_Card;
