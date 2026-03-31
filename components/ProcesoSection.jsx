"use client";

import { useEffect, useRef, useState } from "react";

const pasos = [
  {
    numero: "01",
    nombre: "Decode",
    subtitulo: "Diagnóstico real",
    descripcion:
      "Entendemos dónde está la fricción real: ICP difuso, mensaje inconsistente, proceso inexistente o ejecución sin sistema. No asumimos — preguntamos.",
    duracion: "30–60 min · sesión gratuita",
  },
  {
    numero: "02",
    nombre: "Design",
    subtitulo: "Arquitectura comercial",
    descripcion:
      "Definimos ICP, buyer persona, mensaje, proceso de pipeline y criterios de avance. La estructura que convierte intuición en sistema.",
    duracion: "1–2 semanas",
  },
  {
    numero: "03",
    nombre: "Deploy",
    subtitulo: "Aterrizaje operativo",
    descripcion:
      "Lo construimos contigo en Notion + CRM. No entregamos documentos para archivar — instalamos el sistema para que el equipo lo use desde el día uno.",
    duracion: "1–3 semanas",
  },
  {
    numero: "04",
    nombre: "Dial-in",
    subtitulo: "Refinamiento con datos reales",
    descripcion:
      "Revisamos con feedback del mercado: qué mensajes funcionan, dónde se pierde el pipeline, qué hay que ajustar. El sistema mejora con cada deal.",
    duracion: "Ongoing · mensual",
  },
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function ProcesoSection() {
  const [gridRef, inView] = useInView();

  return (
    <section id="proceso" className="bg-brand-dark py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Cómo trabajamos
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-snow sm:text-4xl">
            The Lean Stack: cuatro semanas para que el sistema funcione sin ti.
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-snow/60">
            Un proceso corto e intensivo. Diseñado para founders que necesitan estructura, no
            proyectos largos.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {pasos.map((paso, index) => (
            <div
              key={paso.numero}
              className={`border-t-2 border-white/10 pt-6 transition-all duration-500 ease-out hover:border-brand-lava ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-sm font-semibold text-brand-lava">{paso.numero}</span>

              <h3 className="mt-4 text-lg font-semibold text-brand-snow">{paso.nombre}</h3>

              <p className="mt-1 text-sm text-brand-snow/50">{paso.subtitulo}</p>

              <p className="mt-4 text-sm leading-relaxed text-brand-snow/70">{paso.descripcion}</p>

              <span className="mt-6 inline-block rounded-full bg-brand-lava/15 px-3 py-1 text-xs text-brand-lava">
                {paso.duracion}
              </span>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <p className="text-sm text-brand-snow/50">¿No sabes en qué paso está tu startup?</p>
          <a
            href="#contacto"
            className="mt-2 inline-block text-sm font-medium text-brand-snow transition-colors duration-200 hover:text-brand-lava"
          >
            Haz el Decode gratis →
          </a>
        </div>
      </div>
    </section>
  );
}
