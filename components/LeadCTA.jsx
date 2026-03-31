import { CALENDLY_URL } from "@/lib/constants";

export default function LeadCTA() {
  return (
    <section id="lead" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-brand-dark/10 bg-brand-lava px-8 py-12 text-brand-snow sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-snow/70">
            Diagnóstico
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Solicita un diagnóstico de tu sistema comercial.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-snow/85">
            En 30 minutos identificamos si el problema está en ICP, mensaje, proceso o ejecución.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-dark px-6 py-3.5 text-sm font-medium text-brand-snow transition hover:bg-brand-gluon"
            >
              Reservar diagnóstico
            </a>
            <p className="text-sm text-brand-snow/70">No es una demo · Es una conversación real</p>
          </div>
        </div>
      </div>
    </section>
  );
}