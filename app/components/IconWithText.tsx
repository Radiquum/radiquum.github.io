type IconWithTextProps = {
  icon: string;
  text: string;
  desc: string;
  hoverTextColor?: string | null;
};

export const IconWithText = ({
  icon,
  text,
  desc,
  hoverTextColor,
}: IconWithTextProps) => {
  return (
    <div
      className={`flex items-center gap-1 ${
        hoverTextColor ? `hover:text-${hoverTextColor}` : ""
      } transition-[color,_scale] hover:scale-105 duration-100`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={""} />
      <div>
        <p className="text-2xl">{text}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};
