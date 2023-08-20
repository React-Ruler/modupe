import React from "react";

const About = () => {
  return (
    <section id={`about`} className={`section is-small`}>
      <div className={`container`}>
        <h1 className={`title heading__text is-size-1-desktop is-size-2-mobile`}>
          About
        </h1>
        <div className={`columns`}>
          <div className={`column`}>
            <p
              className={`subtitle is-size-6 has-text-weight-medium is-uppercase`}>
              <span className={`modupe__gradient .about__text`}>About</span> me
            </p>
            <div className={`columns`}>
              <div className={`column`}>
                <h2 className={`is-size-3 has-text-weight-bold`}>
                  React Developer
                  <br />
                  JavaScript Developer
                </h2>
                <div className={`mt-4`}>
                  <a className={`button btn is-size-6`}>Download Resume</a>
                </div>
              </div>

              <div className={`column`}>
                <p className={`subtitle is-size-6 has-text-weight-normal`}>
                  <span className={`modupe__gradient`}> Modupe</span> is a React
                  developer with over 5 years of experience. I'm passionate
                  about creating user-friendly and intuitive front-end
                  experiences. <br className={`is-hidden-desktop`} />
                  <br className={`is-hidden-desktop`} />I specialize in React
                  and React Native and have worked with multiple companies in
                  the past to create high-quality web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
