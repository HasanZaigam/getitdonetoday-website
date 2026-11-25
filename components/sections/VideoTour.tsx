"use client";

import { useRef, useState } from "react";
import { videoTour } from "@/lib/content";
import { PlayIcon } from "@/components/icons";
import { Container, LogoMark, SectionHeading } from "@/components/ui";

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
              preload="none"
              playsInline
              aria-label={`GetItDoneToday product walkthrough, ${videoTour.durationLabel}`}
            />

            {!started ? (
              <button
                type="button"
                onClick={play}
                className="group absolute inset-0 flex flex-col items-center justify-center gap-3 bg-column px-6 text-center sm:gap-5"
                aria-label={`Play the product tour (${videoTour.durationLabel})`}
              >
                {/* Faint board-grid backdrop, drawn in CSS so it costs no request. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
                />
                <span className="relative flex items-center gap-2.5 text-lg font-bold tracking-[-0.01em] text-fg sm:text-xl">
                  <LogoMark size={30} />
                  GetItDoneToday
                </span>
                <span className="relative text-[clamp(22px,4vw,44px)] leading-[1.1] font-bold tracking-[-0.025em] text-fg">
                  {videoTour.posterTitle}
                </span>
                <span className="relative mt-1 flex items-center gap-3 rounded-full bg-brand p-1.5 pr-5 text-on-brand shadow-[0_12px_40px_-8px_rgba(21,93,252,0.7)] transition-transform duration-200 group-hover:scale-[1.04] motion-reduce:group-hover:scale-100 sm:p-2 sm:pr-6">
                  <span className="flex size-8 items-center justify-center rounded-full bg-on-brand text-brand sm:size-10">
                    <PlayIcon className="ml-0.5 size-4 sm:size-5" />
                  </span>
                  <span className="text-sm font-semibold sm:text-base">
                    {videoTour.posterKicker} · {videoTour.duration}
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
