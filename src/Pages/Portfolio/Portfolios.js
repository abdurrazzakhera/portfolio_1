import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";

const Portfolios = () => {
  const [projects, setPorjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setPorjects(data);
      });
  }, []);
  return (
    <div className="lg:container mx-auto">
      <h1>This is portfolios : {projects.length}</h1>
      <Portfolio></Portfolio>
    </div>
  );
};

export default Portfolios;
