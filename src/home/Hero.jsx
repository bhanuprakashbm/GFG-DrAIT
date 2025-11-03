import { useEffect } from "react";
import Announcement from "../dsa-contest/Announcement";

const Hero = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/typewriter-effect@latest/dist/core.js";
        script.async = true;
        script.onload = () => {
          const typewriter = new window.Typewriter("#typewriter", {
            loop: true, // Loop the animation
          });

          let role1 = "coding";
          let role2 = "collaboration";
          let role3 = "community";
          let timeDelay = 200;

          typewriter
            .typeString(role1)
            .pauseFor(timeDelay)
            .deleteChars(role1.length)
            .typeString(role2)
            .pauseFor(timeDelay)
            .deleteChars(role2.length)
            .typeString(role3)
            .pauseFor(timeDelay)
            .start();
        };
        document.body.appendChild(script);
      }, []);
  return (
    <section
    className="hero-section sm:h-[80vh] xsm:h-[80vh] md:h-[90vh] py-2 md:py-24 flex flex-col items-center justify-center"
    >
    {/* <div className="mb-4"><Announcement/></div> */}
      <div
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-delay="300"
        className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6">
        <h1 className="text-2xl  font-bold md:text-5xl text-center heading dark-green-grad">
          GFG Campus Body <br className="lbr" />
          Dr AIT Bengaluru
        </h1>
        <div data-aos="zoom-in-down" className="relative image-container hero-img-con flex items-center justify-center overflow-hidden my-4">
          <img
            src="/assets/home-logo.png"
            alt="GFG Dr AIT Home Logo"
            className="animate-bounce-vertical object-contain hero-img"
          />
        </div>

        <div className="text-2xl font-bold md:text-5xl tag-line green-gradient-text dark-green-grad">
          Unlock the <span className="geek">Geek</span> in You!
        </div>
        <div className="text-2xl font-bold md:text-5xl tag-line green-gradient-text dark-green-grad ">
          Join us for <span id="typewriter" className="typewriter-green-grad"></span>{" "}
        </div>
      </div>
    </section>
  );
};
export default Hero;
