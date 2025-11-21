"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg font-serif font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              HASAN
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 smooth-transition"
            >
              About
            </Link>
            <Link
              href="#aquatics"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 smooth-transition"
            >
              Aquatics
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 smooth-transition"
            >
              Projects
            </Link>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg glow-cyan-hover text-sm font-medium smooth-transition"
            >
              Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cyan-400"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-cyan-900/30 pt-4">
            <Link
              href="#about"
              className="block text-sm font-medium text-slate-300 hover:text-cyan-400 smooth-transition"
            >
              About
            </Link>
            <Link
              href="#aquatics"
              className="block text-sm font-medium text-slate-300 hover:text-cyan-400 smooth-transition"
            >
              Aquatics
            </Link>
            <Link
              href="#projects"
              className="block text-sm font-medium text-slate-300 hover:text-cyan-400 smooth-transition"
            >
              Projects
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
