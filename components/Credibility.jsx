export default function Credibility() {
  const items = [
    "+20 playbooks diseñados",
    "Startups pre-seed a seed",
    "Implementación en semanas, no meses",
  ];

  return (
    <section className="border-y border-brand-dark/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-brand-dark/10 bg-brand-snow px-6 py-5 text-sm font-medium text-brand-slate"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}