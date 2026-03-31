import { CALENDLY_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-8 lg:py-40">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
          Sales Playbook para startups early-stage
        </p>

        <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tightest text-brand-snow sm:text-6xl lg:text-7xl">
          Ventas que no dependen de ti.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-snow/60">
          Convertimos ventas dispersas en un sistema comercial claro, documentado y repetible para
          startups pre-seed y seed.
        </p>

        <div className="mt-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-lava px-8 py-4 text-sm font-medium text-brand-snow shadow-soft transition duration-200 hover:-translate-y-0.5 hover:opacity-95"
          >
            Solicitar diagnóstico
          </a>
        </div>

        <p className="mt-4 text-sm text-brand-snow/30">
          Sesión inicial de 30 min · Sin compromiso
        </p>
      </div>
    </section>
  );
}
