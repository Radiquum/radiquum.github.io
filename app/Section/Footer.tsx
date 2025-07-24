import { Section } from "../components/Section";

const artists = [
  {
    name: "sleepy_muzzle",
    url: "https://t.me/rerandpulseup",
  },
  {
    name: "yoshi_ruko",
    url: "https://t.me/yoshi_ruko",
  },
  {
    name: "ketfox",
    url: "https://vk.com/ketfox18",
  },
  {
    name: "whizzie",
    url: "https://bsky.app/profile/whizzie.bsky.social",
  },
];

export const Footer = () => {
  return (
    <div className="text-lg p-4 bg-[#c8e8fe]/5 rounded-t-4xl md:rounded-t-[128px] xl:rounded-t-4xl 2xl:rounded-t-[128px]">
      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4">
            <div className="flex flex-col lg:flex-row gap-x-1">
              Arts by:
              <div className="flex gap-x-4 flex-wrap">
                {artists.map((item) => (
                  <a
                    href={item.url}
                    key={`footer.artist.${item.name}`}
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-1">
              Font: LT Superior by
              <a
                href="https://lyonstype4.wixsite.com/homepage"
                className="hover:underline"
              >
                LyonsType
              </a>
              <a
                href="/fonts/LTSuperior-Mar2025/OFL.txt"
                className="hover:underline"
              >
                (License)
              </a>
            </div>
        </div>
      </Section>
    </div>
  );
};
