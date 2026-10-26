"use client";
import React, { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-[#080B12] border-t border-gray-900 text-center px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500">
          © {year} Md. Ahbab Hussain Arabi. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 text-sm text-gray-400">
          <a href="https://github.com/Ahbab2006" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/md-ahbab-arabi/" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}