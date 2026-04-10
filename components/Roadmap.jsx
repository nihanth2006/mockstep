export default function Roadmap() {
  return (
    <section className="py-28 px-8 flex flex-col md:flex-row gap-16 items-center">
      {/* LEFT */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-6">
          Structured Roadmaps for Java Full Stack
        </h2>

        <ul className="space-y-4 text-gray-400 text-lg">
          <li>✔ Curated by Industry Experts</li>
          <li>✔ Covers DSA + Full Stack + System Design</li>
          <li>✔ Step-by-Step Weekly Plan</li>
          <li>✔ Placement Ready in 5 Weeks</li>
        </ul>
      </div>

      {/* RIGHT Timeline */}
      <div className="md:w-1/2 relative">
        {/* Vertical Line */}
        <div className="absolute left-3 top-0 h-full w-[2px] bg-green-500"></div>

        <div className="pl-10 space-y-10">
          {/* Week 1 */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
            <h3 className="font-semibold text-lg">
              Week 1 - Aptitude + Basics
            </h3>
            <p className="text-gray-400 mt-2">
              Percentages, Profit & Loss, Time & Work, Java Basics
            </p>
          </div>

          {/* Week 2 */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
            <h3 className="font-semibold text-lg">Week 2 - OOPS + Core Java</h3>
            <p className="text-gray-400 mt-2">
              OOPS, Inheritance, Polymorphism, Collections Framework
            </p>
          </div>

          {/* Week 3 */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
            <h3 className="font-semibold text-lg">Week 3 - DSA</h3>
            <p className="text-gray-400 mt-2">
              Arrays, Strings, Recursion, Sorting, Searching, Linked List
            </p>
          </div>

          {/* Week 4 */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
            <h3 className="font-semibold text-lg">Week 4 - Full Stack</h3>
            <p className="text-gray-400 mt-2">
              React, APIs, Spring Boot, Database (MySQL), REST APIs
            </p>
          </div>

          {/* Week 5 */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
            <h3 className="font-semibold text-lg">Week 5 - System Design</h3>
            <p className="text-gray-400 mt-2">
              Basics of System Design, LLD, HLD, Mock Interviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
