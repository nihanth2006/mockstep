import CompanyCard from "./CompanyCard";

export default function Companies() {
  const companies = [
    {
      name: "TCS",
      role: "Ninja",
      salary: "3.36 LPA",
      rounds: 3,
      type: "Aptitude + Technical + HR",
      hiring: true,
    },
    {
      name: "Infosys",
      role: "SE",
      salary: "3.6 LPA",
      rounds: 3,
      type: "Online Test + Technical + HR",
      hiring: false,
    },
    {
      name: "Wipro",
      role: "Project Engineer",
      salary: "3.5 LPA",
      rounds: 3,
      type: "Assessment + Technical + HR",
      hiring: false,
    },
    {
      name: "HCLTech",
      role: "GET",
      salary: "3.25 LPA",
      rounds: 3,
      type: "Aptitude + Technical + HR",
      hiring: true,
    },
  ];

  return (
    <section className="py-28 px-8 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16">
        Prepare for your favourite company
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-8">
        {companies.map((c, i) => (
          <CompanyCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
