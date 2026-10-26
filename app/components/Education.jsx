import React from "react";

export default function Education() {
  const educationItems = [
    {
      title: "AI-Driven Full Stack Web Engineering",
      institution: "Programming Hero",
      period: "Batch 14",
      description: "Comprehensive coursework covering React, Next.js, Node.js, Express, MongoDB, full-stack architecture, and deployment pipelines.",
    },
    {
      title: "Higher Secondary & Core Academics",
      institution: "Academic Institution",
      period: "Completed",
      description: "Focused on science, analytical problem solving, logic, and computing foundations.",
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#0B0F19] border-t border-gray-900 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Education & <span className="text-amber-400">Training</span>
        </h2>

        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#0d1322] border-l-4 border-amber-400 rounded-r-xl border-y border-r border-gray-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2 py-1 rounded w-fit mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-gray-400 font-medium mb-2">{item.institution}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}