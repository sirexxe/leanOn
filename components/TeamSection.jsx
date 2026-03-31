const team = [
  {
    name: "Ezequiel Nicolás",
    role: "Sales Strategy & Playbook Design",
    bio: "Especialista en diseño de sistemas comerciales para startups en etapa temprana. Ha trabajado con equipos de ventas en contextos B2B SaaS, ayudando a founders a convertir su intuición comercial en procesos replicables.",
  },
  {
    name: "Yolanda Perez",
    role: "Revenue Process & Commercial Operations",
    bio: "Experta en operaciones de revenue y estructuración de pipelines. Combina visión de proceso con ejecución táctica para que los sistemas comerciales funcionen en el día a día, no solo en el papel.",
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Equipo
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Experiencia para etapas donde cada decisión comercial importa.
          </h2>
          <p className="mt-4 text-lg text-brand-dusty">
            En Lean On trabajamos con startups en momentos donde estructurar ventas correctamente
            cambia el ritmo de crecimiento.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {team.map((person) => (
            <div
              key={person.name}
              className="rounded-3xl border border-brand-dark/10 bg-brand-snow p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-brand-snow">
                {person.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-brand-dark">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-lava">{person.role}</p>
              <p className="mt-4 text-sm leading-7 text-brand-dusty">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
