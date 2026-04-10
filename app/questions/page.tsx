"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuestionsPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const questions = [
    {
      company: "TCS",
      question: "Find largest element in array",
      level: "easy",
      tag: "Array",
    },
    {
      company: "Infosys",
      question: "Reverse a string",
      level: "easy",
      tag: "String",
    },
    {
      company: "Wipro",
      question: "Check palindrome",
      level: "easy",
      tag: "String",
    },
    {
      company: "Amazon",
      question: "Two Sum Problem",
      level: "medium",
      tag: "Array",
    },
    {
      company: "Google",
      question: "Longest Substring",
      level: "hard",
      tag: "Sliding Window",
    },
  ];

  const filtered = questions.filter((q) =>
    q.company.toLowerCase().includes(search.toLowerCase())
  );

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
      <h1 className="text-4xl font-bold text-center mb-10">
        Previous Questions
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg w-80 focus:outline-none focus:border-green-400"
        />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((q, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 
            hover:border-green-400 hover:scale-105 transition duration-300 shadow-lg"
          >
            {/* Company */}
            <h2 className="text-lg font-semibold">{q.company}</h2>

            {/* Question */}
            <p className="text-gray-300 mt-2">{q.question}</p>

            {/* Tag */}
            <p className="text-gray-500 text-sm mt-2">
              Topic: {q.tag}
            </p>

            {/* Difficulty Badge */}
            <span
              className={`inline-block mt-3 text-xs px-2 py-1 rounded-full ${
                q.level === "easy"
                  ? "bg-green-500/20 text-green-400"
                  : q.level === "medium"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {q.level}
            </span>

            {/* Button */}
            <button
              className="mt-4 w-full bg-green-500/10 border border-green-400 text-green-400 
              py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              Solve →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}