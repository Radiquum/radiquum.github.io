export const Intro = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="w-full flex items-center justify-center py-24 bg-[#101316] rounded-tl-[256px] rounded-br-[256px]">
        <h1 className="text-[#FFB1CD] tracking-tight font-bold text-8xl">
          Radiquum
        </h1>
      </div>
      <div className="w-full flex items-center justify-center py-24 bg-[#161213] rounded-bl-[128px] rounded-tr-[128px]">
        <div className="flex flex-col">
          <p className="text-[#C8E8FE] font-medium text-4xl">Photographer</p>
          <p className="text-[#FF8686] font-medium text-4xl">Developer</p>
          <p className="text-[#FF851A] font-medium text-4xl">
            Self-Hosting admirer
          </p>
        </div>
      </div>
    </div>
  );
};
