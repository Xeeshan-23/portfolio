"use client";

import { Cpu, Database, Share2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Ocular Disease Screening System",
      stack: ["Python", "Django", "Deep Learning", "Grad-CAM"],
      description: "Developed the backend infrastructure for a healthcare screening application. Successfully integrated deep learning diagnostic models into a production-ready Django environment, utilizing Grad-CAM heatmaps to provide explainable AI outputs for medical review.",
      keyMetrics: [
        { label: "AI Explainability", value: "Grad-CAM Heatmaps" },
        { label: "Framework", value: "Django REST-Framework Tensorflow EffecientNet" },
        { label: "Auditability", value: "Explainable Output" },
      ],
      features: [
        "Grad-CAM processing engine to map diagnostic weight areas.",
        "Model prediction pipelines integrated natively within Django tasks.",
        "Highly-visible visual highlight zones for diagnostic review.",
      ],
      visual: (
        <div className="w-full h-48 bg-slate-950/80 rounded-xl p-4 border border-white/5 overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-purple-400 font-mono text-[10px] sm:text-xs">
            <span>[Explainable AI Diagnostic]</span>
            <Cpu className="h-4 w-4" />
          </div>
          {/* Eye mock visual with Grad-CAM heatmap overlay */}
          <div className="relative flex items-center justify-center flex-grow py-2">
            <div className="relative w-20 h-20 rounded-full border-2 border-slate-700 flex items-center justify-center bg-slate-900 overflow-hidden">
              <div className="w-8 h-8 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-slate-950" />
              </div>
              {/* Heatmap highlights */}
              <div className="absolute top-4 left-6 w-8 h-8 rounded-full bg-rose-500/40 blur-md mix-blend-screen animate-pulse" />
              <div className="absolute bottom-6 right-5 w-6 h-6 rounded-full bg-amber-500/30 blur-sm mix-blend-screen animate-pulse" />
            </div>
            {/* Legend info */}
            <div className="absolute right-0 bottom-2 bg-slate-900/90 border border-purple-500/20 rounded p-1 text-[9px] font-mono text-purple-300">
              <div>High Severity Zone (Red)</div>
              <div>Grad-CAM Activation Grid</div>
            </div>
          </div>
          <div className="text-[10px] text-slate-500 text-right mt-1 border-t border-white/5 pt-1 font-mono">
            Backend Latency: ~140ms | DL Inferences Served
          </div>
        </div>
      ),
    },
    {
      title: "Multi-Tenant SaaS Platform",
      stack: ["Python", "Django", "FastAPI", "PostgreSQL"],
      description: "Engineered a robust multi-tenant backend architecture for a SaaS platform. Designed scalable PostgreSQL schemas and implemented comprehensive organization-based workspaces with strict Role-Based Access Control (RBAC).",
      keyMetrics: [
        { label: "Architecture", value: "Tenant-Isolation" },
        { label: "Security", value: "RBAC & Workspaces" },
        { label: "Primary DB", value: "PostgreSQL" },
      ],
      features: [
        "Dynamic schema selection and strict tenant data isolation.",
        "Granular permission controls with role hierarchical overrides.",
        "FastAPI service endpoints optimized for quick metadata queries.",
      ],
      visual: (
        <div className="w-full h-48 bg-slate-950/80 rounded-xl p-4 border border-white/5 font-mono text-[10px] sm:text-xs overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-indigo-400">
            <span>[DB Schema Isolation]</span>
            <Database className="h-4 w-4" />
          </div>
          <div className="space-y-2 py-2 flex-grow flex flex-col justify-center">
            <div className="flex justify-between items-center bg-slate-900 px-2 py-1.5 rounded border border-indigo-500/10">
              <span className="text-emerald-400">organization (Tenant A)</span>
              <span className="text-slate-500">ID: 0x9f1a</span>
            </div>
            <div className="pl-4 border-l border-indigo-500/20 space-y-1">
              <div className="flex justify-between text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded">
                <span>└─ users (roles: ADMIN, DEV)</span>
                <span className="text-indigo-300">RBAC Active</span>
              </div>
              <div className="flex justify-between text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded">
                <span>└─ workspaces (isolated data)</span>
                <span className="text-indigo-300">Row-Level Security</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-slate-500 text-right mt-1 border-t border-white/5 pt-1">
            {"Postgres Engine: SELECT * FROM t WHERE tenant_id = '0x9f1a'"}
          </div>
        </div>
      ),
    },
    {
      title: "Distributed Voting System",
      stack: ["Java", "Java RMI"],
      description: "Built a highly secure and reliable distributed voting application using Java RMI (Remote Method Invocation). Implemented strict concurrency control mechanisms to ensure data integrity and accurate vote tabulation across distributed network nodes.",
      keyMetrics: [
        { label: "Protocol", value: "Java RMI (RPC)" },
        { label: "Concurrency", value: "Distributed Locks" },
        { label: "State Consensus", value: "Atomic Tabulation" },
      ],
      features: [
        "Network-level Java RMI remote interface implementations.",
        "Mutex mechanisms preventing double-voting race conditions.",
        "Decentralized node syncing for fault-tolerant operation.",
      ],
      visual: (
        <div className="w-full h-48 bg-slate-950/80 rounded-xl p-4 border border-white/5 font-mono text-[10px] sm:text-xs overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-indigo-400">
            <span>[Distributed Consensus Map]</span>
            <Share2 className="h-4 w-4" />
          </div>
          {/* Node connections mockup */}
          <div className="flex justify-between items-center flex-grow py-3 px-4 relative">
            {/* SVGs to draw connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line x1="20%" y1="50%" x2="50%" y2="25%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3" />
              <line x1="80%" y1="50%" x2="50%" y2="25%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3" />
              <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#10b981" strokeWidth="1.5" />
            </svg>
            <div className="z-10 bg-slate-900 border border-white/10 rounded-lg p-1.5 flex flex-col items-center">
              <span className="text-white text-[9px]">Node A</span>
              <span className="text-emerald-400 text-[8px] font-bold">MUTEX LOCK</span>
            </div>
            <div className="z-10 bg-slate-900 border border-white/10 rounded-lg p-1.5 flex flex-col items-center">
              <span className="text-white text-[9px]">Node Registry</span>
              <span className="text-indigo-400 text-[8px]">RMI REGISTRY</span>
            </div>
            <div className="z-10 bg-slate-900 border border-white/10 rounded-lg p-1.5 flex flex-col items-center">
              <span className="text-white text-[9px]">Node B</span>
              <span className="text-slate-500 text-[8px]">Sync Pending</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-500 text-right mt-1 border-t border-white/5 pt-1">
            Tabulation Sync: AtomicInteger Thread-Safe
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[130px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-2">
            Selected Works
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Case Studies & Projects
          </h3>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 font-mono text-sm">
            Detailed breakdown of engineering achievements in web, systems, and deep learning.
          </p>
        </div>

        {/* Project Cases */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden border border-white/5 p-6 sm:p-10 transition-all duration-500 hover:border-indigo-500/20 hover:shadow-[0_15px_40px_rgba(99,102,241,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Text column */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-indigo-500/5 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] tracking-wider uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h4>

                  {/* Project Description */}
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wide">Key Architectural Focus:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-slate-300 font-mono">
                          <span className="text-indigo-500 mr-2 font-bold">&gt;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
                    {project.keyMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-[10px] font-mono text-slate-500 uppercase">{metric.label}</span>
                        <span className="text-xs font-mono text-slate-200 mt-1 font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual / Simulation column */}
                <div className="lg:col-span-5 bg-slate-900/40 border border-white/5 rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center">
                  <div className="w-full flex items-center justify-between mb-3 text-[10px] font-mono text-slate-500 uppercase">
                    <span>Architecture Blueprint</span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    </div>
                  </div>
                  {project.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
