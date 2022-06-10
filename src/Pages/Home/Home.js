import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const { text } = useTypewriter({
    words: [
      "HTML",
      "CSS3",
      "JAVASCRIPT",
      "REACT JS",
      "NODE JS",
      "EXPRESS JS",
      "MONGO DB",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,

    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="bg-base-200 ">
      <div id="home" className="h-screen lg:container mx-auto lg:rounded-lg">
        <div className="flex justify-center items-center h-full">
          <div>
            <div>
              <h1 className="text-5xl text-neutral ">MD. ABDUR RAZZAK</h1>
              <h1 className="text-primary text-7xl font-bold hover:text-blue-400 transition-colors">
                FRONT END WEB DEVELOPE
              </h1>
              <h2 className="lg:text-[30px]">
                {" "}
                Not just profession! Web Development is my passion. My love. I
                work with ,<br />
                <span className=" mt-6  font-bold h-32 ">
                  {text}
                  <Cursor cursorStyle="_" />
                </span>
              </h2>
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
