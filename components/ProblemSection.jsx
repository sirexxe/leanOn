'use client'

import { useEffect, useRef, useState } from 'react'

const symptoms = [
  {
    num: "01",
    text: "El founder cierra casi todos los deals",
    emphasis: "casi todos los deals",
    rest: " — y no puede escalar sin él.",
  },
  {
    num: "02",
    text: "Cada conversación comercial sigue una lógica distinta.",
    emphasis: "una lógica distinta",
    rest: ".",
  },
  {
    num: "03",
    text: "El pipeline no refleja dónde están los deals realmente.",
    emphasis: "dónde están los deals",
    rest: " realmente.",
  },
  {
    num: "04",
    text: "Lo que funciona no se documenta ni replica.",
    emphasis: "no se documenta",
    rest: " ni replica.",
  },
  {
    num: "05",
    text: "Los deals perdidos no generan aprendizaje.",
    emphasis: "no generan aprendizaje",
    rest: ".",
  },
  {
    num: "06",
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
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0a0a0a]">
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
                key={s.num}
                className={`group rounded-xl border border-transparent bg-white p-5 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-brand-lava/12 ${
                  gridInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <p className="mb-2.5 text-sm font-medium text-[#cccccc] transition-colors duration-200 group-hover:text-brand-lava">
                  {s.num}
                </p>
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
