import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TiDownload, TiLocationArrow } from "react-icons/ti";

import Button from "./Button";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">

      {/* Centered container: horizontally & vertically center everything */}
      <div className="absolute inset-0 z-40 flex items-center justify-center">
            {/* eslint-disable-next-line tailwindcss/classnames-order */}
            <div className="flex flex-col items-center justify-center gap-4 px-5 sm:px-10 text-center">
          <h1 className="special-font hero-heading mx-auto text-blue-100">
            HI I&apos;m <b>N</b>at<span className="text-cyan-300">e</span>
          </h1>

          <div className="flex items-center justify-center gap-3">
            <p className="mb-5 max-w-md font-robert-regular text-blue-100">
              <b>F</b>ounder & <b>D</b>eveloper <br /> Specialize in <b>W</b>eb
              <b>D</b>evelopment
            </p>

            {/* Location icon with hover tooltip */}
                {/* eslint-disable-next-line tailwindcss/classnames-order */}
                <div className="relative group">
                  {/* eslint-disable-next-line tailwindcss/classnames-order */}
                  <TiLocationArrow className="size-6 text-blue-100 cursor-pointer" />
                  {/* eslint-disable-next-line tailwindcss/classnames-order */}
                  <div className="absolute left-1/2 -top-8 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 pointer-events-none transition-all group-hover:opacity-100">
                Ethiopia 
              </div>
            </div>
          </div>

          <Button
            id="download-resume"
            title="Download Resume"
            leftIcon={<TiDownload/>}
            containerClass="bg-blue-300 flex-center gap-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
