import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Roadmap from "@/components/Roadmap";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Companies />
      <Roadmap />
      <Experience />
    </main>
  );
}
