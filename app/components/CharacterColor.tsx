export const CharacterColor = ({ color }: { color: string }) => {
  return (
    <div
      className="bg-[var(--bg-color)] px-8 py-4 text-2xl rounded-xl border-1 border-white/5"
      style={{ "--bg-color": color } as React.CSSProperties}
    >
      <p className="text-transparent">{color}</p>
    </div>
  );
};
