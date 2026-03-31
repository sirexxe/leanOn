'use client'

import { useEffect, useRef, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const blocks = [
  {
    num: "01",
    tag: "ICP Scoring",
    title: ["Deja de vender a quien", "no puede comprarte."],
    desc: "Construimos una matriz de 6 criterios que le dice a tu equipo, en los primeros 5 minutos de una llamada, si ese lead vale su tiempo.",
    insight: "La mayoría de founders pierde el 40% de su tiempo en leads que nunca van a cerrar. El ICP Scoring acaba con eso.",
    result: "Pipeline cualificado desde el día uno. Sin llamadas que no llevan a ningún sitio.",
    cialdini: "Escasez · Autoridad",
  },
  {
    num: "02",
    tag: "Buyer Architecture",
    title: ["Vende a quien decide,", "no a quien responde."],
    desc: "Mapeamos el proceso de decisión real: quién bloquea, quién aprueba, quién usa. Para cada buyer, identificamos la métrica por la que le evalúan, la objeción que usará para decir no y el trigger que le crea urgencia.",
    insight: "El 73% de los deals perdidos se pierden con el decisor equivocado en la sala.",
    result: "Demos con quien firma el presupuesto, no con quien tiene curiosidad.",
    cialdini: "Autoridad · Reciprocidad",
  },
  {
    num: "03",
    tag: "Message-Market Fit",
    title: ["El mensaje que hace que", "dejen de compararte."],
    desc: "Encontramos la frase exacta que hace que el buyer diga «esto es exactamente lo que necesito» — y la documentamos para que cualquiera en el equipo la replique.",
    insight: "Se construye sobre los pains reales de tus primeras 20 conversaciones, no sobre lo que tú crees que les importa.",
    result: "Cada call empieza desde el mismo punto. El founder deja de improvisar.",
    cialdini: "Consistencia · Simpatía",
  },
  {
    num: "04",
    tag: "The Lean Stack Playbook",
    title: ["El sistema que funciona", "cuando no estás tú."],
    desc: "Secuencias de outreach, discovery, demo, negociación y cierre — en Notion + CRM, listo para que un AE júnior lo ejecute desde el día uno.",
    insight: "Las startups que escalan con playbook contratan su primer AE 3 meses antes y con un 60% menos de fricción en el onboarding.",
    result: "Contratas a tu primer comercial con un proceso probado, no con esperanza.",
    cialdini: "Prueba social · Compromiso",
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

export default function WhatWeDoSection() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()
  const [footerRef, footerInView] = useInView()

  return (
    <section id="servicios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-14 transition-all duration-500 ease-out ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
            Qué hacemos
          </p>
          <h2 className="mb-3 text-3xl font-semibold leading-tight tracking-tight text-[#0a0a0a] md:text-4xl">
            Cuatro bloques.<br />
            <em className="not-italic text-brand-lava">Un sistema que vende sin ti.</em>
          </h2>
          <p className="text-sm leading-relaxed text-[#888]">
            Más de{' '}
            <strong className="font-medium text-[#0a0a0a]">45 startups</strong>
            {' '}en España y LATAM ya trabajan con este sistema.
            El tuyo puede estar listo en 16 semanas.
          </p>
        </div>

        {/* Grid 2×2 */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-2xl bg-[#f0eeea] md:grid-cols-2"
        >
          {blocks.map((block, index) => (
            <div
              key={block.num}
              className={`group bg-white p-7 transition-all duration-200 ease-in-out hover:bg-[#fdfcfb] ${
                gridInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Top row: número + badge Cialdini */}
              <div className="mb-5 flex items-start justify-between">
                <span className="text-[11px] font-medium tracking-[0.06em] text-[#ddd] transition-colors duration-200 group-hover:text-brand-lava">
                  {block.num}
                </span>
                <span className="rounded-full bg-brand-lava/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-brand-lava opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {block.cialdini}
                </span>
              </div>

              {/* Tag */}
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.09em] text-[#bbb] transition-colors duration-200 group-hover:text-brand-lava">
                {block.tag}
              </p>

              {/* Título */}
              <h3 className="mb-4 text-xl font-semibold leading-snug tracking-tight text-[#0a0a0a]">
                {block.title[0]}<br />
                <em className="not-italic text-brand-lava">{block.title[1]}</em>
              </h3>

              {/* Descripción */}
              <p className="mb-4 text-[13px] leading-relaxed text-[#666]">
                {block.desc}
              </p>

              {/* Insight */}
              <p className="mb-5 text-[12px] italic leading-relaxed text-[#999]">
                {block.insight}
              </p>

              {/* Resultado */}
              <div className="border-l-2 border-[#ddd] pl-3 transition-colors duration-200 group-hover:border-brand-lava">
                <p className="text-[12px] leading-relaxed text-[#888]">
                  <strong className="font-medium text-[#0a0a0a]">Resultado: </strong>
                  {block.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div
          ref={footerRef}
          className={`mt-10 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#f9f8f6] px-6 py-5 transition-all duration-500 ease-out sm:flex-row sm:items-center ${
            footerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${4 * 80}ms` }}
        >
          <p className="text-[13px] leading-relaxed text-[#666]">
            Los 4 bloques juntos forman{' '}
            <strong className="font-medium text-[#0a0a0a]">The Lean Stack</strong>
            {' '}— el sistema comercial que más de 45 startups ya tienen en marcha.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-md bg-brand-lava px-5 py-2.5 text-[12px] font-semibold whitespace-nowrap text-white transition-opacity duration-200 hover:opacity-90"
          >
            Empieza con el Decode →
          </a>
        </div>

      </div>
    </section>
  )
}
