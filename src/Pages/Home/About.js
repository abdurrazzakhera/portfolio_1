import React from "react";
import img1 from "../../images/profile/hira1.png";

const about = () => {
  return (
    <div id="about" className="h-screen mt-5">
      <div className="lg:container grid lg:grid-cols-12 gap-5 mx-auto">
        <div className="bg-base-200 col-span-7 flex flex-col justify-center items-center">
          <h1 className="text-4xl">About Me!</h1>
          <h2 className="text-2xl">
            I am a web developer with proficiency in front-end technologies like
            React, JavaScript, HTML, and CSS and familiarity with back-end
            technologies such as NodeJS and ExpressJS.
          </h2>
          <button className="btn btn-primary">Recent Project</button>
        </div>
        <div className=" col-span-5 p-1">
          {/* daisy ui card */}
          <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={img1} alt="Shoes" class="rounded-xl" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
