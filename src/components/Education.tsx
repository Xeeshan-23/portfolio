"use client";

import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      type: "degree",
      title: "Bachelors of Science in Software Engineering",
      institution: "PMAS Arid Agriculture University",
      location: "Islamabad, Pakistan",
      period: "Graduated in: 2026",
      icon: <GraduationCap className="h-6 w-6 text-indigo-400" />,
      highlights: [
        "Developed an AI-Powered Multi-Class Ocular Disease Screening System using EfficientNet-B3 models and Grad-CAM as a Final Year Project",
        "Completed advanced coursework focused on Software Construction, Object Oriented Programming and Data Structures, Artificial Intelligence and Database Management System..",
        "Integrated Gemini API into digital healthcare platforms to enhance data pipeline capabilities.",
      ],
    },
    {
      type: "certificate",
      title: "Google Career Certificate: Data Analytics",
      institution: "Google (via Coursera)",
      location: "Credential Online",
      period: "Completed Professional Certificate",
      icon: <Award className="h-6 w-6 text-emerald-400" />,
      highlights: [
        "Mastered data cleaning, analysis, visualization, and SQL query optimization.",
        "Learned Python and R programming language and data visualization using Tableau.",
        "Applied analytical processes to solve complex data-driven business challenges.",
      ],
    },
    {
      type: "certificate",
      title: "Google IT Automation with Python",
      institution: "Google (via Coursera)",
      location: "Credential Online",
      period: "Completed Professional Certificate",
      icon: <Award className="h-6 w-6 text-indigo-400" />,
      highlights: [
        "Acquired in-demand skills in Python programming and IT automation to streamline system administration tasks.",
        "Demonstrated proficiency in version control using Git and GitHub for collaborative development.",
        "Developed the ability to write scripts for configuration management and apply automation at scale within Cloud environments.",
      ],
    },
  ];

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/20">
      {/* Glow effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-2">
            Qualifications
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Certifications
          </h3>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 font-mono text-sm">
            Academic foundations and professional certifications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-12">
          {educationList.map((item, index) => (
            <div key={index} className="relative pl-8 sm:pl-12 group">
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 p-1 bg-slate-900 border border-slate-700 rounded-xl group-hover:border-indigo-500 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {item.icon}
              </div>

              {/* Card content */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-slate-700/60 hover:shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide uppercase bg-slate-800 text-indigo-400 border border-slate-700 mb-2">
                      {item.type === "degree" ? "Academic Degree" : "Professional Credential"}
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm font-mono text-slate-300 mt-1">
                      {item.institution}
                    </p>
                  </div>
                  
                  {/* Meta Details */}
                  <div className="flex flex-col text-slate-400 text-xs font-mono sm:text-right gap-1 mt-2 sm:mt-0">
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wide flex items-center gap-1 mb-3">
                    <BookOpen className="h-3.5 w-3.5" /> Key Focus & Achievements:
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs sm:text-sm text-slate-400 font-mono">
                        <span className="text-indigo-500 mr-2.5 font-bold">└─</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
