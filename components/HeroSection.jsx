'use client'

import { useEffect, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'


export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="relative bg-brand-dark">
      {/* Grid sutil */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Contenido centrado */}
      <div className="relative z-10 px-6 pb-16 pt-36 lg:pb-24 lg:pt-44">
        <div
          className={`mx-auto flex max-w-3xl flex-col items-center text-center ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          {/* Eyebrow pill */}
          <span className="mb-6 inline-block rounded-full border border-brand-lava px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-lava">
            Fractional Head of Sales · España &amp; LATAM
          </span>

          {/* H1 */}
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tightest text-brand-snow md:text-5xl lg:text-6xl">
            Eres el mejor vendedor de tu empresa.{' '}
            <em className="not-italic text-brand-lava">
              El problema es que no debería ser así.
            </em>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-base leading-relaxed text-brand-dusty md:text-lg">
            Construimos el sistema comercial que te permite escalar y cumplir tus objetivos.
          </p>

          {/* CTA */}
          <a
            href={CALENDLY_URL} // TODO: reemplazar con URL de Calendly definitiva
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-brand-lava px-8 py-3.5 text-sm font-semibold text-brand-snow transition duration-200 hover:-translate-y-0.5 hover:opacity-95"
          >
            Quiero mi sales playbook
          </a>

          {/* Nota geográfica */}
          <p className="mt-4 text-xs text-brand-snow/40">· España · Argentina · México</p>
        </div>
      </div>

    </section>
  )
}
