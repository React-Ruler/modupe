import React from "react";
import { modupe } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id={`home`} className={`hero is-small`}>
      <div className={`hero-body`}>
        <div className={`has-text-centered`}>
          <figure className={`image is-128x128 mb-4 is-inline-block`}>
            <img src={modupe} className={`is-rounded`} alt="modupe" />
          </figure>

          <p className={`title`}>Hello</p>
          <p className={`subtitle`}>
            I'm <span className={`modupe__gradient`}>Modupe</span>
          </p>
          <p className={`subtitle`}>
            a <span className={`modupe__gradient`}>React Developer</span> with
            5+ years of experience in the tech industry. <br />I specialize in
            developing modern, responsive, and user-friendly web applications.
          </p>

          <div>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className={`icon__spacing`} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className={`icon__spacing`} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className={`icon__spacing`} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} className={`icon__spacing`} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
