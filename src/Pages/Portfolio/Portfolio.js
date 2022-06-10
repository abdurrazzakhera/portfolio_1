import React from "react";
import projectImg1 from "../../images/material/projec1_img1.png";
import projectImg2 from "../../images/material/project2_img1.png";
import projectImg3 from "../../images/material/project3_img1.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      <div class="card card-compact bg-base-100 shadow-xl  ">
        <figure>
          <img src={projectImg1} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Bicycle GearWorld || </h2>
          <div className="text-left ml-2 mb-5">
            <ul className="grid grid-cols-1 gap-y-2 list-disc">
              <li>Use JavaScript React Latest version.</li>
              <li>React Router V6 use (latest Version).</li>
              <li>Implement latest Log in Method with Google.</li>
              <li>Protected Router Setup.</li>
              <li>Use mongodb crud operation.</li>
              <li>google firebase use for authentication.</li>
            </ul>
          </div>
          <div class="card-actions justify-center gap-x-5">
            <a
              href="https://manufacture-site-12.web.app/"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/abdurrazzakhera/bicycle_manufacture_clint"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Clint
            </a>
            <a
              href="https://github.com/abdurrazzakhera/bicycle_manufacture_server"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a>
          </div>
        </div>
      </div>
      <div class="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={projectImg2} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Gadget Mart || WereHouse</h2>
          <div className="text-left ml-2 mb-5">
            <ul className="grid grid-cols-1 gap-y-2 list-disc">
              <li>Use JavaScript React Latest version.</li>
              <li>React Router V6 use (latest Version).</li>
              <li>Implement latest Log in Method with Google.</li>
              <li>Protected Router Setup.</li>
              <li>Use mongodb crud operation.</li>
              <li>google firebase use for authentication.</li>
            </ul>
          </div>
          <div class="card-actions justify-center gap-x-5">
            <a
              href="https://werehouse-11.web.app/"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/abdurrazzakhera/gadget_mart_wereHouse_clint"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Clint
            </a>
            <a
              href="https://github.com/abdurrazzakhera/-gadget_mart_wereHouse_server"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a>
          </div>
        </div>
      </div>
      <div class="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={projectImg3} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">AR'H Photography.</h2>
          <div className="text-left ml-2 mb-5">
            <ul className="grid grid-cols-1 gap-y-2 list-disc">
              <li>Use JavaScript React Latest version.</li>
              <li>React Router V6 use (latest Version).</li>
              <li>Implement latest Log in Method with Google.</li>
              <li>Protected Router Setup.</li>
              <li>Use mongodb crud operation.</li>
              <li>google firebase use for authentication.</li>
            </ul>
          </div>
          <div class="card-actions justify-center gap-x-5">
            <a
              href="https://independent-service-prov-34e04.web.app/"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/abdurrazzakhera/single_servies_arHera_Creative"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Clint
            </a>
            {/* <a
              href="https://github.com/abdurrazzakhera/single_servies_arHera_Creative"
              className="btn btn-sm btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
/**https://i.ibb.co/z4KK2Fk/projec1-img1.png
https://i.ibb.co/bWkVXn2/projec1-img2.png
https://i.ibb.co/Xy5K83x/projec1-img3.png */
/*
https://i.ibb.co/z6vXHNv/project2-img1.png
https://i.ibb.co/Lv4fdyj/project2-img2.png
https://i.ibb.co/qszCXnG/project2-img3.png
*/
/*
https://i.ibb.co/4gg15LM/project3-img1.png
https://i.ibb.co/YLkn70x/project3-img2.png
https://i.ibb.co/sQdzgwD/project3-img3.png
*/
