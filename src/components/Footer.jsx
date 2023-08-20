import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const developer = "https://www.onealombu.com";

  return (
    <section id={`footer`} className={`footer`}>
      <div className={`content has-text-centered`}>
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
        <p>
          <p className={`subtitle`}>
            <span className={`modupe__gradient`}>Modupe</span>
          </p>
          The source code is licensed. The website content is licensed by {".."}
          <a href={developer} target="_blank">
            O'Neal Ombu
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Footer;