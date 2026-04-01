'use client'

import { useEffect, useRef, useState } from 'react'

const casos = [
  {
    sector: "B2B SaaS · Seed",
    mercado: "España",
    quote: "De 2 a 25 reuniones por semana. Sin tocar el producto.",
    quoteEmphasis: "Sin tocar el producto.",
    contexto: "«Teníamos producto, teníamos ganas. Lo que no teníamos era un proceso que no dependiera del founder para funcionar.»",
    problema: "Pipeline dependiente del founder, sin criterios de avance. Cada deal era diferente.",
    intervencion: "ICP Scoring + Buyer Architecture + secuencias outbound activas.",
    resultado: "×12 reuniones cualificadas en 60 días. Primer AE productivo en semana 6.",
    resultadoEmphasis: "×12 reuniones cualificadas",
    metricas: [
      { valor: "×12", label: "reuniones / semana" },
      { valor: "6w", label: "rampa AE" },
    ],
  },
  {
    sector: "Fintech · Preseed",
    mercado: "Argentina",
    quote: "Tres founders. Tres pitches. Cero consistencia.",
    quoteEmphasis: "Cero consistencia.",
    contexto: "«Cada uno vendía a su manera. El buyer no entendía por qué elegirnos. Necesitábamos un mensaje, no tres opiniones.»",
    problema: "Mensaje inconsistente entre founders. Conversión demo→propuesta del 12%.",
    intervencion: "Message-Market Fit construido sobre 20 conversaciones reales. Pitch unificado y documentado.",
    resultado: "Conversión al 41% en 6 semanas. Del 12% al 41% sin cambiar precio ni producto.",
    resultadoEmphasis: "Conversión al 41%",
    metricas: [
      { valor: "41%", label: "conversión demo" },
      { valor: "6w", label: "tiempo al resultado" },
    ],
  },
  {
    sector: "HR Tech · Seed",
    mercado: "México",
    quote: "Actividad sin sistema no es pipeline.",
    quoteEmphasis: "no es pipeline.",
    contexto: "«Teníamos un AE trabajando duro. Pero el CRM era un cementerio. No sabíamos qué iba a cerrar ni cuándo.»",
    problema: "CRM sin criterios de avance. Forecast imposible. AE tardaba 4 meses en ser productivo.",
    intervencion: "ICP Scoring + criterios de stage + playbook de discovery completo.",
    resultado: "Rampa reducida de 4 meses a 6 semanas. Pipeline predecible en 30 días.",
    resultadoEmphasis: "4 meses a 6 semanas",
    metricas: [
      { valor: "−10w", label: "rampa AE" },
      { valor: "30d", label: "forecast activo" },
    ],
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
      { threshold: 0.1, rootMargin: '-40px' }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

function CasoRow({ caso, index, isLast, visible }) {
  const before = caso.quote.replace(caso.quoteEmphasis, '')
  const resultoBefore = caso.resultado.replace(caso.resultadoEmphasis, '').trim()

  return (
    <div
      className={`group py-10 border-t border-[#f0eeea] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start transition-all duration-200 hover:bg-[#fdfcfb] -mx-4 px-4 rounded-lg ${
        isLast ? 'border-b border-[#f0eeea]' : ''
      } ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      style={{ transitionDelay: `${index * 100}ms`, transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, background-color 0.2s ease-in-out' }}
    >
      {/* Columna izquierda — historia emocional */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-brand-lava bg-[rgba(245,110,15,0.10)] rounded-full px-2.5 py-1">
            {caso.sector}
          </span>
          <span className="text-[9px] text-[#bbb] tracking-[0.06em]">
            {caso.mercado}
          </span>
        </div>

        <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0a0a0a] leading-tight tracking-tight mb-4">
          {before}
          <em className="not-italic text-brand-lava">{caso.quoteEmphasis}</em>
        </h3>

        <p className="text-[12px] text-[#999] leading-relaxed italic pl-3 border-l-2 border-[#f0eeea]">
          {caso.contexto}
        </p>
      </div>

      {/* Columna derecha — evidencia racional */}
      <div>
        <div className="mb-4">
          <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#bbb] mb-1.5">
            Problema
          </p>
          <p className="text-[12px] text-[#888] leading-relaxed">
            {caso.problema}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#bbb] mb-1.5">
            Intervención
          </p>
          <p className="text-[12px] text-[#888] leading-relaxed">
            {caso.intervencion}
          </p>
        </div>

        <div className="mb-5">
          <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-brand-lava mb-1.5">
            Resultado
          </p>
          <p className="text-[12px] text-[#0a0a0a] leading-relaxed font-medium">
            <strong className="text-brand-lava font-semibold">{caso.resultadoEmphasis}</strong>
            {' '}{resultoBefore}
          </p>
        </div>

        <div className="flex gap-6 pt-4 border-t border-[#f0eeea]">
          {caso.metricas.map((m) => (
            <div key={m.label}>
              <p className="text-[22px] font-semibold text-[#0a0a0a] leading-none tracking-tight mb-1">
                {m.valor}
              </p>
              <p className="text-[10px] text-[#bbb] leading-snug">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CasosSection() {
  const [headerRef, headerInView] = useInView()
  const [listRef, listInView] = useInView()

  return (
    <section id="casos" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-14 transition-all duration-500 ease-out ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase mb-4 text-brand-lava">
            Casos reales
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#0a0a0a] mb-3">
            El sistema funciona.<br />
            <em className="not-italic text-brand-lava">Los números lo prueban.</em>
          </h2>
          <p className="text-sm text-[#888] leading-relaxed">
            Tres startups en tres países. El mismo patrón:{' '}
            <strong className="text-[#0a0a0a] font-medium">problema de sistema, no de esfuerzo.</strong>
          </p>
        </div>

        {/* Lista de casos */}
        <div ref={listRef}>
          {casos.map((caso, index) => (
            <CasoRow
              key={caso.sector}
              caso={caso}
              index={index}
              isLast={index === casos.length - 1}
              visible={listInView}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
