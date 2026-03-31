export default function SolutionSection() {
  const items = [
    {
      title: "ICP",
      text: "A quién vender, con qué señales y con qué prioridad.",
    },
    {
      title: "Messaging",
      text: "Cómo explicar tu valor de forma clara y consistente.",
    },
    {
      title: "Proceso",
      text: "Cómo se estructura el pipeline y se toman decisiones.",
    },
    {
      title: "Playbook",
      text: "Cómo ejecuta el equipo de forma repetible y útil.",
    },
  ];

  return (
    <section id="servicios" className="bg-brand-snow py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Qué hacemos
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Construimos el sistema comercial que sostiene el crecimiento temprano.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-brand-dark/10 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-brand-dark">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-dusty">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}