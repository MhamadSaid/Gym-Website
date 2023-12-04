import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Plan from "./components/Plan";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Home />
      <About />
      <Services />
      <Plan />
      <Gallery />
      <Contact />
      <Footer />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
