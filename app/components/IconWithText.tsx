type IconWithTextProps = {
  icon: string;
  text: string;
  desc: string;
  backgroundColor?: string | null;
  backgroundOpacity?: string | null;
};

export const IconWithText = ({
  icon,
  text,
  desc,
  backgroundColor,
  backgroundOpacity
}: IconWithTextProps) => {
  return (
    <div
      className={`flex items-start gap-2 border-1 px-3 py-1.5 rounded-xl border-white/5 bg-[var(--bg-color)]/[var(--bg-opacity)] ${
        backgroundColor ? `` : "bg-[#161213]/25"
      } transition-[scale] hover:scale-105 duration-100 ease-in-out`}
      style={{ "--bg-color": backgroundColor, "--bg-opacity": backgroundOpacity || "25%" } as React.CSSProperties}
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
