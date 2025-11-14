import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";

const skills = {
  "Front-end": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Django",
    "Flask",
  ],
  "Back-end": ["Node.js", "Express.js", "FastAPI"],
  API: [
    "REST",
    "Postman/Hoppscotch",
    // "Swagger",
    "mitmproxy",
    "HTTP Toolkit",
  ],
  Collaboration: ["Git", "GitHub"],
  Deployment: [
    "Docker",
    "Docker-compose",
    "Vercel",
    "GitHub Actions",
    "Cloudflare Workers & Pages",
  ],
  Tools: ["Figma", "Adobe Photoshop", "Cloudflare DNS"],
};

export const Skills = () => {
  return (
    <Section>
      <SectionTitle backgroundColor={"#101316"} backgroundOpacity={"5%"}>
        Skills
      </SectionTitle>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 xl:grid-row">
          {Object.entries(skills).map(([category, skills], index) => {
            if (index < 3)
              return (
                <div
                  key={`skills.${category}`}
                  className="border-1 border-white/5 bg-[#101316]/25 rounded-xl px-3 py-2"
                >
                  <h3 className="text-2xl md:text-3xl">{category}</h3>
                  <div className="flex gap-x-4 flex-wrap">
                    {skills.map((skill) => (
                      <p key={skill}>{skill}</p>
                    ))}
                  </div>
                </div>
              );
          })}
        </div>
        <div className="flex flex-col gap-2 xl:grid-row">
          {Object.entries(skills).map(([category, skills], index) => {
            if (index > 2)
              return (
                <div
                  key={`skills.${category}`}
                  className="border-1 border-white/5 bg-[#101316]/25 rounded-xl px-3 py-2"
                >
                  <h3 className="text-2xl md:text-3xl">{category}</h3>
                  <div className="flex gap-x-4 flex-wrap">
                    {skills.map((skill) => (
                      <p key={skill}>{skill}</p>
                    ))}
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </Section>
  );
};
