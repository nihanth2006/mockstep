import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-black text-white border-b border-gray-800">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">mockstep</h1>
      </Link>

      {/* Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/companies" className="hover:text-green-400 transition">
          Companies
        </Link>

        <Link href="/questions" className="hover:text-green-400 transition">
          Previous Questions
        </Link>

        <Link href="/roadmaps" className="hover:text-green-400 transition">
          Roadmaps
        </Link>

        <Link href="/practice" className="hover:text-green-400 transition">
          Practice
        </Link>
      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-4">
        <button className="hover:text-green-400 transition">Log in</button>

        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-full transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
