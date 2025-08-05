/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { IconWithText } from "../components/IconWithText";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useInView } from "motion/react";

type ProjectLinkProps = {
  icon: string;
  text: string;
  desc: string;
  url: string;
  preview: string[];
};

export const ProjectLink = ({
  icon,
  text,
  desc,
  url,
  preview,
}: ProjectLinkProps) => {
  const [shouldUseCarousel] = useState(preview ? preview.length > 1 : false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, playOnInit: false }),
  ]);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!shouldUseCarousel) return;
    if (!emblaApi) return;

    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    if (!isInView) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [shouldUseCarousel, emblaApi, isInView]);

  return (
    <Link href={url} key={`projects.link.${text}`} className="relative group">
      <div className="px-2 overflow-hidden">
        {shouldUseCarousel ? (
          <div className="embla embla--projects" ref={ref}>
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {preview.map((item, index) => (
                  <div
                    className="embla__slide"
                    key={`embla.project.${text}.slide.${index}`}
                  >
                    <img
                      className="embla__slide__img rounded-xl! border-white/5 border-1 group-hover:scale-105 duration-100 ease-in-out origin-bottom"
                      src={item}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <img
            src={preview?.[0] || "/images/projects/no-preview.png"}
            alt={text}
            className="w-full aspect-video object-cover rounded-xl border-white/5 border-1 group-hover:scale-105 duration-100 ease-in-out origin-bottom "
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <IconWithText
          icon={icon}
          text={text}
          desc={desc}
          backgroundColor={"#101316"}
          backgroundOpacity={"100%"}
          isGroup={true}
        />
      </div>
    </Link>
  );
};
