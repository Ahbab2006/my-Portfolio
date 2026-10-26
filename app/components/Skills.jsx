import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "DaisyUI"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "Better Auth"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "Vercel", "VS Code", "Postman", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0B0F19] border-t border-gray-900 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Technical <span className="text-amber-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="p-6 bg-[#0d1322] border border-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-200 rounded-md border border-gray-700"
                  >
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