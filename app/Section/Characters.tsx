import Link from "next/link";
import { IconWithText } from "../components/IconWithText";
import { Section } from "../components/Section";
import { CharacterImage } from "../components/CharacterImage";

const links = [
  {
    icon: "/icons/furaffinity.svg",
    text: "Furaffinity",
    desc: "radiquum",
    url: "https://furaffinity.net/user/radiquum",
  },
  {
    icon: "/icons/itaku.svg",
    text: "Itaku",
    desc: "radiquum",
    url: "https://itaku.ee/profile/radiquum",
  },
];

export const Characters = () => {
  return (
    <Section>
      <div className="flex flex-col gap-2 mt-2 md:flex-row md:justify-between md:items-center">
        <h2 className="text-4xl md:text-5xl">Characters</h2>
        <div className="flex items-center gap-4">
          {links.map((item) => (
            <Link href={item.url} key={`photos.link.${item.text}`}>
              <IconWithText
                icon={item.icon}
                text={item.text}
                desc={item.desc}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2 md:hidden">
        <CharacterImage
          name="Kentai"
          species="Red Panda"
          gender="Male"
          image="/images/red_panda.png"
        />
        <CharacterImage
          name=""
          species="Protogen"
          gender="Male"
          image="/images/protogen.png"
        />
      </div>
      <div className="flex-col gap-8 mt-2 hidden md:flex">
        <div className="flex gap-4">
          <CharacterImage
            name="Kentai"
            species="Red Panda"
            gender="Male"
            image="/images/red_panda.png"
          />
          <div className="flex flex-col">
            <p className="text-5xl">Kentai</p>
            <p className="mt-2 text-3xl">Red Panda</p>
            <p className="text-3xl">Male</p>
            <div className="flex-1"></div>
            <button className="rounded-full bg-[#491f1f] px-4 py-2 text-3xl">
              about
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <CharacterImage
            name=""
            species="Protogen"
            gender="Male"
            image="/images/protogen.png"
          />
          <div className="flex flex-col">
            <p className="mt-2 text-3xl">Protogen</p>
            <p className="text-3xl">Male</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
