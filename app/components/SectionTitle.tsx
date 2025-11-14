export const SectionTitle = ({
  children,
  backgroundColor,
  backgroundOpacity,
}: Readonly<{
  children: React.ReactNode;
  backgroundColor: string;
  backgroundOpacity: string;
}>) => {
  return (
    <h2
      className={`text-4xl md:text-5xl border-1 px-3 py-2 rounded-xl border-white/5 bg-[var(--bg-color)]/[var(--bg-opacity)] flex-1 w-full`}
      style={
        {
          "--bg-color": backgroundColor || "#161213",
          "--bg-opacity": backgroundOpacity || "25%",
        } as React.CSSProperties
      }
    >
      {children}
    </h2>
  );
};
