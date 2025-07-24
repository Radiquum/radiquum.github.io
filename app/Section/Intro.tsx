"use client";

import { useState, useEffect } from "react";

export const Intro = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="flex gap-4 flex-col xl:gap-8">
      <div className="w-full flex items-center justify-center py-24 bg-[#101316] rounded-tl-[256px] rounded-br-[256px]">
        <h1 className="text-[#FFB1CD] tracking-tight font-bold text-[80px] text-center md:text-[128px] xl:text-[200px]">
          Radiquum
        </h1>
      </div>
      <div className="w-full flex items-center justify-center py-24 bg-[#161213] rounded-bl-[128px] rounded-tr-[128px] md:rounded-bl-[256px] md:rounded-tr-[256px] overflow-hidden">
        <div className="flex flex-col md:flex-row md:gap-8 md:flex-wrap md:justify-center 2xl:gap-16">
          <p
            className={`text-[#C8E8FE] ${
              isAnimated ? "translate-y-0" : "translate-y-64 md:translate-y-96"
            } font-medium text-4xl md:text-5xl xl:text-8xl transition-transform duration-1000 ease-out`}
          >
            Photographer
          </p>
          <p
            className={`text-[#FF8686] ${
              isAnimated ? "translate-y-0" : "translate-y-64 md:translate-y-96"
            } font-medium text-4xl md:text-5xl xl:text-8xl transition-transform delay-150 duration-1000 ease-out`}
          >
            Developer
          </p>
          <p
            className={`text-[#FF851A] ${
              isAnimated ? "translate-y-0" : "translate-y-64 md:translate-y-96"
            } font-medium text-4xl md:text-5xl xl:text-8xl transition-transform delay-300 duration-1000 ease-out`}
          >
            Self-Hosting admirer
          </p>
        </div>
      </div>
    </div>
  );
};
