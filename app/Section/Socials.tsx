import Link from "next/link";
import { IconWithText } from "../components/IconWithText";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";

const links = [
  {
    icon: "/icons/uim_twitter.svg",
    text: "Twitter",
    desc: "@radiquum",
    url: "https://x.com/radiquum",
  },
  {
    icon: "/icons/ri_bluesky-fill.svg",
    text: "BlueSky",
    desc: "@radiquum.wah.su",
    url: "https://bsky.app/profile/radiquum.wah.su",
  },
  {
    icon: "/icons/mdi_mastodon.svg",
    text: "Mastodon",
    desc: "@radiquum@furry.engineer",
    url: "https://furry.engineer/@radiquum",
  },
  {
    icon: "/icons/ic_baseline-telegram.svg",
    text: "Telegram",
    desc: "@radiquumprojects",
    url: "https://t.me/radiquumprojects",
  },
  {
    icon: "/icons/ri_vk-fill.svg",
    text: "Vkontakte",
    desc: "@radiquum",
    url: "https://vk.com/radiquum",
  },
  // {
  //   icon: "/icons/ri_pixelfed-fill.svg",
  //   text: "Pixey",
  //   desc: "@radiquum@pixey.org",
  //   url: "https://pixey.org/@radiquum",
  // },
  // {
  //   icon: "/icons/ri_pixelfed-fill.svg",
  //   text: "Instafops",
  //   desc: "@radiquwum@Instafops.net",
  //   url: "https://instafops.net/@radiquwum",
  // },
];

export const Socials = () => {
  return (
    <Section>
      <SectionTitle backgroundColor={"#101316"} backgroundOpacity={"5%"}>
        Socials
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {links.map((item) => (
          <Link href={item.url} key={`socials.link.${item.text}`}>
            <IconWithText icon={item.icon} text={item.text} desc={item.desc} />
          </Link>
        ))}
      </div>
    </Section>
  );
};
