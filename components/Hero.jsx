import { CALENDLY_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-brand-snow">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-12 lg:px-8 lg:py-32">
        <div className="lg:col-span-7">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Sales Playbook para startups early-stage
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Ayudamos a startups pre-seed y seed a convertir ventas dispersas en un sistema comercial
            claro, documentado y repetible.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-dusty">
            Definimos ICP, mensaje, proceso y cadencias para que vender deje de depender de intuición.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-lava px-6 py-3.5 text-sm font-medium text-brand-snow transition hover:opacity-90"
            >
              Solicitar diagnóstico
            </a>

            <a
              href="#proceso"
              className="inline-flex items-center justify-center rounded-full border border-brand-dusty/30 px-6 py-3.5 text-sm font-medium text-brand-dark transition hover:border-brand-dark/40"
            >
              Ver cómo trabajamos
            </a>
          </div>

          <p className="mt-4 text-sm text-brand-dusty">
            Sesión inicial de 30 min · Sin compromiso
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-brand-gluon bg-brand-dark p-8 shadow-soft">
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

            <div className="mt-8 rounded-2xl border border-white/10 bg-brand-gluon p-4">
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