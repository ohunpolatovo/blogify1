import React from "react";
import ChooseCard from "./ChooseCard";
function WhyChoose() {
  return (
    <div>
      <section className="  py-20 md:py-20 flex flex-col items-center  container">
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a24] mb-4 tracking-tight">
            Why Choose Blogify?
          </h2>
          <p className="text-[15px] text-[#6c7281] leading-relaxed max-w-xl mx-auto px-4">
            Built with modern technologies and best practices to provide the
            best blogging experience.
          </p>
        </div>

        <div className="max-w-6xl w-full flex flex-wrap justify-center gap-6">
          <ChooseCard
            iconSrc={"/fast.svg"}
            title={"Fast"}
            description={
              "Lightning-fast performance with modernweb technologies for the best readingexperience."
            }
          />
          <ChooseCard
            iconSrc={"/Overlay.svg"}
            title={"Secure"}
            description={
              "Your data is protected with industry-standard security practices andencryption."
            }
          />
          <ChooseCard
            iconSrc={"/setting.svg"}
            title={"Easy to Manage"}
            description={
              "Intuitive admin dashboard makes contentmanagement effortless and enjoyable."
            }
          />
        </div>
      </section>
    </div>
  );
}

export default WhyChoose;
