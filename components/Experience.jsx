export default function Experience() {
  return (
    <section className="py-28 px-8">
      {/* 🔥 Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Real Interview Experiences
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-green-400 transition">
          <p className="text-gray-300">
            They asked about cloud basics and virtualization...
          </p>
          <p className="mt-4 text-green-400 font-semibold">Sneha - HCLTech</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-green-400 transition">
          <p className="text-gray-300">
            Two technical rounds covering C programming...
          </p>
          <p className="mt-4 text-green-400 font-semibold">
            Karan - Tech Mahindra
          </p>
        </div>
      </div>
    </section>
  );
}
