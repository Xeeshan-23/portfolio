"use client";

import { ArrowRight, Terminal, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-[250px] w-[250px] rounded-full bg-purple-500/15 blur-[90px] animate-pulse-glow" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 font-mono text-xs w-fit mb-6 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-spin-slow" />
            <span>Open to work</span>
          </div>

          <p className="font-mono text-sm tracking-widest text-indigo-400 mb-2">
            {`console.log("Hello, I'm");`}
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Muhammad Zeeshan Sadiq
          </h1>

          <h2 className="text-xl sm:text-2xl font-mono text-slate-300 font-medium tracking-tight mb-6">
            FullStack Developer & AI Engineer <span className="text-indigo-400">|</span> Python, Django, Restful API, FastAPI, TensorFlow
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
            I am a Software Engineer specializing in backend architectures, API development, and AI integration. I build scalable, multi-tenant systems using Python, Django, and FastAPI, and I have experience deploying deep learning models into production environments. I am passionate about creating robust infrastructure and designing intelligent, data-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 font-mono text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/Xeeshan-23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 font-mono text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Right column: Interactive Code Terminal Visual */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-slate-500 font-mono text-xs">developer_profile.py</span>
              <Terminal className="h-3.5 w-3.5 text-slate-500" />
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 bg-slate-950/40">
              <div className="text-slate-500"># Developer Profile</div>
              <div>
                <span className="text-indigo-400">class</span>{" "}
                <span className="text-emerald-400">BackendDeveloper</span>:
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">def</span>{" "}
                <span className="text-blue-400">__init__</span>(self):
              </div>
              <div className="pl-8">
                self.name = <span className="text-amber-300">{"\"Muhammad Zeeshan Sadiq\""}</span>
              </div>
              <div className="pl-8">
                self.role = <span className="text-amber-300">{"\"Backend Software Engineer\""}</span>
              </div>
              <div className="pl-8">
                self.location = <span className="text-amber-300">{"\"Islamabad, Pakistan\""}</span>
              </div>
              <div className="pl-8">
                self.stack = [
              </div>
              <div className="pl-12">
                <span className="text-amber-300">{"\"Python\""}</span>,{" "}
                <span className="text-amber-300">{"\"Django\""}</span>,{" "}
                <span className="text-amber-300">{"\"FastAPI\""}</span>,{" "}
                <span className="text-amber-300">{"\"PostgreSQL\""}</span>
              </div>
              <div className="pl-8">]</div>
              
              <div className="pl-4 mt-2">
                <span className="text-indigo-400">def</span>{" "}
                <span className="text-blue-400">get_specialities</span>(self):
              </div>
              <div className="pl-8">
                <span className="text-indigo-400">return</span> [
              </div>
              <div className="pl-12 flex items-center gap-1.5">
                <span className="text-amber-300">{"\"Scalable Architectures\""}</span>,
              </div>
              <div className="pl-12">
                <span className="text-amber-300">{"\"Multi-Tenant Systems\""}</span>,
              </div>
              <div className="pl-12">
                <span className="text-amber-300">{"\"AI Model Serving\""}</span>
              </div>
              <div className="pl-8">]</div>

              <div className="mt-4 text-slate-500 font-mono">
                &gt;&gt;&gt; dev = BackendDeveloper()
              </div>
              <div className="text-slate-500 font-mono">
                &gt;&gt;&gt; dev.get_specialities()
              </div>
              <div className="text-indigo-400">
                {"['Scalable Architectures', 'Multi-Tenant Systems', 'AI Model Serving']"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
