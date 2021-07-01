import React from "react";
import Navigation from "./Navigation";
import Hero from "./HeroComponent";
import Intro from "./IntroComponent";

function LandingPage() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <Intro />
    </React.Fragment>
  );
}

export default LandingPage;
