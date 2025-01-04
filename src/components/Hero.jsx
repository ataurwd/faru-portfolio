import React from "react";
import heroimg from "../assets/heroimg.jpg";

const Hero = () => {
  return (
    <div className="lg:mx-28 pt-10">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            Hi I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Farhana Islam
            </span>{" "}
            <br /> 
          </h1>
          <p className="py-6">
            Creative web developer specializing in building responsive,
            user-friendly websites using modern tools and technologies
          </p>
          <button className="px-4 py-2 rounded-md bg-purple-600 text-white">Download CV</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="p-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg">
            <img
              src={heroimg}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
