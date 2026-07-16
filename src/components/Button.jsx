import React from "react";

function Button({ text, onClick, variant, icon }) {
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-[#4346EF] text-white",
    secondary2:
      "w-40 h-12 bg-white text-[#1a1a24] border-2 border-[#e5e7eb] hover:bg-gray-50/80 hover:border-gray-300 ",
    primary2:
      "bg-linear-to-r from-[#6342f6] to-[#4726eb] text-white hover:opacity-95 group inline-flex items-center justify-center w-48 h-12 text-[16px] font-semibold rounded-2xl tracking-wide select-none transition-all duration-200 active:scale-[0.98]",
  };
  const baseStyles =
    "inline-flex items-center justify-center w-48 h-12 text-[16px] font-semibold rounded-2xl tracking-wide select-none transition-all duration-200 active:scale-[0.98]";
  return (
    <button
      className={`${variants[variant]} w-17 h-8.5 rounded-2xl  cursor-pointer flex items-center justify-center gap-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
