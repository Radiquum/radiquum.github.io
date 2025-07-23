export const Intro = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="w-full flex items-center justify-center py-24 bg-[#101316] rounded-tl-[256px] rounded-br-[256px]">
        <h1 className="text-[#FFB1CD] tracking-tight font-bold text-8xl md:text-[128px]">
          Radiquum
        </h1>
      </div>
      <div className="w-full flex items-center justify-center py-24 bg-[#161213] rounded-bl-[128px] rounded-tr-[128px] md:rounded-bl-[256px] md:rounded-tr-[256px]">
        <div className="flex flex-col md:flex-row md:gap-8 md:flex-wrap md:justify-center">
          <p className="text-[#C8E8FE] font-medium text-4xl md:text-5xl">
            Photographer
          </p>
          <p className="text-[#FF8686] font-medium text-4xl md:text-5xl">
            Developer
          </p>
          <p className="text-[#FF851A] font-medium text-4xl md:text-5xl">
            Self-Hosting admirer
          </p>
        </div>
      </div>
    </div>
  );
};
