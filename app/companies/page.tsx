"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CompaniesPage() {
  const router = useRouter();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const companies = [
    {
      name: "TCS",
      type: "service",
      role: "Ninja",
      salary: "3.36 LPA",
      hiring: true,
    },
    {
      name: "Infosys",
      type: "service",
      role: "SE",
      salary: "3.6 LPA",
    },
    {
      name: "Wipro",
      type: "service",
      role: "Project Engineer",
      salary: "3.5 LPA",
    },
    {
      name: "HCLTech",
      type: "service",
      role: "GET",
      salary: "3.25 LPA",
      hiring: true,
    },
    {
      name: "Google",
      type: "product",
      role: "SDE",
      salary: "30 LPA",
    },
    {
      name: "Amazon",
      type: "product",
      role: "SDE",
      salary: "28 LPA",
    },
    {
      name: "Microsoft",
      type: "product",
      role: "SDE",
      salary: "32 LPA",
    },
  ];

  const filtered = companies.filter((c) => {
    return (
      (filter === "all" || c.type === filter) &&
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      {/* 🔙 Back Button (ADDED HERE) */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md 
        border border-white/10 rounded-full hover:bg-green-500 hover:text-black transition z-50"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore Companies
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg w-80 focus:outline-none focus:border-green-400"
        />
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${
            filter === "all" ? "bg-green-500" : "bg-white/10"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("service")}
          className={`px-4 py-2 rounded-full ${
            filter === "service" ? "bg-green-500" : "bg-white/10"
          }`}
        >
          Service
        </button>

        <button
          onClick={() => setFilter("product")}
          className={`px-4 py-2 rounded-full ${
            filter === "product" ? "bg-green-500" : "bg-white/10"
          }`}
        >
          Product
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((c, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 
            hover:border-green-400 hover:scale-105 transition duration-300 shadow-lg"
          >
            {/* Top */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{c.name}</h2>

              {c.hiring && (
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                  Hiring
                </span>
              )}
            </div>

            {/* Role */}
            <p className="text-gray-400 mt-2">{c.role}</p>

            {/* Type */}
            <p className="text-gray-500 text-sm mt-1 capitalize">
              {c.type} company
            </p>

            {/* Salary */}
            <p className="text-green-400 mt-3 font-semibold">{c.salary}</p>

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
