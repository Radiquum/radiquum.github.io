import Link from "next/link";
import { IconWithText } from "../components/IconWithText";
import { Section } from "../components/Section";

const links = [
  {
    icon: "/icons/mdi_github.svg",
    text: "Anix",
    desc: "Unofficial web client for anixart",
    url: "https://github.com/radiquum/AniX",
  },
  {
    icon: "/icons/mdi_github.svg",
    text: "Furaffinity-dl",
    desc: "Fork with additional functionality",
    url: "https://github.com/radiquum/furaffinity-dl",
  },
  {
    icon: "/icons/mdi_github.svg",
    text: "TG-Photos",
    desc: "Google Photo like bot for Telegram",
    url: "https://github.com/radiquum/TG-Photos",
  },
  {
    icon: "/icons/mdi_github.svg",
    text: "TIG",
    desc: "Generate images from text",
    url: "https://github.com/radiquum/TIG",
  },
  {
    icon: "/icons/mdi_github.svg",
    text: "GitHub",
    desc: "Other Projects",
    url: "https://github.com/radiquum",
  },
  {
    icon: "/icons/wahsu.svg",
    text: "wah.su",
    desc: "Self-Hosting project",
    url: "https://wah.su",
  },
  {
    icon: "/icons/ic_baseline-telegram.svg",
    text: "Red Pandas Stickers",
    desc: "Collection of Red Panda related sticker packs",
    url: "https://t.me/red_panda_stickers",
  },
];

export const Projects = () => {
  return (
    <Section>
      <h2 className="text-4xl md:text-5xl">Projects</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {links.map((item) => (
          <Link href={item.url} key={`projects.link.${item.text}`}>
            <IconWithText icon={item.icon} text={item.text} desc={item.desc} />
          </Link>
        ))}
      </div>
    </Section>
  );
};
