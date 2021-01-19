import React from "react";
import { caseStudies } from "../../utils/data";
import { Link } from "react-router-dom";

function Cases() {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="Cases_row">
          {caseStudies.map((caseItem) => (
            <>
              <Link className="cases_LINK" to={caseItem.path}>
                <div className="case" key={caseItem.id}>
                  <div className="case-details">
                    <span>{caseItem.subtitle}</span>
                    <h2>{caseItem.title}</h2>
                  </div>
                  <div className="case-image">
                    <img src={caseItem.img} alt={caseItem.title} />
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
