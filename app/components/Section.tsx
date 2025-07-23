export const Section = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="max-w-[400px] w-full mx-auto flex flex-col gap-2">
      {children}
    </div>
  );
};
