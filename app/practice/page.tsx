"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PracticePage() {
  const router = useRouter();

  const [difficulty, setDifficulty] = useState("all");

  const problems = [
    { name: "Two Sum", level: "easy" },
    { name: "Palindrome Check", level: "easy" },
    { name: "Longest Substring", level: "medium" },
    { name: "Merge Intervals", level: "medium" },
    { name: "LRU Cache", level: "hard" },
  ];

  const filtered =
    difficulty === "all"
      ? problems
      : problems.filter((p) => p.level === difficulty);

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md 
        border border-white/10 rounded-full hover:bg-green-500 hover:text-black transition z-50"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">Coding Practice</h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10">
        {["all", "easy", "medium", "hard"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={`px-4 py-2 rounded-full capitalize ${
              difficulty === level ? "bg-green-500" : "bg-white/10"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Problems */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 
            hover:border-green-400 hover:scale-105 transition duration-300 shadow-lg"
          >
            {/* Problem Name */}
            <h2 className="text-lg font-semibold">{p.name}</h2>

            {/* Difficulty Badge */}
            <span
              className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                p.level === "easy"
                  ? "bg-green-500/20 text-green-400"
                  : p.level === "medium"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {p.level}
            </span>

            {/* Button */}
            <button
              className="mt-4 w-full bg-green-500/10 border border-green-400 text-green-400 
              py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              Solve Problem →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
