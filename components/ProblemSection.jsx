'use client'

import { useEffect, useRef, useState } from 'react'

const symptoms = [
  {
    // Persona sola — founder lo hace todo
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    text: "El founder cierra casi todos los deals",
    emphasis: "casi todos los deals",
    rest: " — y no puede escalar sin él.",
  },
  {
    // Flechas en distintas direcciones — sin lógica común
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    text: "Cada conversación comercial sigue una lógica distinta.",
    emphasis: "una lógica distinta",
    rest: ".",
  },
  {
    // Embudo — pipeline
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
      </svg>
    ),
    text: "El pipeline no refleja dónde están los deals realmente.",
    emphasis: "dónde están los deals",
    rest: " realmente.",
  },
  {
    // Documento sin checkmark — no se documenta
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    text: "Lo que funciona no se documenta ni replica.",
    emphasis: "no se documenta",
    rest: " ni replica.",
  },
  {
    // Tendencia bajando — deals perdidos sin aprendizaje
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.511-5.511-3.182" />
      </svg>
    ),
    text: "Los deals perdidos no generan aprendizaje.",
    emphasis: "no generan aprendizaje",
    rest: ".",
  },
  {
    // Grupo de personas — escalar = contratar
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    text: "Escalar requiere contratar, no sistematizar.",
    emphasis: "contratar, no sistematizar",
    rest: ".",
  },
]

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

export default function ProblemSection() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section id="problema" className="bg-[#f4f3f0] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top split */}
        <div
          ref={headerRef}
          className={`mb-12 grid grid-cols-1 items-end gap-12 transition-all duration-500 ease-out md:grid-cols-2 ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {/* Columna izquierda */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
              El problema
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0a0a0a] sm:text-4xl">
              Si vendes tú,<br />
              el sistema{' '}
              <em className="not-italic text-brand-lava">eres tú.</em>
              <br />
              Y eso no escala.
            </h2>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-3">
            <p className="border-l-2 border-[#dddbd6] pl-4 text-sm leading-relaxed text-[#666]">
              El problema no es{' '}
              <strong className="font-medium text-[#0a0a0a]">esfuerzo.</strong>{' '}
              Es falta de arquitectura comercial.
            </p>
            <p className="border-l-2 border-[#dddbd6] pl-4 text-sm leading-relaxed text-[#666]">
              Estas señales aparecen antes de que el crecimiento se detenga.
              Reconocerlas a tiempo es la diferencia.
            </p>
          </div>
        </div>

        {/* Grid de cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {symptoms.map((s, index) => {
            const prefix = s.text.split(s.emphasis)[0]
            return (
              <div
                key={s.emphasis}
                className={`group rounded-xl border border-transparent bg-white p-5 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-brand-lava/12 ${
                  gridInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="mb-3 text-[#cccccc] transition-colors duration-200 group-hover:text-brand-lava">
                  {s.icon}
                </div>
                <p className="text-sm leading-relaxed text-[#444]">
                  {prefix}
                  <em className="not-italic font-medium text-[#0a0a0a] transition-colors duration-200 group-hover:text-brand-lava">
                    {s.emphasis}
                  </em>
                  {s.rest}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
