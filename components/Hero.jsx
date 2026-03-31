import { CALENDLY_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-brand-snow">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-24 pt-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="lg:col-span-7">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Sales Playbook para startups early-stage
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tightest text-brand-dark sm:text-5xl lg:text-6xl">
            Ayudamos a startups pre-seed y seed a convertir ventas dispersas en un sistema comercial
            claro, documentado y repetible.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-dusty">
            Definimos ICP, mensaje, proceso y cadencias para que vender deje de depender de intuición.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-lava px-6 py-3.5 text-sm font-medium text-brand-snow shadow-soft transition duration-200 hover:-translate-y-0.5 hover:opacity-95"
            >
              Solicitar diagnóstico
            </a>

            <a
              href="#proceso"
              className="inline-flex items-center justify-center rounded-full border border-brand-dark/10 bg-white px-6 py-3.5 text-sm font-medium text-brand-dark transition duration-200 hover:border-brand-dark/20 hover:bg-brand-snow"
            >
              Ver cómo trabajamos
            </a>
          </div>

          <p className="mt-4 text-sm text-brand-dusty">
            Sesión inicial de 30 min · Sin compromiso
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-4xl border border-brand-gluon bg-brand-dark p-8 shadow-card">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm font-medium text-brand-snow/70">Sistema comercial</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-brand-snow/60">
                Lean On Framework
              </div>
            </div>

            <div className="space-y-4">
              {["ICP", "Messaging", "Pipeline", "Playbook"].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lava text-sm font-medium text-brand-snow">
                    {index + 1}
                  </div>
                  <div className="flex-1 rounded-2xl border border-white/10 bg-brand-gluon px-4 py-3 text-sm font-medium text-brand-snow">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm leading-6 text-brand-snow/75">
                Un sistema comercial claro permite vender con más consistencia, reducir dependencia del
                founder y acelerar aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}