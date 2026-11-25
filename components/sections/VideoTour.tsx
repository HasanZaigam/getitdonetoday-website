"use client";

import { useRef, useState } from "react";
import { videoTour } from "@/lib/content";
import { PlayIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";

export function VideoTour() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    const video = videoRef.current;
    if (!video) return;
    video.controls = true;
    void video.play().catch(() => {
      // Autoplay with sound can be blocked; the native controls stay available.
    });
  };

  return (
    <section id="tour" aria-labelledby="tour-title" className="pt-28">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <SectionHeading id="tour-title" eyebrow={videoTour.eyebrow} title={videoTour.title} />
          <p className="max-w-[420px] text-muted md:pb-1.5">{videoTour.subtitle}</p>
        </div>

        <div
          className="relative mt-12 overflow-hidden rounded-[18px] border border-line bg-card p-1.5 shadow-[0_40px_120px_-40px_rgba(21,93,252,0.35)] sm:p-2"
          data-reveal
        >
          <div className="relative aspect-video overflow-hidden rounded-[12px] bg-column">
            <video
              ref={videoRef}
              className="size-full object-cover"
              src={videoTour.src}
              poster={videoTour.poster}
              preload="none"
              playsInline
              aria-label={`GetItDoneToday product walkthrough, ${videoTour.durationLabel}`}
            />

            {!started ? (
              <button
                type="button"
                onClick={play}
                className="group absolute inset-0 flex items-end justify-end p-3 transition-colors hover:bg-bg/5 sm:justify-center sm:p-0 sm:pb-[9%]"
                aria-label={`Play the product tour (${videoTour.durationLabel})`}
              >
                <span className="flex items-center gap-3 rounded-full bg-brand p-1.5 text-on-brand shadow-[0_12px_40px_-8px_rgba(21,93,252,0.7)] transition-transform duration-200 group-hover:scale-[1.04] sm:py-3 sm:pr-6 sm:pl-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-on-brand text-brand sm:size-11">
                    <PlayIcon className="ml-0.5 size-4 sm:size-5" />
                  </span>
                  <span className="hidden text-base font-semibold sm:inline">
                    Watch the tour <span className="font-medium text-on-brand-soft">· {videoTour.duration}</span>
                  </span>
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
