"use client"

import { Droplet, Code2, Microscope } from "lucide-react"

export default function FeaturedServices() {
  const services = [
    {
      icon: Droplet,
      title: "Aquatic Mastery",
      description:
        "Expert fish breeding, tank design, and ecosystem management. From planted scapes to specialized breeding setups.",
      label: "AQUARIUM EXPERT",
    },
    {
      icon: Code2,
      title: "Programming",
      description:
        "Full-stack development with Next.js and React. Building projects that showcase technical problem-solving.",
      label: "DEVELOPER",
    },
    {
      icon: Microscope,
      title: "Innovation",
      description:
        "Combining passion for aquatics with modern technology to create unique applications and experiences.",
      label: "CREATOR",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            My Expertise
          </h2>
          <p className="text-lg text-cyan-100/60">Three pillars of passion and skill</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-xl bg-slate-900/50 border border-cyan-900/30 hover:border-cyan-400/50 smooth-transition overflow-hidden hover:glow-cyan"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 smooth-transition"></div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-cyan-400 mb-2 tracking-wider">{service.label}</p>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-cyan-100/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
