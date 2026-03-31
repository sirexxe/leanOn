const faqs = [
  {
    question: "¿Es demasiado pronto para esto?",
    answer:
      "No. Suele ser el mejor momento para estructurar lo que ya funciona antes de escalarlo con fricción.",
  },
  {
    question: "¿Sirve si todavía vende el founder?",
    answer:
      "Sí. Muchas veces el punto de partida es precisamente convertir la experiencia del founder en un sistema replicable.",
  },
  {
    question: "¿Cuánto dura el proceso?",
    answer:
      "Depende del punto de partida, pero el objetivo es trabajar en semanas, no en proyectos largos y difusos.",
  },
  {
    question: "¿Es estrategia o ejecución?",
    answer:
      "El foco está en diseñar un sistema usable, documentado y aterrizable en el día a día comercial.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-brand-snow py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Preguntas que suelen aparecer antes de dar el paso.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-4xl border border-brand-dark/8 bg-brand-snow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-base font-medium text-brand-dark">
                {faq.question}
                <svg
                  className="ml-6 h-4 w-4 shrink-0 text-brand-dusty transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-sm leading-7 text-brand-dusty">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}