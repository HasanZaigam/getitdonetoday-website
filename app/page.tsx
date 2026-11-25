import { ScrollReveal } from "@/components/ScrollReveal";
import { Audience } from "@/components/sections/Audience";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ModelStrip } from "@/components/sections/ModelStrip";
import { Navbar } from "@/components/sections/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Testimonial } from "@/components/sections/Testimonial";
import { VideoTour } from "@/components/sections/VideoTour";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only rounded-full bg-brand px-4 py-2 font-semibold text-on-brand focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ModelStrip />
        <VideoTour />
        <Problem />
        <HowItWorks />
        <Features />
        <Audience />
        <Testimonial />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
