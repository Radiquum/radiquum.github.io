"use client";

import Link from "next/link";
import { Section } from "../components/Section";
import { IconWithText } from "../components/IconWithText";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../components/Photos.Carousel";

const links = [
  {
    icon: "/icons/ic_baseline-telegram.svg",
    text: "Telegram",
    desc: "@photowah",
    url: "https://t.me/photowah",
  },
  {
    icon: "/icons/simple-icons_immich.svg",
    text: "Gallery",
    desc: "wah.su/photos",
    url: "https://wah.su/photos",
  },
];

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDES = [
  "/images/photos/2024-06-14T19_32_04_024.JPG",
  "/images/photos/2024-06-17T18_55_55_030.JPG",
  "/images/photos/2024-06-17T19_44_15_068.JPG",
  "/images/photos/2024-06-17T19_48_32_074.JPG",
  "/images/photos/2024-06-22T20_17_57_001.JPG",
  "/images/photos/image_2024-06-02_16-55-04.png",
  "/images/photos/IMG_20230604_043911_43.JPG",
  "/images/photos/IMG_20240710_225123.jpg",
  "/images/photos/IMG_20240710_225448.jpg",
  "/images/photos/IMG_20230602_190558.JPG",
  "/images/photos/IMG_20230603_175135.JPG",
];

export const Photos = () => {
  return (
    <div className="flex flex-col gap-4">
      <Section>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <h2 className="text-4xl md:text-5xl">Photos</h2>
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
      </Section>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};
