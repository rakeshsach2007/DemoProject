import React from "react";
import Users from "./Users";
import Img from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {" "}
              Let's Explore <br /> Three-Dimensional Visually{" "}
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              VR will soon become our new norm but how does that affect you? Well, it has the potential to change education, businesses, medical advancements, and how you view the world.
            </p>

            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn">Get it now</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#explore"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>

          <div>
            <img
              data-aos="fade-up"
              data-aos-delay="800"
              src={Img}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
