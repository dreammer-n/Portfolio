import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import aboutVideo from "../assets/aboutImage.webm";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm text-white uppercase md:text-[10px]">
          About Me
        </p>
        <AnimatedTitle
          title="Foun<b>d</b>er and developer "
          containerClass="mt-10 !text-white text-center"
        />

        <div className="about-subtext">
          <p className="text-white">I specialize in creating detail oriented and fully functional websites</p>
          <p className="text-gray-500">
            with a focus on user experience and performance optimization. I utilize the power of AI to help turn ideas into reality through code in an efficient manner.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            src={aboutVideo}
            muted
            autoPlay
            playsInline
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
