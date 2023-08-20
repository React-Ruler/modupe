import React from "react";

const Navbar = () => {
  return (
    <header className={`section`}>
      <nav className={`navbar`} role="navigation" aria-label="main navigation">
        <div className={`navbar-brand`}>
          <a
            className={`navbar-item has-text-weight-semibold is-size-5`}
            href="#">
            <span className={`logo__gradient`}>Modupe</span>
          </a>

          <a
            role="button"
            className={`navbar-burger`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu`}>
          <div className={`navbar-end`}>
            <a className={`navbar-item`} href="#home">
              Home
            </a>
            <a className={`navbar-item`} href="#about">
              About
            </a>
            <a className={`navbar-item`} href="#services">
              Services
            </a>
            <a className={`navbar-item`} href="#portfolio">
              Portfolio
            </a>
            <a className={`navbar-item`} href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
