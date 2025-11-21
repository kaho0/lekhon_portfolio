"use client";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-linear-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Projects & Creations
          </h2>
          <p className="text-lg text-cyan-100/60 max-w-2xl mx-auto">
            Showcasing aquatic expertise, innovative designs, and programming
            projects
          </p>
        </div>

        {/* AQUARIUM PROJECTS SECTION */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center bg-linear-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
            Aquarium Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Aquascaping Artistry & Builds */}
            <div className="group relative rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition hover:glow-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition z-10 pointer-events-none"></div>
              <div className="h-48 bg-slate-800 overflow-hidden relative">
                <img
                  src="/fbvdo.jpg"
                  alt="Aquascaping Artistry & Builds"
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-cyan-300 smooth-transition">
                  Aquascaping Artistry & Builds
                </h3>
                <p className="text-cyan-100/70 text-sm mb-4">
                  Explore stunning aquascaping projects, hardscape designs, and
                  creative aquatic installations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Aquascaping", "Design", "Projects"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/v/1D7ynBz64u/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 smooth-transition font-medium"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Underwater Wonders Compilation */}
            <div className="group relative rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition hover:glow-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition z-10 pointer-events-none"></div>
              <div className="h-48 bg-slate-800 overflow-hidden relative">
                <img
                  src="/yt3.jpg"
                  alt="Underwater Wonders Compilation"
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-cyan-300 smooth-transition">
                  Underwater Wonders Compilation
                </h3>
                <p className="text-cyan-100/70 text-sm mb-4">
                  Watch stunning moments from my aquariums: breeding, growth,
                  and natural behaviors.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Video", "Aquariums", "Breeding"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://youtube.com/shorts/Jq9aAWyC94A?si=wEPfpJDxcFF5v-kM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 smooth-transition font-medium"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Aquarium Moments */}
            <div className="group relative rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition hover:glow-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition z-10 pointer-events-none"></div>
              <div className="h-48 bg-slate-800 overflow-hidden relative">
                <img
                  src="/yt2.jpg"
                  alt="Aquarium Moments"
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-cyan-300 smooth-transition">
                  Aquarium Moments
                </h3>
                <p className="text-cyan-100/70 text-sm mb-4">
                  Daily clips that capture serene swims, feedings, and the
                  playful chaos of fry learning the tank.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Video", "Aquariums", "Breeding"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://youtube.com/shorts/p5-7IXGQC94?si=l-YEl49hmYJGyXAO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 smooth-transition font-medium"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Aquarium Showcase */}
            <div className="group relative rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition hover:glow-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition z-10 pointer-events-none"></div>
              <div className="h-48 bg-slate-800 overflow-hidden relative">
                <img
                  src="/yt11.jpg"
                  alt="Aquarium Showcase"
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-cyan-300 smooth-transition">
                  Aquarium Showcase
                </h3>
                <p className="text-cyan-100/70 text-sm mb-4">
                  Focused Angelfish breeding diaries—nest building, egg-guarding
                  pairs, and fry development.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Video", "Aquariums", "Breeding"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://youtu.be/hKKW50sYsTc?si=WHJ_EEKOIysIF7AR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 smooth-transition font-medium"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECH PROJECTS SECTION */}
        <div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Tech Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Space-X Search & Explore */}
            <div className="group relative rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition hover:glow-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition z-10 pointer-events-none"></div>
              <div className="h-48 bg-slate-800 overflow-hidden relative">
                <img
                  src="/spacex-rockets-and-missions-exploration-interface.jpg"
                  alt="Space-X"
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-cyan-300 smooth-transition">
                  Space-X Search & Explore
                </h3>
                <p className="text-cyan-100/70 text-sm mb-4">
                  A modern web application for exploring SpaceX missions,
                  rockets, and launches with advanced search and filtering.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "React", "API"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="http://space-x-search-explore.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 smooth-transition font-medium"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/hasanibnazaman/sapce_x.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 smooth-transition font-medium"
                  >
                    GitHub <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Aqua Fin - Tech Project */}
            <div className="group relative rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition hover:glow-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition z-10 pointer-events-none"></div>
              <div className="h-48 bg-slate-800 overflow-hidden relative">
                <img
                  src="/aquafin.png"
                  alt="Aqua Fin"
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-cyan-300 smooth-transition">
                  Aqua Fin – Web Application
                </h3>
                <p className="text-cyan-100/70 text-sm mb-4">
                  Full-stack aquarium management platform with database
                  integration for tracking species, parameters, and maintenance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "Database", "Full-Stack"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://aqua-fin-34ev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 smooth-transition font-medium"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/hasanibnazaman/aqua_fin.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 smooth-transition font-medium"
                  >
                    GitHub <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
