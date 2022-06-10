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
    <div id="portfolio" className="lg:container mx-auto pt-20 mt-10">
      <h1 className="w-full text-center">
        This is portfolios : {projects.length}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Portfolio key={project._id} project={project}></Portfolio>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
