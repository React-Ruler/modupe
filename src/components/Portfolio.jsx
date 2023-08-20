import React from "react";
import { portfolio_1, portfolio_2, portfolio_3, portfolio_4 } from "../assets";
const Portfolio = () => {
  return (
    <section id={`portfolio`} className={`section is-small`}>
      <div className={`container`}>
        <h1 className={`title heading__text is-size-1-desktop is-size-2-mobile`}>Portfolio</h1>
        <div className={`columns is-centered has-text-centered`}>
          <div className={`column is-two-fifths`}>
            <figure className={`image is-5by4`}>
              <img className={`portfolio__radius`} src={portfolio_1} alt="" />
            </figure>
          </div>
          <div className={`column is-two-fifths`}>
            <figure className={`image is-5by4`}>
              <img className={`portfolio__radius`} src={portfolio_2} alt="" />
            </figure>
          </div>
        </div>
        <div className={`columns is-centered has-text-centered`}>
          <div className={`column is-two-fifths`}>
            <figure className={`image is-5by4`}>
              <img className={`portfolio__radius`} src={portfolio_3} alt="" />
            </figure>
          </div>
          <div className={`column is-two-fifths`}>
            <figure className={`image is-5by4`}>
              <img className={`portfolio__radius`} src={portfolio_4} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
