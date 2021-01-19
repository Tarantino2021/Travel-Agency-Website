import React from "react";
//Svg
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

function SectionThree() {
  return (
    <section className="Approach_Tree_page">
      <div className="Approach_Tree_container">
        <div className="Approach_Tree_row">
          <div className="Approach_Tree_text-column">
            <h2 className="Approach_Tree_text-columnHeader">How we do it</h2>
            <div className="btn-row">
              <a className="btn-row_a" href="/">
                About us
                <RightArrow />
              </a>
            </div>
          </div>

          <div className="Approach_Tree_text-column_Two">
            <p className="Approach_Tree_Paragraph">
              Humans are all emotional, intuitive beings, despite their best
              efforts to be rational. In the end, a travel is definied by
              individuals, not companies, agents or so called general public.
              Each person creates his or her own version of the travel plan.
            </p>

            <p className="Approach_Tree_Paragraph">
              Travel is all about freedom. So it makes sense that planning and
              booking your trip should be simple, not a chore.And once you know
              when and where you’re going, book in just a few quick steps,
              whether on our app or website -- both of which are available in
              more than 30 languages.
            </p>
            <p className="Approach_Tree_Paragraph">
              In other words, a travel agency is not what you say it is. It’s
              what they say it is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
