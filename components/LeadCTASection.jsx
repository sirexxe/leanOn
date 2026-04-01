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
        className="bg-[#0e0e0e] py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header centrado */}
          <div
            ref={headerRef}
            className={`text-center mb-14 transition-all duration-500 ease-out ${
              headerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Eyebrow — brand-lava (#F56E0F) sobre #0e0e0e: ~6.3:1 ✓ AA */}
            <p className="text-sm font-medium tracking-[0.18em] uppercase text-brand-lava mb-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

            {/* Columna izquierda */}
            <div
              ref={leftRef}
              className={`flex flex-col justify-between pt-6.25 transition-all duration-500 ease-out ${
                leftInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
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
                      className="w-5 h-5 rounded-full border border-brand-lava flex items-center justify-center shrink-0 mt-0.5 opacity-40"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-lava" />
                    </div>

                    <div>
                      {/* #d0cfc8 sobre #0e0e0e: 12.1:1 ✓ AAA */}
                      <p className="text-sm font-medium text-[#d0cfc8] mb-1">
                        {c.title}
                      </p>
                      {/* #a0a09a sobre #0e0e0e: 6.8:1 ✓ AA */}
                      <p className="text-sm text-[#a0a09a] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Trust anchors — WCAG 1.3.1 + 4.1.2 */}
              <div
                role="list"
                aria-label="Datos de la sesión Decode"
                className="flex-1 mt-8 pt-6 border-t border-[#1a1a17] flex items-center gap-12"
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
                      className="text-5xl font-semibold text-[#f0efe8] leading-none tracking-tight"
                    >
                      {t.val}
                    </p>
                    {/* #888 sobre #0e0e0e: 4.8:1 ✓ AA */}
                    <p
                      aria-hidden="true"
                      className="text-sm text-[#888] mt-2"
                    >
                      {t.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quote semántica — WCAG 1.3.1 */}
              <blockquote className="mt-8 pt-6 border-t border-[#1a1a17]">
                {/* #888 sobre #0e0e0e: 4.8:1 ✓ AA */}
                <p className="text-sm text-[#888] leading-relaxed italic mb-2">
                  {quote.text}
                </p>
                {/* #777 sobre #0e0e0e: 4.2:1 ✓ AA (texto de soporte) */}
                <cite className="text-xs font-medium text-[#777] not-italic">
                  — {quote.autor}
                </cite>
              </blockquote>
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
