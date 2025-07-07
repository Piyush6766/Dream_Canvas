import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
// import InspiringCreations from "../components/InspiringCreations";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Gallery />
      <Description />
      <Testimonials />
      <GenerateBtn />
      <Footer />

    </div>
  );
};

export default Home;
