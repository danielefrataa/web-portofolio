import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaRocket } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlight Effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Subtitle */}
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            A Portfolio by Daniel Efrata
          </p>

          {/* Title with TextGenerateEffect */}
          <TextGenerateEffect
            words="Building Aesthetic and High-Performance Web Interfaces"
            highlightWords={["Aesthetic", "Creative", "Interactive"]}
          />

          {/* Description */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed md:leading-loose max-w-3xl mx-auto">
            Hi! I&apos;m{" "}
            <span className="font-semibold text-gradient bg-gradient-to-r from-purple-400 to-blue-500 text-cyan-300">
              Daniel Efrata
            </span>
            , a Front-end Developer passionate about building interactive and visually stunning web experiences. 
            <br />
            Based in Malang, Indonesia{" "}
            <span className="ml-1">🇮🇩</span>
          </p>

          {/* MagicButton */}
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/* Little About Me Section */}
      <div className="bg-transparent mt-20 px-4 md:px-0">
      {/* Judul dengan Ikon Roket */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-left flex items-center">
        <FaRocket className="mr-2 text-blue-500" /> {/* Ikon roket */}
        <span className="text-blue-500">A Little About Me</span>
      </h1>

      {/* Teks dengan Justify */}
      <p className="text-sm md:text-lg leading-relaxed max-w-3xl text-justify text-white/90">
      I am a 4th-year student at Universitas Merdeka Malang, pursuing a degree in Informatics Engineering with a relentless curiosity for technology. 
      As a Front-end Developer, I am deeply passionate about crafting interactive and visually stunning web experiences that captivate users and bring ideas to life. 
      I thrive on exploring cutting-edge technologies and am constantly inspired by the rapid advancements in the tech world. 
      With a burning enthusiasm for development, I am committed to turning complex problems into elegant solutions. 
      Currently, I am honing my skills in Cloud and embracing the grind every day to push the boundaries of what I can achieve.
      </p>

      {/* Garis Gradient */}
      <div className="mt-4">
        <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
      </div>
    </div>
    </div>
  );
};

export default Hero;