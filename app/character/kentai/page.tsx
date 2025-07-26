/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { CharacterColor } from "@/app/components/CharacterColor";
import Link from "next/link";
const CharacterColors = {
  Body: ["#ffb1ce", "#91d1fd", "#ffffff"],
  Clothes: ["#492020", "#1c1a1d", "#39373b", "#494749", "#69676a", "#98959a"],
};

export const metadata: Metadata = {
  title: "Kentai Radiquum",
  description:
    "Character page. \
    Kentai is a friendly yet introverted red panda who values his quiet space and prefers meaningful interactions over large crowds. \
    Curious by nature and sharp-minded, he has a deep love for technology and is always eager to explore something new. While he keeps a low profile, those close to him know him as thoughtful, creative, and quietly expressive.",
  openGraph: {
    images: [
      {
        url: "https://radiquum.wah.su/characters/kentai_redpanda_thumb.jpg",
        width: 1120,
        height: 800,
      },
    ],
  },
};

export default function CharacterKentai() {
  return (
    <main className="pb-16 overflow-hidden">
      <div className="bg-[#131314] rounded-b-4xl md:rounded-b-[128px]">
        <div className="container mx-auto py-8 px-4">
          <div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <img
                alt="Reference"
                src="/characters/kentai_redpanda_thumb.jpg"
                className="rounded-xl"
              />
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-5xl">Info</h2>
                  <div>
                    <p className="text-2xl">Name: Kentai Radiquum</p>
                    <p className="text-2xl">Species: Red Panda</p>
                    <p className="text-2xl">Male, average height, slim build</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-5xl -mb-4">Colors</h2>
                  {Object.entries(CharacterColors).map(([category, colors]) => (
                    <div key={`color.${category}`}>
                      <h2 className="text-2xl">{category}</h2>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {colors.map((color) => (
                          <CharacterColor
                            color={color}
                            key={`color.${category}.${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 px-4">
        <p className="text-2xl">
          Kentai is a friendly yet introverted red panda who values his quiet
          space and prefers meaningful interactions over large crowds. Curious
          by nature and sharp-minded, he has a deep love for technology and is
          always eager to explore something new. While he keeps a low profile,
          those close to him know him as thoughtful, creative, and quietly
          expressive.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
          <div className="border-1 border-white/5 bg-[#161224]/5 rounded-xl px-8 py-4">
            <h2 className="text-5xl text-center">Hobbies</h2>
            <ul className="list-disc mt-2">
              <li>
                <p className="text-2xl">
                  Programming — not just a skill, but a form of self-expression
                  and problem-solving he deeply enjoys.
                </p>
              </li>
              <li>
                <p className="text-2xl">
                  Photography — capturing small details and cozy moments from
                  his world.
                </p>
              </li>
              <li>
                <p className="text-2xl">
                  Plush Toy Collecting — he has a soft spot for plushies,
                  especially red pandas. His collection brings him comfort and
                  emotional grounding.
                </p>
              </li>
            </ul>
          </div>
          <div className="border-1 border-white/5 bg-[#132416]/5 rounded-xl px-8 py-4">
            <h2 className="text-5xl text-center">Habits</h2>
            <ul className="list-disc mt-2">
              <li>
                <p className="text-2xl">
                  His tail gently wags when he&apos;s fully absorbed in
                  something.
                </p>
              </li>
              <li>
                <p className="text-2xl">
                  Tugs or adjusts his collar when thinking through a tricky
                  problem.
                </p>
              </li>
              <li>
                <p className="text-2xl">
                  Always has music playing while he works, and sometimes hums
                  along without noticing.
                </p>
              </li>
              <li>
                <p className="text-2xl">
                  Loves curling up in a blanket with a plush toy and relaxing to
                  music — his version of peace.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="fixed left-4 bottom-4">
        <Link href="/" className="min-w-fit min-h-fit group">
          <div className="p-4 border-1 rounded-full backdrop-blur-md border-white/5 bg-[#161213]/25 flex gap-2 w-[66px] hover:w-[128px] relative transition-[width] duration-150 ease-in-out overflow-hidden">
            <img
              alt=""
              src="/icons/mdi_arrow-left.svg"
              className="w-8 h-8 invert"
            />
            <div className="relative w-0 opacity-0 group-hover:opacity-100 transition-[opacity]">
              <span className="text-2xl absolute">Back</span>
            </div>
          </div>
        </Link>
      </nav>
      <nav className="fixed right-4 bottom-4">
        <a
          className="min-w-fit min-h-fit group"
          href="/characters/Kentai_Radiquum_RedPanda/Kentai_Radiquum_RedPanda.zip"
          download={true}
        >
          <div className="p-4 border-1 rounded-full backdrop-blur-md border-white/5 bg-[#161213]/25 flex gap-2 w-[66px] hover:w-[180px] relative transition-[width] duration-150 ease-in-out overflow-hidden">
            <img
              alt=""
              src="/icons/mdi_download.svg"
              className="ml-[2px] w-8 h-8 invert"
            />
            <div className="relative w-0 opacity-0 group-hover:opacity-100 transition-[opacity]">
              <span className="text-2xl absolute">Download</span>
            </div>
          </div>
        </a>
      </nav>
    </main>
  );
}
