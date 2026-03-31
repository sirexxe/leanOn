import { CALENDLY_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
          Próximo paso
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
          Si vender depende de intuición, es momento de construir un sistema.
        </h2>

        <p className="mt-4 text-lg leading-8 text-brand-dusty">
          En Lean On podemos ayudarte a identificar dónde está la fricción y qué playbook necesitas
          para la siguiente etapa.
        </p>

        <div className="mt-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-lava px-6 py-3.5 text-sm font-medium text-brand-snow shadow-soft transition duration-200 hover:-translate-y-0.5 hover:opacity-95"
          >
            Reservar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}