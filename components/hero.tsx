"use client";

export default function Hero() {
  return (
    <section
      id="about"
      className="py-16 bg-linear-to-b from-slate-950 to-blue-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-slate-900/80 to-blue-900/40 rounded-2xl p-8 md:p-12 mb-10 border border-cyan-900/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div>
                <p className="text-sm text-cyan-400 font-semibold mb-2 tracking-wider uppercase">
                  Welcome, Friend!
                </p>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                  Hi, I'm Hasan
                </h3>
                <p className="text-cyan-100/80 mb-6 leading-relaxed text-lg">
                  I'm deeply passionate about aquatics and the intricate
                  ecosystems we create and maintain. What started as a hobby has
                  evolved into comprehensive expertise in water chemistry,
                  species behavior, habitat design, and sustainable aquatic
                  environments.
                </p>
                <a
                  href="#projects"
                  className="inline-block px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg glow-cyan-hover text-base font-semibold smooth-transition"
                >
                  Explore My Work
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-80 bg-slate-800 border border-cyan-900/30">
              <img
                src="/myimage.jpg"
                alt="Hasan with aquarium"
                className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
