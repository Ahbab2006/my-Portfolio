export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubClient: string;
  challenges: string[];
  futurePlans: string[];
}

export const projectsData: Project[] = [
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    description: "A daily commodity market price tracking web application providing real-time local market rates and price trend analysis.",
    technologies: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "Vercel"],
    liveLink: " https://bazar-dor-1zgd.vercel.app/",
    githubClient: "https://github.com/Ahbab2006/bazar-dor",
    challenges: [
      "Managing real-time synchronization with dynamic market price adjustments.",
      "Optimizing client-side rendering performance on mobile networks."
    ],
    futurePlans: [
      "Implement multi-city localization and SMS notification alerts for daily price drops.",
      "Add interactive data visualization charts for seasonal price forecasting."
    ]
  },
  {
    id: "fitlog",
    title: "FitLog Workout Tracker",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    description: "A clean, dark-themed fitness platform designed to schedule workout sessions, monitor reps/sets, and track health milestones.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveLink: "https://fit-log-eight-phi.vercel.app/",
    githubClient: "https://github.com/Ahbab2006/fit-log",
    challenges: [
      "Structuring complex nested state for custom workout routine builders.",
      "Designing a dark aesthetic with high accessibility and contrast compliance."
    ],
    futurePlans: [
      "Integrate automated calorie and nutrition tracking.",
      "Add offline PWA (Progressive Web App) caching support."
    ]
  },
  {
  id: "dev-stack-builder",
  title: "Dev Stack Builder",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  description: "An interactive dev stack builder web application where developers can explore technologies, filter through categories, and manage a custom tech stack sidebar in real-time.",
  technologies: ["React.js", "Tailwind CSS", "DaisyUI", "React-Toastify", "Vite", "JSON"],
  liveLink: " https://devstacka052602.netlify.app/",
  githubClient: "https://github.com/Ahbab2006/dev-stack",
  challenges: [
    "Preventing duplicate technology selections in the sidebar while providing instant feedback via React-Toastify.",
    "Designing a dynamic button state that disables and updates text to 'Added to Stack' reactively per card.",
    "Managing asynchronous local JSON data fetching with an explicit loading spinner state."
  ],
  futurePlans: [
    "Add category filter tabs and search functionality to query technologies dynamically.",
    "Enable localStorage persistence and one-click stack export as a markdown README badge snippet."
  ]
}
];