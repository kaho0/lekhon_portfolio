"use client";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import AquaticGallery from "@/components/aquatic-gallery";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Certificates from "@/components/certificates";

export default function Home() {
  return (
    <main className="w-full bg-slate-950">
      <Navigation />
      <Hero />
      <Certificates />
      <AquaticGallery />
      <Projects />
      <Footer />
    </main>
  );
}
