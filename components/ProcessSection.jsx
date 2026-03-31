export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      text: "Revisamos proceso, narrativa comercial y puntos de fricción.",
    },
    {
      number: "02",
      title: "Diseño del playbook",
      text: "Definimos estructura comercial, mensajes y criterios operativos.",
    },
    {
      number: "03",
      title: "Implementación",
      text: "Lo aterrizamos con founders o equipo comercial.",
    },
    {
      number: "04",
      title: "Ajuste",
      text: "Refinamos el playbook con feedback real de mercado.",
    },
  ];

  return (
    <section id="proceso" className="bg-brand-dark py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Cómo trabajamos
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-snow sm:text-4xl">
            Un proceso corto, intensivo y orientado a implementación.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-brand-gluon p-6"
            >
              <p className="text-sm font-medium text-brand-lava">{step.number}</p>
              <h3 className="mt-4 text-lg font-semibold text-brand-snow">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-snow/70">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}