"use client";

import { useState, useEffect } from "react";

export const Intro = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div>
      <div className="flex flex-col mx-auto max-w-fit md:items-center justify-center h-fit py-16 gap-4">
        <h1 className="text-4xl md:text-8xl font-medium">Hi, I&apos;m <span className="bg-clip-text bg-gradient-to-br from-[#FFB1CD] via-[#C8E8FE] to-white text-transparent font-bold">Radiquum</span></h1>
        <div className="flex flex-col lg:flex-row lg:gap-8 overflow-hidden">
          <p className={`text-2xl md:text-4xl text-[#C8E8FE] ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} transition-[transform_opacity] duration-1000 ease-out`}>Developer</p>
          <p className={`text-2xl md:text-4xl text-[#FF8686] ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} transition-[transform_opacity] duration-1000 ease-out delay-150`}>Amateur Photographer</p>
          <p className={`text-2xl md:text-4xl text-[#FF851A] ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} transition-[transform_opacity] duration-1000 ease-out delay-300`}>Self-Hosting Admirer</p>
        </div>
      </div>
    </div>
  );
};
