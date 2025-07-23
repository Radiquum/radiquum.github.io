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
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">Characters</h2>
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
      <div className="flex flex-col gap-4 mt-2">
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
    </Section>
  );
};
