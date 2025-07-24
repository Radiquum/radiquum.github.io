export const Section = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="max-w-[400px] md:max-w-[542px] xl:max-w-[1012px] w-full mx-auto flex flex-col gap-2 px-2">
      {children}
    </div>
  );
};
