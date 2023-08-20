import React from "react";
import {
  Hero,
  Navbar,
  About,
  Services,
  Portfolio,
  Projects,
  Reviews,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
