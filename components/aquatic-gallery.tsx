"use client";

import { useState } from "react";

export default function AquaticGallery() {
  const aquatics = [
    {
      title: "Cherry Red Shrimp Colony",
      description:
        "Selective-bred shrimp that polish leaves and stones with nonstop grazing.",
      image: "/cherry-red-shrimp.png",
    },
    {
      title: "Red and White Oranda Goldfish",
      description:
        "Flowing-finned showpiece whose wen pops against pristine open water.",
      image: "/oranda-goldfish.jpg",
    },
    {
      title: "Low-Tech Planted Aquarium",
      description:
        "Sand base, driftwood, and patient growth proving simple methods thrive.",
      image: "/planted-aquarium-low-tech-setup.jpg",
    },
    {
      title: "Natural Ecosystem - Neon & Platies",
      description:
        "A jungled tank where Neons, Platies, and a shy Goby share wood and grass.",
      image: "/neon-tetras-ecosystem.png",
    },
    {
      title: "Neon Tetras",
      description:
        "Electric blue-and-red schooling fish that glow in planted tanks.",
      image: "/neon-tetras.png",
    },
    {
      title: "Red Female Betta",
      description:
        "Graceful fins and fiery color tucked among stones and lush plants.",
      image: "/red-betta.png",
    },
    {
      title: "Flowerhorn Cichlid",
      description:
        "Bold personality fish sporting a signature head hump and red spots.",
      image: "/flowerhorn-cichlid.png",
    },
    {
      title: "Vampire Crab",
      description:
        "Tiny semi-terrestrial crab flashing neon reds and blues between rocks.",
      image: "/vampire-crab.png",
    },
    {
      title: "Blood Parrot Cichlids",
      description:
        "Round orange buddies, one in a terracotta cave and one cruising the sand.",
      image: "/blood-parrot-cichlids.png",
    },
    {
      title: "Striped Angelfish",
      description:
        "Paired angels with red eyes hovering near a gentle sponge filter flow.",
      image: "/striped-angelfish.png",
    },
    {
      title: "Male Dwarf Gourami",
      description:
        "Blue and amber jewel weaving through grassy foreground with long feelers.",
      image: "/dwarf-gourami.jpg",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const featuredAquatics = aquatics.slice(0, 4);
  const remainingAquatics = aquatics.slice(4);

  return (
    <section id="aquatics" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-linear-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            My Aquatic Collection
          </h2>
          <p className="text-lg text-cyan-100/60 max-w-2xl mx-auto">
            A showcase of the species I've cared for, bred, and loved through my
            aquatics journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredAquatics.map((aquatic, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition z-10 pointer-events-none"></div>

              {/* Image Container */}
              <div className="h-64 bg-slate-900 overflow-hidden relative">
                <img
                  src={aquatic.image || "/placeholder.svg"}
                  alt={aquatic.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-cyan-300 smooth-transition">
                  {aquatic.title}
                </h3>
                <p className="text-cyan-100/70 text-sm leading-relaxed group-hover:text-cyan-100/90 smooth-transition">
                  {aquatic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {!showAll && remainingAquatics.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/40 text-cyan-200 font-semibold bg-slate-900/40 hover:bg-cyan-400/10 hover:text-white smooth-transition"
            >
              Load more species
            </button>
          </div>
        )}
        {showAll && remainingAquatics.length > 0 && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {remainingAquatics.map((aquatic, index) => (
              <div
                key={aquatic.title}
                className="group relative overflow-hidden rounded-xl border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition z-10 pointer-events-none"></div>
                <div className="h-64 bg-slate-900 overflow-hidden relative">
                  <img
                    src={aquatic.image || "/placeholder.svg"}
                    alt={aquatic.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                </div>
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-cyan-300 smooth-transition">
                    {aquatic.title}
                  </h3>
                  <p className="text-cyan-100/70 text-sm leading-relaxed group-hover:text-cyan-100/90 smooth-transition">
                    {aquatic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
