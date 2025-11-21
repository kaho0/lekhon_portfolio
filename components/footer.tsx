"use client";

import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-slate-950 border-t border-cyan-900/30 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-serif text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                HASAN
              </h3>
            </div>
            <p className="text-cyan-100/60 text-sm leading-relaxed">
              Passionate about aquatics, innovative code, and creating thriving
              ecosystems both digital and natural.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-lg">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Aquatics Gallery", href: "#aquatics" },
                { label: "Projects", href: "#projects" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-cyan-100/60 hover:text-cyan-300 smooth-transition flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-lg">
              Connect
            </h4>
            <p className="text-cyan-100/60 text-sm mb-4">
              Let's explore aquatics and code together.
            </p>
            <div className="space-y-3 text-sm text-cyan-100/80">
              <a
                href="mailto:zamanhasan087@gmail.com"
                className="flex items-center gap-3 px-4 py-2 rounded-lg border border-cyan-900/40 hover:border-cyan-400/60 hover:bg-cyan-400/10 smooth-transition"
              >
                <Mail className="w-4 h-4 text-cyan-300" />
                <span>zamanhasan087@gmail.com</span>
              </a>
              <a
                href="tel:+8801828749710"
                className="flex items-center gap-3 px-4 py-2 rounded-lg border border-cyan-900/40 hover:border-cyan-400/60 hover:bg-cyan-400/10 smooth-transition"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>+880 1828-749710</span>
              </a>
              <a
                href="mailto:zamanhasan087@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg glow-cyan-hover smooth-transition text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-cyan-900/30 pt-8">
          <p className="text-center text-cyan-100/40 text-sm">
            © {currentYear} Hasan. Crafted with passion for aquatics and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
