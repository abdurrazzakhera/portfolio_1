import React from "react";
import Home from "./Home";
import Portfolios from "../Portfolio/Portfolios";
import Contact from "./Contactme";
import About from "./About";

const MainHome = () => {
  return (
    <div>
      <Home></Home>
      <Portfolios></Portfolios>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default MainHome;
