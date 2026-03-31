export default function CaseStudies() {
  const cases = [
    {
      company: "Startup B2B SaaS (Seed)",
      problem: "Ventas dependían del founder y el pipeline no reflejaba la realidad.",
      intervention: "Rediseño de ICP, discovery y criterios de avance por etapa.",
      result: "Sistema común, reuniones más consistentes y pipeline más claro.",
    },
    {
      company: "Fintech early-stage (Pre-seed)",
      problem: "El mensaje comercial cambiaba en cada llamada y no existía un proceso homogéneo.",
      intervention: "Trabajo de messaging, estructura comercial y secuencia de seguimiento.",
      result: "Mayor claridad comercial y mejor consistencia en la ejecución.",
    },
    {
      company: "HR Tech startup (Seed)",
      problem: "Había actividad comercial, pero no una forma clara de calificar oportunidades.",
      intervention: "Definición de ICP, criterios de pipeline y playbook de discovery.",
      result: "Menor fricción en el proceso y más visibilidad sobre los deals reales.",
    },
  ];

  return (
    <section className="bg-brand-snow py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Casos
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Casos donde el problema no era falta de esfuerzo, sino falta de sistema.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.company}
              className="rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-brand-dark">{item.company}</h3>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-brand-lava">Problema</p>
                  <p className="mt-1 text-sm leading-7 text-brand-slate">{item.problem}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-brand-lava">Intervención</p>
                  <p className="mt-1 text-sm leading-7 text-brand-slate">{item.intervention}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-brand-lava">Resultado</p>
                  <p className="mt-1 text-sm leading-7 text-brand-slate">{item.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}