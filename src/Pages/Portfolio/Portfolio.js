import React from "react";
import projectImg1 from "../../images/material/projec1_img1.png";
import projectImg2 from "../../images/material/project2_img1.png";
import projectImg3 from "../../images/material/project3_img1.png";

const Portfolio = ({ project }) => {
  console.log(project);
  const {
    _id,
    project_name,
    project_img1,
    project_img2,
    dec,
    live_link,
    github_server,
    github_clint,
    shortDec,
  } = project;

  const explore = (id) => {
    console.log(id);
  };
  return (
    <div class="card card-compact bg-base-100 shadow-xl  ">
      <figure class=" w-full h-64  bg-red-100 relative">
        <div
          class="  absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${project_img1})` }}
        ></div>
        <div class="opacity-0 hover:opacity-100 duration-1000 absolute inset-0 z-10 flex justify-center items-center text-6xl text-black font-semibold bg-opacity-50 bg-white">
          <button onClick={() => explore(_id)} class="btn btn-primary btn-xl">
            Explore
          </button>
        </div>
        {/* <img src={project_img1} alt="Shoes" /> */}
      </figure>
      <div class="card-body">
        <h2 class="card-title">{project_name}</h2>
        <div className="text-left ml-2 mb-5">{shortDec}</div>
        <div class="card-actions justify-center gap-x-5">
          <a
            href={live_link}
            className="btn btn-sm btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
          <a
            href={github_clint}
            className="btn btn-sm btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Clint
          </a>
          {github_server ? (
            <>
              <a
                href={github_server}
                className="btn btn-sm btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Server
              </a>
            </>
          ) : (
            ""
          )}
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
