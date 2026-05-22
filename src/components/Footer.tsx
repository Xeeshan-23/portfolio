"use client";

import { useState } from "react";
import { Mail, MapPin, Copy, Check, Terminal, ExternalLink } from "lucide-react";

export default function Footer() {
  const emailAddress = "zeeshansadiq356@gmail.com"; // Easily configurable email
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900 overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-indigo-500/5 blur-[100px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Let&apos;s Build Scalable <br />
              <span className="text-indigo-400">Systems Together</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              I am focused on designing multi-tenant SaaS structures, performant REST/gRPC API layers, and serving deep learning models efficiently. Reach out if you&apos;re looking for a dedicated backend specialist.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Terminal className="h-4 w-4 text-indigo-500" />
              <span>Available for full-time roles & contracts</span>
            </div>
          </div>

          {/* Right Column: Contact Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card (Mailto) */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 group sm:col-span-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-indigo-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</span>
                    <h4 className="text-sm font-mono text-slate-300">{emailAddress}</h4>
                  </div>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Open Email Client
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/Xeeshan-23"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-white/5 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-300 group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">GitHub Profile</span>
                  <h4 className="text-sm font-mono text-slate-300">@Xeeshan-23</h4>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors inline-flex items-center gap-1">
                  github.com/Xeeshan-23
                  <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Location</span>
                  <h4 className="text-sm font-mono text-slate-300">Islamabad / Rawalpindi</h4>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <span className="text-xs font-mono text-slate-400">
                  Pakistan Area
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Muhammad Zeeshan Sadiq. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-indigo-400">Next.js & Tailwind CSS v4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
