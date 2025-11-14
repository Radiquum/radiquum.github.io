import Link from "next/link";
import { IconWithText } from "../components/IconWithText";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";

const links = [
  {
    icon: "/icons/ic_baseline-telegram.svg",
    text: "Telegram",
    desc: "@radiquum",
    url: "https://t.me/radiquum",
  },
  {
    icon: "/icons/ic_baseline-discord.svg",
    text: "Discord",
    desc: "radiquum",
    url: null,
  },
  {
    icon: "/icons/material-symbols_mail.svg",
    text: "E-Mail",
    desc: "radiquum@wah.su",
    url: "mailto:radiquum@wah.su",
  },
  {
    icon: "/icons/ri_vk-fill.svg",
    text: "Vkontakte",
    desc: "@radiquum",
    url: "https://vk.com/radiquum",
  },
];

export const Contacts = () => {
  return (
    <Section>
      <SectionTitle backgroundColor={"#1c1e20"} backgroundOpacity={"25%"}>
        Contact
      </SectionTitle>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
        {links.map((item) => {
          if (item.url) {
            return (
              <Link href={item.url} key={`contacts.link.${item.text}`}>
                <IconWithText
                  icon={item.icon}
                  text={item.text}
                  desc={item.desc}
                  backgroundColor={"#1c1e20"}
                />
              </Link>
            );
          } else {
            return (
              <IconWithText
                key={`socials.${item.text}`}
                icon={item.icon}
                text={item.text}
                desc={item.desc}
                backgroundColor={"#1c1e20"}
              />
            );
          }
        })}
      </div>
    </Section>
  );
};
