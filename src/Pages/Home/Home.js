import React from "react";
import img1 from "../../images/profile/333.png";

const Home = () => {
  return (
    <div className="bg-base-200 ">
      <div id="home" className="h-screen lg:container mx-auto lg:rounded-lg">
        <div className="flex justify-center items-center h-full">
          <div>
            <div>
              <h1 className="text-5xl text-neutral ">MD. ABDUR RAZZAK</h1>
              <h1 className="text-primary text-7xl font-bold hover:text-blue-400 transition-colors">
                FRONT END WEB DEVELOPER
              </h1>

              <p className="lg:w-3/5 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                porro itaque magni, adipisci veritatis, eum eius sunt excepturi
                exercitationem commodi dolorum reiciendis accusamus fugiat.
                Nostrum, accusamus. Numquam, veritatis nisi? Nostrum doloribus
                dignissimos corrupti esse alias fugit aspernatur dolorum officia
                possimus. Deserunt sit optio quo dolores adipisci soluta
                praesentium autem vitae in. Vel voluptatem ut molestiae iusto
                dolorum rerum itaque nihil.
              </p>
            </div>
            <button className="btn btn-primary">
              <a
                href="https://drive.google.com/uc?export=download&id=1fW05sXluoe-H_KpdQtpABA3fTyfuPJ2B"
                download
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
