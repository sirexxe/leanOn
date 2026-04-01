'use client'

import { useEffect, useRef, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const blocks = [
  {
    num: "01",
    tagLine1: "ICP",
    tagLine2: "Scoring",
    frontTitle: "Deja de vender a quien",
    frontTitleEmphasis: "no puede comprarte.",
    backTag: "ICP Scoring",
    backCopy: "Matriz de 6 criterios que dice, en los primeros 5 minutos, si ese lead vale tu tiempo.",
    backCopyEmphasis: "La mayoría de founders pierde el 40% de su tiempo en leads que nunca van a cerrar.",
    result: "Pipeline cualificado desde el día uno.",
  },
  {
    num: "02",
    tagLine1: "Buyer",
    tagLine2: "Architecture",
    frontTitle: "Vende a quien decide,",
    frontTitleEmphasis: "no a quien responde.",
    backTag: "Buyer Architecture",
    backCopy: "Mapeamos quién bloquea, aprueba y usa. Para cada buyer: su métrica, su objeción y su trigger de urgencia.",
    backCopyEmphasis: "El 73% de los deals se pierden con el decisor equivocado en la sala.",
    result: "Demos con quien firma el presupuesto.",
  },
  {
    num: "03",
    tagLine1: "Message-",
    tagLine2: "Market Fit",
    frontTitle: "El mensaje que hace que",
    frontTitleEmphasis: "dejen de compararte.",
    backTag: "Message-Market Fit",
    backCopy: "La frase exacta que hace decir «esto es lo que necesito» — documentada para que cualquiera la replique.",
    backCopyEmphasis: "Construida sobre los pains reales de tus primeras 20 conversaciones.",
    result: "Cada call empieza desde el mismo punto.",
  },
  {
    num: "04",
    tagLine1: "The Lean",
    tagLine2: "Stack",
    frontTitle: "El sistema que funciona",
    frontTitleEmphasis: "cuando no estás tú.",
    backTag: "The Lean Stack Playbook",
    backCopy: "Outreach, discovery, demo, negociación y cierre en Notion + CRM.",
    backCopyEmphasis: "Un AE júnior lo ejecuta desde el día uno sin necesitar al founder.",
    result: "Contratas con proceso probado, no con esperanza.",
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

function FlipCard({ block, visible, index }) {
  return (
    <div
      className={`flip-card transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ perspective: '1000px', height: '260px', transitionDelay: `${index * 80}ms` }}
    >
      <div className="flip-card-inner relative h-full w-full">

        {/* Cara frontal */}
        <div className="flip-card-front flex flex-col justify-between overflow-hidden rounded-xl border border-[#e8e6e2] bg-white p-5">
          {/* Fila superior */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium tracking-[0.06em] text-[#ccc]">
              {block.num}
            </span>
            <span className="text-[11px] tracking-[0.04em] text-[#ddd]">
              → pasa el cursor
            </span>
          </div>

          {/* Cuerpo: tag + divisor + subtítulo */}
          <div>
            <p className="mb-3 text-[26px] font-semibold leading-[1.05] tracking-[-0.03em] text-brand-lava">
              {block.tagLine1}<br />{block.tagLine2}
            </p>
            <div className="mb-3 h-[1.5px] w-7 bg-[#e8e6e2]" />
            <p className="text-sm leading-snug text-[#666]">
              {block.frontTitle}{' '}
              <em className="not-italic font-medium text-[#0a0a0a]">
                {block.frontTitleEmphasis}
              </em>
            </p>
          </div>
        </div>

        {/* Cara trasera */}
        <div className="flip-card-back flex flex-col justify-between overflow-hidden rounded-xl bg-[#1a1a18] px-8 py-6">
          <div>
            <p className="mb-2.5 text-[11px] font-medium uppercase tracking-widest text-[#888]">
              {block.backTag}
            </p>
            <p className="text-sm leading-relaxed text-[#999]">
              {block.backCopy}{' '}
              <strong className="font-medium text-[#d8d7d0]">
                {block.backCopyEmphasis}
              </strong>
            </p>
          </div>

          <div className="flex items-start gap-1.5 border-t border-[#2a2a27] pt-2.5">
            <span className="mt-1.25 h-1 w-1 shrink-0 rounded-full bg-brand-lava" />
            <p className="text-xs leading-snug text-[#888]">
              {block.result}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
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
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {blocks.map((block, index) => (
            <FlipCard
              key={block.num}
              block={block}
              visible={gridInView}
              index={index}
            />
          ))}
        </div>

        {/* Footer strip */}
        <div
          ref={footerRef}
          className={`flex flex-col items-start justify-between gap-4 rounded-xl bg-[#f9f8f6] px-6 py-5 transition-all duration-500 ease-out sm:flex-row sm:items-center ${
            footerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${4 * 80}ms` }}
        >
          <p className="text-[13px] leading-relaxed text-[#666]">
            Los 4 bloques juntos forman{' '}
            <strong className="font-medium text-[#0a0a0a]">The Lean Stack</strong>
            {' '}— el sistema que{' '}
            <strong className="font-medium text-[#0a0a0a]">+45 startups</strong>
            {' '}ya tienen en marcha.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 whitespace-nowrap rounded-md bg-brand-lava px-5 py-2.5 text-[12px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            Empieza con el Decode →
          </a>
        </div>

      </div>
    </section>
  )
}
