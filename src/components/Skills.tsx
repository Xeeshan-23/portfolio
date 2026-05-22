"use client";

import { Code2, Database, Network, Brain } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & Frameworks",
      icon: <Code2 className="h-6 w-6 text-indigo-400" />,
      skills: ["Python", "Django", "FastAPI", "Java RMI"],
      description: "Building robust, maintainable, and type-safe server logics and APIs.",
    },
    {
      title: "Database Architecture",
      icon: <Database className="h-6 w-6 text-emerald-400" />,
      skills: ["PostgreSQL", "Schema Design", "Concurrency Control"],
      description: "Designing optimized schemas, managing transactions, and handling locking.",
    },
    {
      title: "System Design",
      icon: <Network className="h-6 w-6 text-indigo-400" />,
      skills: ["Multi-Tenant Architectures", "RBAC", "Microservices"],
      description: "Crafting secure SaaS foundations, workspaces, and decoupled systems.",
    },
    {
      title: "AI/ML Integration",
      icon: <Brain className="h-6 w-6 text-purple-400" />,
      skills: ["Serving Deep Learning Models", "Grad-CAM Heatmaps", "Explainable AI"],
      description: "Integrating complex deep learning pipelines into high-performance web systems.",
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-2">
            Technical Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Backend Engineering Skills
          </h3>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 font-mono text-sm">
            Leveraging modern tools and architectural patterns to create scalable software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] hover:border-indigo-500/20 hover:shadow-[0_8px_30px_rgb(99,102,241,0.06)] group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 group-hover:border-indigo-500/30 transition-all duration-300">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-white font-mono">
                  {category.title}
                </h4>
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-xs font-mono text-slate-300 transition-all duration-300 hover:border-indigo-500/40 hover:text-indigo-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
