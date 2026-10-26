"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "../../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#0d1322] border-t border-gray-900 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured <span className="text-amber-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#0B0F19] border border-gray-800 hover:border-amber-400/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative w-full h-44 bg-gray-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Summary */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition"
                >
                  View More / Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0e1424] border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
            
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase text-amber-400 tracking-wider mb-2">
                Main Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-gray-800 text-gray-200 px-3 py-1 rounded border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase text-amber-400 tracking-wider mb-1">
                  Key Challenges Solved
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {selectedProject.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase text-amber-400 tracking-wider mb-1">
                  Potential Improvements & Future Plans
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {selectedProject.futurePlans.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
              {selectedProject.liveLink && selectedProject.liveLink !== "#" && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold rounded-lg"
                >
                  Live Preview
                </a>
              )}
              {selectedProject.githubClient && (
                <a
                  href={selectedProject.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold rounded-lg border border-gray-700"
                >
                  Client Code (GitHub)
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}