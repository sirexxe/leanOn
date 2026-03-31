const items = [
  { value: "+20", label: "playbooks diseñados" },
  { value: "Pre-seed · Seed", label: "Startups early-stage" },
  { value: "Semanas", label: "No meses, para implementar" },
];

export default function Credibility() {
  return (
    <section className="border-y border-brand-dark/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-px md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.value}
              className={`px-8 py-6 text-center ${index > 0 ? "md:border-l md:border-brand-dark/10" : ""}`}
            >
              <p className="text-2xl font-semibold tracking-tightest text-brand-dark">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-brand-dusty">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
