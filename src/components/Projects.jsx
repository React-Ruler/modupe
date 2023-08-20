import React from "react";

const Projects = () => {
  return (
    <section id={`projects`} className={`section is-small`}>
      <div className={`container`}>
        <h1
          className={`title heading__text is-size-1-desktop is-size-2-mobile`}>
          Projects
        </h1>
        <div className={`container`}>
          <nav className={`level is-mobile`}>
            <div className={`level-item has-text-centered`}>
              <div>
                <p className={`heading`}>Projects</p>
                <p className={`title`}>3,456</p>
              </div>
            </div>
            <div className={`level-item has-text-centered`}>
              <div>
                <p className={`heading`}>Websites</p>
                <p className={`title`}>560</p>
              </div>
            </div>
            <div className={`level-item has-text-centered`}>
              <div>
                <p className={`heading`}>Clients</p>
                <p className={`title`}>456</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Projects;
