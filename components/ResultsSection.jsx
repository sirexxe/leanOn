const results = [
  "Más consistencia comercial",
  "Menos dependencia del founder",
  "Pipeline más claro",
  "Onboarding más rápido",
  "Mejor aprendizaje de pérdidas",
];

export default function ResultsSection() {
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

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results.map((result) => (
            <div
              key={result}
              className="flex items-start gap-4 rounded-4xl border border-brand-dark/8 bg-brand-snow p-6"
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-lava"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-base font-medium text-brand-dark">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
