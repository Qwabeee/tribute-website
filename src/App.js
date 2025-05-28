import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <div className="App">

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="team">
        <Team />
      </section>

      <BackToTop />
    </div>
  );
};

export default App;
