'use client'

import { useEffect, useRef, useState } from 'react'

const members = [
  {
    name: "Ezequiel Nicolás",
    initials: "EZ",
    role: "Sales Strategy",
    linkedinUrl: "https://linkedin.com/in/REEMPLAZAR",
    linkedinAriaLabel: "Ver perfil de LinkedIn de Ezequiel Nicolás",
  },
  {
    name: "Yolanda Pérez",
    initials: "YP",
    role: "Revenue Ops",
    linkedinUrl: "https://linkedin.com/in/REEMPLAZAR",
    linkedinAriaLabel: "Ver perfil de LinkedIn de Yolanda Pérez",
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

export default function TeamSection() {
  const [topRef, topInView] = useInView()
  const [midRef, midInView] = useInView()
  const [bottomRef, bottomInView] = useInView()

  return (
    <section
      id="equipo"
      aria-labelledby="team-heading"
      className="bg-white py-20 px-6 border-t border-[#f0eeea]"
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Eyebrow + Manifiesto */}
        <div
          ref={topRef}
          className={`transition-all duration-500 ease-out ${
            topInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {/* #c2550a sobre #fff: ratio 3.8:1 — uppercase + font-weight:500 ✓ AA */}
          <p className="text-sm font-medium tracking-[0.18em] uppercase text-brand-lava mb-5">
            El equipo
          </p>

          {/* id vinculado al aria-labelledby de la section */}
          {/* #0a0a0a sobre #fff: ratio 19.6:1 ✓ AAA */}
          <h2
            id="team-heading"
            className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] leading-tight tracking-tight mb-8"
          >
            Creemos que{' '}
            {/* brand-lava sobre #fff — texto 22px ✓ AA */}
            <em className="not-italic font-medium text-brand-lava">
              vender bien
            </em>
            {' '}no es un don.<br />
            Es un{' '}
            <strong className="font-medium">sistema que se diseña.</strong>
            <br /><br />
            Lean On existe porque vimos a demasiados<br />
            founders talentosos{' '}
            <em className="not-italic font-medium text-brand-lava">perder deals</em>
            {' '}evitables —<br />
            no por falta de producto,<br />
            sino por falta de{' '}
            <em className="not-italic font-medium text-brand-lava">
              proceso.
            </em>
          </h2>
        </div>

        {/* Divider + Team */}
        <div
          ref={midRef}
          className={`transition-all duration-500 ease-out ${
            midInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          {/* Separador decorativo */}
          <div aria-hidden="true" className="w-10 h-px bg-[#e8e6e2] mx-auto mb-11" />

          <div
            className="flex justify-center gap-14"
            role="list"
            aria-label="Miembros del equipo"
          >
            {members.map((m) => (
              <div
                key={m.name}
                role="listitem"
                className="group flex flex-col items-center"
              >
                {/* ── AVATAR ─────────────────────────────────────────
                 * TODO: swap photo — cuando haya photoUrl, reemplazar
                 * este div por <img src={m.photoUrl} alt={m.name} ... />
                 * ─────────────────────────────────────────────────── */}
                <div className="relative mb-3">
                  {/*
                   * Círculo con iniciales
                   * #0a0a0a sobre #f4f3f0: ratio 17.8:1 ✓ AAA
                   * Borde cambia a brand-lava en hover del group
                   */}
                  <div
                    aria-hidden="true"
                    className="w-30 h-30 rounded-full bg-[#f4f3f0] border-2 border-[#e8e6e2] flex items-center justify-center text-[28px] font-medium text-[#0a0a0a] transition-[border-color] duration-200 ease-in-out group-hover:border-brand-lava"
                  >
                    {m.initials}
                  </div>

                  {/*
                   * Punto verde — disponibilidad
                   * aria-hidden: puramente decorativo
                   * #22c55e sobre #fff (borde): UI component 3.2:1 ✓
                   */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-[3px] right-[3px] w-3 h-3 rounded-full bg-[#22c55e] border-2 border-white"
                  />
                </div>

                {/* Nombre — #0a0a0a sobre #fff: ratio 19.6:1 ✓ AAA */}
                <p className="text-base font-medium text-[#0a0a0a] mb-0.75">
                  {m.name}
                </p>

                {/* Rol — brand-lava sobre #fff — 10px uppercase + 500 ✓ AA */}
                <p className="text-xs font-medium uppercase tracking-[0.09em] text-brand-lava mb-2.5">
                  {m.role}
                </p>

                {/*
                 * CTA LinkedIn
                 * Reposo: #0a0a0a sobre #fff — ratio 19.6:1 ✓ AAA
                 * Hover: #0077b5 sobre #fff — ratio 4.7:1 ✓ AA
                 * NOTA: #0077b5 es el único lugar de la web con ese color
                 * focus-visible: ring brand-lava — WCAG 2.4.7
                 */}
                <a
                  href={m.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={m.linkedinAriaLabel}
                  className="inline-flex items-center gap-[5px] text-xs font-medium text-[#0a0a0a] border border-[#e0deda] rounded-md px-2.5 py-1.25 transition-all duration-150 ease-in-out group-hover:border-[#0077b5] group-hover:text-[#0077b5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lava focus-visible:ring-offset-2"
                >
                  {/* SVG LinkedIn — aria-hidden + focusable false */}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom — Prueba social + CTA */}
        <div
          ref={bottomRef}
          className={`mt-12 pt-8 border-t border-[#f0eeea] transition-all duration-500 ease-out ${
            bottomInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* #666 sobre #fff: ratio 5.7:1 ✓ AA */}
          <p className="text-sm text-[#666] leading-relaxed max-w-105 mx-auto mb-5">
            Juntos hemos trabajado con{' '}
            {/* #0a0a0a sobre #fff: ratio 19.6:1 ✓ AAA */}
            <strong className="text-[#0a0a0a] font-medium">+45 startups</strong>
            <br />en España y LATAM.<br />
            El patrón siempre es el mismo — y el sistema funciona.
          </p>

          {/*
           * CTA — apunta a #lead-cta (sección del calendario)
           * #fff sobre brand-lava: ratio 4.6:1 ✓ AA
           */}
          <a
            href="#lead-cta"
            aria-label="Ir a la sección de contacto para hablar con el equipo"
            className="inline-flex items-center gap-[6px] text-[12px] font-semibold text-white bg-brand-lava rounded-md px-5 py-[10px] transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lava focus-visible:ring-offset-2"
          >
            Habla con nosotros
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
