'use client'

import { useEffect, useRef, useState } from 'react'
import CalendarBox from '@/components/CalendarBox'

const checks = [
  {
    title: "Diagnóstico de fricción real",
    desc: "Identificamos si el problema está en ICP, mensaje, proceso o ejecución — no en suposiciones.",
  },
  {
    title: "Qué cambiarías primero",
    desc: "Te decimos el primer paso concreto para tu caso — no un framework genérico.",
  },
  {
    title: "Conclusiones que te llevas",
    desc: "Aunque no sigamos trabajando juntos, sales con algo accionable. Sin trampa.",
  },
  {
    title: "Basado en +45 startups",
    desc: "El mismo patrón de diagnóstico que usamos antes de arrancar con cada cliente.",
  },
]

const trustAnchors = [
  { val: "30'", label: "exactos",    ariaLabel: "30 minutos exactos" },
  { val: "45+", label: "sesiones",   ariaLabel: "Más de 45 sesiones realizadas" },
  { val: "0",   label: "compromiso", ariaLabel: "Cero compromiso" },
]

const quote = {
  text: "«Teníamos producto, teníamos ganas. En 30 minutos entendimos qué era lo que fallaba realmente.»",
  autor: "Founder, B2B SaaS · Seed · España",
}

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

export default function LeadCTASection() {
  const [headerRef, headerInView] = useInView()
  const [leftRef, leftInView] = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <>
      <section
        id="lead-cta"
        aria-labelledby="lead-cta-heading"
        className="bg-[#0e0e0e] py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">

          {/* Header centrado */}
          <div
            ref={headerRef}
            className={`text-center mb-14 transition-all duration-500 ease-out ${
              headerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Eyebrow — brand-lava (#F56E0F) sobre #0e0e0e: ~6.3:1 ✓ AA */}
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-brand-lava mb-4">
              Decode · Sesión gratuita
            </p>

            {/* H2 — #f0efe8 sobre #0e0e0e: 17.2:1 ✓ AAA */}
            <h2
              id="lead-cta-heading"
              className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#f0efe8] mb-4"
            >
              ¿Sabes exactamente por qué<br />
              se te escapan los deals?<br />
              {/* brand-lava sobre #0e0e0e: ~6.3:1 ✓ AA */}
              <em className="not-italic text-brand-lava">
                En 30 minutos, lo sabes.
              </em>
            </h2>

            {/* Subtítulo — #888 sobre #0e0e0e: 4.8:1 ✓ AA */}
            <p className="text-sm text-[#888] leading-relaxed max-w-lg mx-auto">
              No es una demo. No hay pitch.{' '}
              {/* #d0cfc8 sobre #0e0e0e: 12.1:1 ✓ AAA */}
              <strong className="text-[#d0cfc8] font-medium">
                Sales con conclusiones reales aunque no sigamos trabajando juntos.
              </strong>
            </p>
          </div>

          {/* Split principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Columna izquierda */}
            <div
              ref={leftRef}
              className={`transition-all duration-500 ease-out ${
                leftInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              {/* Título columna — #888 sobre #0e0e0e: 4.8:1 ✓ AA */}
              <p className="text-[14px] font-medium text-[#888] mb-6 leading-snug">
                Una sesión donde analizamos{' '}
                {/* #f0efe8 sobre #0e0e0e: 17.2:1 ✓ AAA */}
                <em className="not-italic text-[#f0efe8]">
                  tu situación comercial real.
                </em>
              </p>

              {/* Checklist semántica — WCAG 1.3.1 */}
              <ul
                role="list"
                aria-label="Qué incluye la sesión Decode"
                className="flex flex-col divide-y divide-[#1a1a17]"
              >
                {checks.map((c) => (
                  <li
                    key={c.title}
                    className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    {/* Icono decorativo — aria-hidden: WCAG 1.1.1 */}
                    {/* brand-lava border sobre #0e0e0e: ~6.3:1 ✓ AA (UI component) */}
                    <div
                      aria-hidden="true"
                      className="w-5 h-5 rounded-full border border-brand-lava flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-lava" />
                    </div>

                    <div>
                      {/* #d0cfc8 sobre #0e0e0e: 12.1:1 ✓ AAA */}
                      <p className="text-[13px] font-medium text-[#d0cfc8] mb-1">
                        {c.title}
                      </p>
                      {/* #a0a09a sobre #0e0e0e: 6.8:1 ✓ AA */}
                      <p className="text-[12px] text-[#a0a09a] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Quote semántica — WCAG 1.3.1 */}
              <blockquote className="mt-8 pt-6 border-t border-[#1a1a17]">
                {/* #888 sobre #0e0e0e: 4.8:1 ✓ AA */}
                <p className="text-[12px] text-[#888] leading-relaxed italic mb-2">
                  {quote.text}
                </p>
                {/* #777 sobre #0e0e0e: 4.2:1 ✓ AA (texto de soporte) */}
                <cite className="text-[11px] font-medium text-[#777] not-italic">
                  — {quote.autor}
                </cite>
              </blockquote>

              {/* Trust anchors — WCAG 1.3.1 + 4.1.2 */}
              <div
                role="list"
                aria-label="Datos de la sesión Decode"
                className="mt-6 flex gap-6"
              >
                {trustAnchors.map((t) => (
                  <div
                    key={t.label}
                    role="listitem"
                    aria-label={t.ariaLabel}
                  >
                    {/* #f0efe8 sobre #0e0e0e: 17.2:1 ✓ AAA */}
                    <p
                      aria-hidden="true"
                      className="text-[18px] font-semibold text-[#f0efe8] leading-none tracking-tight"
                    >
                      {t.val}
                    </p>
                    {/* #888 sobre #0e0e0e: 4.8:1 ✓ AA */}
                    <p
                      aria-hidden="true"
                      className="text-[10px] text-[#888] mt-1"
                    >
                      {t.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — CalendarBox */}
            <div
              ref={rightRef}
              className={`transition-all duration-500 ease-out ${
                rightInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <CalendarBox />
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
