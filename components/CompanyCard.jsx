export default function CompanyCard({
  name,
  role,
  salary,
  rounds,
  type,
  hiring,
}) {
  return (
    <div
      className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 
    hover:border-green-400 hover:scale-105 transition duration-300 shadow-lg"
    >
      {/* Top */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{name}</h2>

        {hiring && (
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
            Hiring Now
          </span>
        )}
      </div>

      {/* Role */}
      <p className="text-gray-400 mt-2">{role}</p>

      {/* Process */}
      <p className="text-gray-500 text-sm mt-2">
        {rounds} Rounds • {type}
      </p>

      {/* Salary */}
      <p className="text-green-400 mt-3 font-semibold">{salary}</p>
    </div>
  );
}
