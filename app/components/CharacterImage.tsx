/* eslint-disable @next/next/no-img-element */
type CharacterImageProps = {
  image: string;
  name: string | null;
  species: string;
  gender: string;
};

export const CharacterImage = ({
  image,
  name,
  species,
  gender,
}: CharacterImageProps) => {
  return (
    <div className="relative rounded-4xl overflow-hidden">
      <img src={image} alt="" className="rounded-4xl md:w-[288px] aspect-square" />
      <div className="absolute left-0 right-0 bottom-0 from-[#131314] to-[#131314]/0 bg-gradient-to-t md:hidden">
        <div className="p-4 flex gap-2 justify-between items-end">
          <p className="text-5xl">{name}</p>
          <p className="flex-1 text-right text-3xl">
            {species}, {gender}
          </p>
        </div>
      </div>
    </div>
  );
};
