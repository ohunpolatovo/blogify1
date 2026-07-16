import React from "react";

function ChooseCard({ iconSrc, title, description }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-12 md:p-8 w-90 h-auto shadow-sm flex flex-col items-start transition-transform duration-300 hover:-translate-y-1">
      <div className="w-11 h-11 bg-[#eeebff] rounded-xl flex items-center justify-center text-[#5636f3] mb-4">
        <img src={iconSrc} alt={title} className="w-5 h-5 object-contain" />
      </div>
      <h3 className="text-lg font-bold text-[#1a1a24] mb-2">{title}</h3>
      <p className="text-[14px] text-[#6c7281] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ChooseCard;
