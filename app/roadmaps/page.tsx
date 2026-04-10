"use client";

import { useRouter } from "next/navigation";

export default function RoadmapsPage() {
  const router = useRouter();

  const roadmap = [
    {
      week: "Week 1",
      topic: "Aptitude + Java Basics",
      tag: "Basics",
    },
    {
      week: "Week 2",
      topic: "OOPS + Core Java",
      tag: "Core Java",
    },
    {
      week: "Week 3",
      topic: "DSA (Arrays, Strings, Recursion)",
      tag: "DSA",
    },
    {
      week: "Week 4",
      topic: "Full Stack (React + Spring Boot)",
      tag: "Full Stack",
    },
    {
      week: "Week 5",
      topic: "System Design + Mock Interviews",
      tag: "System Design",
    },
  ];

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
      <h1 className="text-4xl font-bold text-center mb-16">
        Roadmap to Crack Interviews
      </h1>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto space-y-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-green-500"></div>

        {roadmap.map((r, i) => (
          <div
            key={i}
            className="relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 
            hover:border-green-400 hover:scale-[1.02] transition duration-300 shadow-lg"
          >
            {/* Dot */}
            <div className="absolute -left-[10px] top-6 w-4 h-4 bg-green-500 rounded-full"></div>

            {/* Week */}
            <h2 className="text-xl font-semibold">{r.week}</h2>

            {/* Topic */}
            <p className="text-gray-300 mt-2">{r.topic}</p>

            {/* Tag */}
            <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
              {r.tag}
            </span>

            {/* Button */}
            <button
              className="mt-4 w-full bg-green-500/10 border border-green-400 text-green-400 
              py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
