type IconWithTextProps = {
  icon: string;
  text: string;
  desc: string;
};

export const IconWithText = ({ icon, text, desc }: IconWithTextProps) => {
  return (
    <div className="flex items-center gap-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={""} />
      <div>
        <p className="text-2xl">{text}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};
