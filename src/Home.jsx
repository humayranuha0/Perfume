import React from "react";
import Hero from "./Hero";
import AboutUs from "./About";
import KeySection from "./Key";
import Features from "./Features";
import Testimonial from "./Testomonial";
import Faq from "./Faq";

const Home = ({ onAddToCart }) => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <KeySection />
      <Features onAddToCart={onAddToCart} />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
