import { Characters } from "./Section/Characters";
import { Contacts } from "./Section/Contacts";
import { Intro } from "./Section/Intro";
import { Photos } from "./Section/Photos";
import { Projects } from "./Section/Projects";
import { Socials } from "./Section/Socials";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 overflow-hidden">
      <div className="flex flex-col gap-8 overflow-hidden">
        <Intro />
        <Socials />
        <Photos />
        <Projects />
      </div>
      <div className="flex flex-col gap-8 overflow-hidden bg-[#131314] rounded-t-4xl pt-4 pb-8">
        <Characters />
        <Contacts />
      </div>
    </main>
  );
}
