import { createFileRoute } from "@tanstack/react-router";

import {
  Aurora,
  CursorSpotlight,
  CursorFollower,
  LoadingScreen,
  ScrollProgress,
  ScrollTop,
} from "@/components/portfolio/effects";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/sections/Hero";
import { About } from "@/components/portfolio/sections/About";
import { Experience } from "@/components/portfolio/sections/Experience";
import { Skills } from "@/components/portfolio/sections/Skills";
import { Projects } from "@/components/portfolio/sections/Projects";
import { Achievements } from "@/components/portfolio/sections/Achievements";
import { Profiles } from "@/components/portfolio/sections/Profiles";
import { Contact } from "@/components/portfolio/sections/Contact";
import { Footer } from "@/components/portfolio/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-white">
      <LoadingScreen />
      <Aurora />
      <CursorSpotlight />
      <CursorFollower />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Profiles />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
