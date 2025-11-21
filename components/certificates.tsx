"use client";

import { Award, Briefcase, FileText, ExternalLink } from "lucide-react";

export default function Certificates() {
  const jobCertificates = [
    {
      title: "Marketing Manager",
      organization: "Aqua Fish Bangladesh",
      period: "April 10, 2023 - July 1, 2024",
      image: "/logo.png",
      highlights: [
        "Fish Care and Maintenance",
        "Aquatic Plants & Equipment Management",
        "Customer Guidance & Support",
        "Digital Marketing & Sales",
      ],
      description:
        "Responsible for marketing, sales, and fish care management with expertise in tank maintenance and customer relations. Demonstrated dedication to aquatic life and business growth.",
    },
  ];

  const primaryJob = jobCertificates[0];

  const completionCertificates = [
    {
      title: "Inbound Marketing Certified",
      organization: "HubSpot Academy",
      date: "October 28, 2025",
      expiryDate: "27 November 2027",
      image: "/marketing.pdf",
      certificationCode: "2ab9c1596c7249679d12d32874f2f41",
      pdfLink: "/marketing.pdf",
    },
    {
      title: "Sustainable Diet - One Planet. One Health",
      organization: "UNITAR, UN CC:Learn & Danone",
      date: "October 31, 2025",
      expiryDate: "N/A",
      image: "/unicef.pdf",
      certificationCode: "Certificate of Completion",
      pdfLink: "/unicef.pdf",
    },
  ];

  return (
    <section id="certificates" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-cyan-100/60 max-w-2xl mx-auto">
            Professional credentials and completed training programs
          </p>
        </div>

        {/* Job Certificate */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-serif font-bold text-cyan-300">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-10">
            {/* Aqua Fish Bangladesh job detail card */}
            <div className="group rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition hover:glow-cyan">
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                    {primaryJob.organization}
                  </span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-2">
                  {primaryJob.title}
                </h4>
                <p className="text-cyan-100/60 text-sm mb-4">
                  {primaryJob.period}
                </p>
                <p className="text-cyan-100/70 mb-4">
                  {primaryJob.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {primaryJob.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Event highlight gallery */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
                  Fishfare Activation
                </p>
                <h4 className="text-2xl font-serif font-bold text-white mt-1 mb-2">
                  Leading the promotional strategy for Aqua Fish Bangladesh in
                  2024
                </h4>
                <p className="text-cyan-100/70">
                  This event was a key milestone in expanding our brand
                  visibility while showcasing premium aquatic experiences to new
                  audiences across the region.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["/j1.jpg", "/j2.jpg", "/j3.jpg", "/j4.jpg"].map(
                  (image, idx) => (
                    <div
                      key={idx}
                      className="relative h-32 md:h-36 rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/60 group hover:border-cyan-400/50 smooth-transition"
                    >
                      <img
                        src={image}
                        alt="Fishfare event display"
                        className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Completion Certificates */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-serif font-bold text-cyan-300">
              Course Certifications
            </h3>
          </div>

          <div className="space-y-6">
            {completionCertificates.map((cert, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900/50 hover:border-cyan-400/50 smooth-transition hover:glow-cyan"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                      {cert.organization}
                    </span>
                  </div>

                  <h4 className="text-2xl font-serif font-bold text-white mb-3">
                    {cert.title}
                  </h4>

                  <div className="flex flex-wrap gap-4 text-sm text-cyan-100/70 mb-4">
                    <p>
                      <span className="text-cyan-400 font-semibold">
                        Issued:
                      </span>{" "}
                      {cert.date}
                    </p>
                    <p>
                      <span className="text-cyan-400 font-semibold">
                        Valid Until:
                      </span>{" "}
                      {cert.expiryDate}
                    </p>
                  </div>

                  <p className="text-xs text-cyan-100/60 mb-4 break-all">
                    <span className="text-cyan-400 font-semibold">Code:</span>{" "}
                    {cert.certificationCode}
                  </p>

                  <div className="pt-4 border-t border-cyan-900/30 flex flex-wrap gap-3">
                    {cert.pdfLink || cert.image?.endsWith(".pdf") ? (
                      <a
                        href={cert.pdfLink || cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 smooth-transition font-medium"
                      >
                        View PDF <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-xs text-cyan-100/50">
                        Verified Credential
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
