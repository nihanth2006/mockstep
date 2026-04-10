export default function Hero() {
  return (
    <section className="text-center py-28 px-6 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-green-500 opacity-20 blur-[120px] top-10 left-1/2 -translate-x-1/2"></div>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Structured Preparation Platform that helps you
        <br />
        <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Clear Interviews.
        </span>
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Prepare for top companies with structured roadmaps, real interview
        questions, coding practice, and AI mock interviews.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-green-500 hover:bg-green-400 transition px-8 py-3 rounded-full shadow-lg shadow-green-500/30">
          Start Free Practice
        </button>

        <button className="border border-gray-600 hover:border-white px-8 py-3 rounded-full transition">
          Companies
        </button>
      </div>
    </section>
  );
}
