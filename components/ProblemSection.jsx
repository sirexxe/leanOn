export default function ProblemSection() {
  const problems = [
    "El founder cierra la mayoría de ventas",
    "Cada conversación comercial es distinta",
    "No hay criterios claros en el pipeline",
    "El equipo no replica lo que funciona",
    "No se aprende de los deals perdidos",
    "El crecimiento depende de improvisación",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            El problema
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Si vender depende de personas concretas, no tienes un sistema.
          </h2>
          <p className="mt-4 text-lg text-brand-dusty">
            Estas señales suelen indicar que el problema no es esfuerzo, sino estructura comercial.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-3xl border border-brand-dark/10 bg-brand-snow p-6"
            >
              <p className="text-base font-medium text-brand-dark">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}