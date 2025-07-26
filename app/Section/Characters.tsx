/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { IconWithText } from "../components/IconWithText";
import { Section } from "../components/Section";
import { CharacterImage } from "../components/CharacterImage";

import { useInView } from "motion/react";
import { useRef } from "react";

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
  const imagesRedPandaRef = useRef(null);
  const imagesRedPandaIsInView = useInView(imagesRedPandaRef, { once: true });
  const imagesProtogenRef = useRef(null);
  const imagesProtogenIsInView = useInView(imagesProtogenRef, { once: true });

  return (
    <Section>
      <div className="flex flex-col gap-2 mt-2 md:flex-row md:justify-between md:items-center">
        <h2 className="text-4xl md:text-5xl border-1 px-3 py-2 rounded-xl border-white/5 bg-[#ffb1cd]/5 flex-1">
          Characters
        </h2>
        <div className="flex items-center gap-2 flex-1">
          {links.map((item) => (
            <Link
              href={item.url}
              key={`characters.link.${item.text}`}
              className="flex-1"
            >
              <IconWithText
                icon={item.icon}
                text={item.text}
                desc={item.desc}
                backgroundColor={"#ffb1cd"}
                backgroundOpacity={"5%"}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2 md:hidden">
        <Link href="/character/kentai">
          <CharacterImage
            name="Kentai"
            species="Red Panda"
            gender="Male"
            image="/images/red_panda.png"
          />
        </Link>
        <CharacterImage
          name=""
          species="Protogen"
          gender="Male"
          image="/images/protogen.png"
        />
      </div>
      <div className="flex-col gap-8 mt-2 hidden md:flex relative">
        <div className="flex gap-4">
          <CharacterImage
            name="Kentai"
            species="Red Panda"
            gender="Male"
            image="/images/red_panda.png"
          />
          <div className="flex flex-col">
            <p className="text-5xl">Kentai</p>
            <p className="mt-2 text-3xl" ref={imagesRedPandaRef}>
              Red Panda
            </p>
            <p className="text-3xl">Male</p>
            <div className="flex-1"></div>
            <Link
              href="/character/kentai"
              className="rounded-full bg-[#491f1f] hover:bg-[#601f1f] transition-colors px-4 py-2 text-3xl text-center"
            >
              about
            </Link>
          </div>
          <div
            className="top-0 left-[488px] absolute hidden xl:flex gap-4 transition-transform duration-1000 ease-out"
            style={{
              transform: !imagesRedPandaIsInView
                ? "translateX(100vw)"
                : "translateX(0)",
            }}
          >
            <img
              className="rounded-4xl w-[372px] h-[288px] object-cover flex-shrink-0"
              src="/images/red_panda2.png"
              alt=""
            />
            <img
              className="rounded-4xl w-[372px] h-[288px] object-cover flex-shrink-0"
              src="/images/red_panda3.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-4 xl:flex-row-reverse">
          <CharacterImage
            name=""
            species="Protogen"
            gender="Male"
            image="/images/protogen.png"
          />
          <div className="flex flex-col xl:text-right">
            <p className="mt-2 text-3xl">Protogen</p>
            <p className="text-3xl" ref={imagesProtogenRef}>
              Male
            </p>
          </div>
          <div
            className="bottom-0 left-[-228px] absolute hidden xl:flex gap-4 transition-transform duration-1000 ease-out"
            style={{
              transform: !imagesProtogenIsInView
                ? "translateX(-100vw)"
                : "translateX(0)",
            }}
          >
            <img
              className="rounded-4xl w-[372px] h-[288px] object-cover flex-shrink-0"
              src="/images/protogen3.png"
              alt=""
            />
            <img
              className="rounded-4xl w-[372px] h-[288px] object-cover flex-shrink-0"
              src="/images/protogen2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
