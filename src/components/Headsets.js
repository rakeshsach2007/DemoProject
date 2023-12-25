import React from "react";
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Mixed Reality Headsets
        </h2>

        <div className="grid gap-y-32 lg:grid-cols-2 lg:gap-9 mt-32 sm:mt-0">
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            <img src={Headset1} alt="headset" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="text-xl font-semibold mb-2">Meta-verse</h4>
              <p className="text-[15px]">
                Anyone who has created a digital ‘Sim’ of themselves in the
                gaming world will already be halfway towards understanding the
                concept of the Meta-verse. This is a completely different type
                of digital realm where users can fully immerse themselves into
                virtual surroundings.
              </p>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1300"
          >
            <img src={Headset2} alt="headset" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="text-xl font-semibold mb-2">AIoT</h4>
              <p className="text-[15px]">
                Artificial intelligence of things (AIoT) is the combination of
                artificial intelligence (AI) technologies and the internet of
                things (IoT) infrastructure. AIoT's goal is to create more
                efficient IoT operations, improve human-machine interactions and
                enhance data management and analytics.
              </p>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1600"
          >
            <img src={Headset3} alt="headset" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="text-sm font-semibold mb-2">HoloLens</h4>
              <p className="text-[15px]">
                Using multiple sensors, advanced optics, and holographic
                processing that melds seamlessly with its environment, Holo-Lens
                can be used to display information, blend with the real world,
                or even simulate a virtual world.
              </p>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <img src={Headset4} alt="headset" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="text-xl font-semibold mb-2">TPCAST</h4>
              <p className="text-[15px]">
              The TPCast wireless adapter has been around for awhile now, and it's proven to provide quality wireless VR. If you have the standard Vive (it doesn't work with Pro) and don't have an extra PCIe slot in your PC, this is a good option.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
