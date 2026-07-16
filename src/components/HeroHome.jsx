import React from "react";
import Button from "./Button";

function HeroHome() {
  return (
    <section className="  w-full bg-[#F1F1FE] flex  px-6 py-12 md:py-16">
      <div className="container">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a24] tracking-tight leading-[1.15] mb-6">
              Create, Read, <br />
              <span className="bg-linear-to-r from-[#6342f6] to-[#4726eb] bg-clip-text text-transparent">
                Inspire.
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#6c7281] leading-relaxed max-w-lg mb-9">
              Discover stories written by amazing people. Share your knowledge
              and inspire others with your unique perspective.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
              <Button text={"Explore Posts"} variant={"primary2"} />

              <Button text={"Get Started"} variant={"secondary2"} />
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <div className="bg-white rounded-2xl p-3 shadow-xl shadow-black/4 hover:-translate-y-1 transition-transform duration-300 ease-in-out max-w-135 w-full">
              <img
                src="Hero illustration.svg"
                alt="Platform Mockup"
                className="w-full h-auto rounded-xl block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
