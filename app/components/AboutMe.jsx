import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-[#0d1322] border-t border-gray-900 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          About <span className="text-amber-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
            <h3 className="text-lg font-bold text-white">My Journey into Software Engineering</h3>
            <p>
              My coding journey started with a curiosity about how dynamic web pages work behind the scenes. From writing my first HTML and CSS lines to architecting full-stack applications with React, Next.js, and Node.js, building web solutions has become my daily focus.
            </p>
            <p>
              I take genuine enjoyment in solving architectural problems, optimizing performance bottlenecks, and designing dark-themed user interfaces that are both accessible and clean.
            </p>
          </div>

          <div className="space-y-4 bg-[#0B0F19] p-6 rounded-2xl border border-gray-800 text-sm">
            <h3 className="text-lg font-bold text-amber-400">Beyond The Screen</h3>
            <p className="text-gray-300">
              When I am not writing code or debugging APIs, I like to balance my life with activities that refresh my focus:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">•</span> Continuous learning & tech reading
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">•</span> Fitness routines & health tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">•</span> Sports, strategy games, and nature walks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}