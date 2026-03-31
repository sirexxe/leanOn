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
              className="group rounded-3xl border border-brand-dark/10 bg-white p-6"
            >
              <summary className="cursor-pointer list-none text-base font-medium text-brand-dark">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-brand-dusty">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}