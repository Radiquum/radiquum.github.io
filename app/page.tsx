import { Characters } from "./Section/Characters";
import { Contacts } from "./Section/Contacts";
import { Footer } from "./Section/Footer";
import { Intro } from "./Section/Intro";
import { Photos } from "./Section/Photos";
import { Projects } from "./Section/Projects";
import { Skills } from "./Section/Skills";
import { Socials } from "./Section/Socials";

export default function Home() {
  return (
    <main>
      <Intro />
      <div className="flex flex-col gap-4 md:gap-8 overflow-hidden bg-[#090909]">
        <div className="flex flex-col gap-8 md:gap-16 overflow-hidden">
          <Socials />
          <Skills />
          <Projects />
          <Contacts />
        </div>
        <div className="flex flex-col gap-8 overflow-hidden bg-[#131314] rounded-t-4xl md:rounded-t-[128px] pt-4 md:pt-8 pb-8 md:pb-16 xl:rounded-t-4xl 2xl:rounded-t-[128px]">
          <Photos />
          <Characters />
        </div>
      </div>
      <div className="bg-[#131314]">
        <Footer />
      </div>
    </main>
  );
}
