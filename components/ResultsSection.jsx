export default function ResultsSection() {
  const results = [
    "Más consistencia comercial",
    "Menos dependencia del founder",
    "Pipeline más claro",
    "Onboarding más rápido",
    "Mejor aprendizaje de pérdidas",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Outcomes
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            El objetivo no es vender más esta semana. Es vender mejor cada semana.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((result) => (
            <div
              key={result}
              className="rounded-3xl border border-brand-dark/10 bg-brand-snow p-6"
            >
              <p className="text-base font-medium text-brand-dark">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}