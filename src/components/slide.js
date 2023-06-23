"use client";
import React from "react";

const Slide = ({ icon, text }) => {
  return (
    <div>
      {icon}
      <div className="my-5 font-Poppins_SemiBold text-black text-xs  md:text-xl dark:text-white">
        {text}
      </div>
    </div>
  );
};

export default Slide;
