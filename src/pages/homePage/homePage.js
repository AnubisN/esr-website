import React from "react";
import Achievement from "../../components/achievement/achievement.js";
import Footer from "../../components/footer/footer.js";
import GetInTouch from "../../components/getInTouch/getinTouch.js";
import { Portfolio } from "../../components/portFolio/portFolio.js";
import Services from "../../components/services/services.js";
import TestimonialSlider from "../../components/testimonialSlider/testimonialSlider.js";
import MainSection from "../../components/mainSection/mainSection.js";

function HomePage() {
  return (
    <>
      <MainSection />
      <Services />
      <Portfolio />
      <Achievement />
      <TestimonialSlider />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default HomePage;
