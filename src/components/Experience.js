import React from "react";
import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex flex-1 items-center space-x-6 lg:space-x-12">
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <img src={Img1} alt="experience" />
            </div>
            <div className="self-end" data-aos="fade-up">
              <img src={Img2} alt="experience" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center mt-6 lg:mt-0" data-aos="fade-left" data-aos-offset="400">
            <h2 className="text-3xl font-bold mb-6">
              New Experience In Playing Games
            </h2>
            <p className="font-secondary mb-6">
            VR is trending in the gaming industries that have got benefited from this immersive technology. There are the most successful implementer of cutting-edge VR gaming in the market. Many large-scale game development companies have jumped on the VR movement to transform the user experience.
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
