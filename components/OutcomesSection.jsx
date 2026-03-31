'use client'

import { useEffect, useRef, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const outcomes = [
  {
    num: "01",
    title: ["El founder deja de ser", "el cuello de botella."],
    antes: "Cada deal importante pasa por ti. Si estás en vacaciones, el pipeline se para.",
    despues: "Tienes un proceso que cualquier comercial ejecuta sin llamarte.",
    despuesEmphasis: "Por primera vez puedes desconectar un viernes sin que eso cueste dinero.",
    porQueImporta: "Una empresa que no puede operar sin su founder no puede crecer. Y los inversores lo saben.",
  },
  {
    num: "02",
    title: ["Sabes por qué ganas", "y por qué pierdes."],
    antes: "Cuando cierras, no sabes qué funcionó. Cuando pierdes, tampoco.",
    despues: "Cada deal tiene criterios claros. Los perdidos dejan aprendizaje.",
    despuesEmphasis: "En 90 días tienes patrones reales, no intuiciones.",
    porQueImporta: "Sin esa información, cada mes empiezas desde cero. Con ella, cada mes eres mejor que el anterior.",
  },
  {
    num: "03",
    title: ["Tu primer AE arranca", "en días, no en meses."],
    antes: "Contratar sin playbook es apostar a que \"lo pille rápido\". La mayoría tarda 4 meses en ser productivo.",
    despues: "ICP, pitch, secuencias y discovery listos desde el día uno.",
    despuesEmphasis: "El AE no necesita absorberte a ti para aprender.",
    porQueImporta: "Cada mes de rampa perdida son leads que no cualificas, demos que no das y deals que no cierras.",
  },
  {
    num: "04",
    title: ["El pipeline refleja", "la realidad."],
    antes: "Miras el CRM y no sabes si ese deal lleva muerto dos semanas o va a cerrar esta.",
    despues: "Cada stage tiene criterios objetivos. El pipeline no miente.",
    despuesEmphasis: "Puedes decirle a tu board cuánto vas a cerrar el mes que viene.",
    porQueImporta: "Un founder que no puede hacer forecast pierde credibilidad con inversores. Y a veces, también consigo mismo.",
  },
  {
    num: "05",
    title: ["Vendes igual en Madrid", "que en Buenos Aires."],
    antes: "Tu proceso funciona en el mercado que conoces. En el nuevo, empiezas de cero — sin saber si el ICP es el mismo, si el mensaje resuena o si el ciclo es distinto.",
    despues: "El playbook está construido para adaptarse por mercado.",
    despuesEmphasis: "La expansión a LATAM no depende de que el founder esté disponible para cada primera call.",
    porQueImporta: "El mercado hispanohablante es uno en proceso — pero distinto en cultura, ciclo y buyer. El sistema contempla ambas dimensiones.",
    wide: true,
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

function OutcomeCard({ outcome, visible, index }) {
  return (
    <div
      className={`group bg-[#faf9f6] p-7 transition-all duration-200 ease-in-out hover:bg-white ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Número */}
      <p className="mb-4 text-[10px] font-medium tracking-[0.06em] text-[#ccc] transition-colors duration-200 group-hover:text-brand-lava">
        {outcome.num}
      </p>

      {/* Título */}
      <h3 className="mb-5 text-base font-semibold leading-snug tracking-tight text-[#0a0a0a]">
        {outcome.title[0]}<br />
        <em className="not-italic text-brand-lava">{outcome.title[1]}</em>
      </h3>

      {/* Antes */}
      <div className="mb-4">
        <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-[#bbb]">
          Antes
        </p>
        <p className="border-l-[1.5px] border-[#e0deda] pl-3 text-[12px] italic leading-relaxed text-[#aaa]">
          {outcome.antes}
        </p>
      </div>

      {/* Después */}
      <div>
        <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-brand-lava">
          Después
        </p>
        <p className="border-l-[1.5px] border-brand-lava pl-3 text-[12px] leading-relaxed text-[#555]">
          {outcome.despues}{' '}
          <strong className="font-medium text-[#0a0a0a]">{outcome.despuesEmphasis}</strong>
        </p>
      </div>

      {/* Por qué importa — solo en hover */}
      <div className="mt-4 flex max-h-0 items-start gap-2 overflow-hidden border-t border-[#ece9e4] pt-0 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-[100px] group-hover:opacity-100 group-hover:pt-3">
        <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-brand-lava" />
        <p className="text-[11px] italic leading-relaxed text-[#999]">
          {outcome.porQueImporta}
        </p>
      </div>
    </div>
  )
}

function WideCard({ outcome, visible, index }) {
  return (
    <div
      className={`group col-span-full bg-[#faf9f6] p-7 transition-all duration-200 ease-in-out hover:bg-white ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Número */}
      <p className="mb-4 text-[10px] font-medium tracking-[0.06em] text-[#ccc] transition-colors duration-200 group-hover:text-brand-lava">
        {outcome.num}
      </p>

      {/* Título */}
      <h3 className="mb-6 text-base font-semibold leading-snug tracking-tight text-[#0a0a0a]">
        {outcome.title[0]}<br />
        <em className="not-italic text-brand-lava">{outcome.title[1]}</em>
      </h3>

      {/* Antes y Después en 2 columnas */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-[#bbb]">
            Antes
          </p>
          <p className="border-l-[1.5px] border-[#e0deda] pl-3 text-[12px] italic leading-relaxed text-[#aaa]">
            {outcome.antes}
          </p>
        </div>
        <div>
          <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-brand-lava">
            Después
          </p>
          <p className="border-l-[1.5px] border-brand-lava pl-3 text-[12px] leading-relaxed text-[#555]">
            {outcome.despues}{' '}
            <strong className="font-medium text-[#0a0a0a]">{outcome.despuesEmphasis}</strong>
          </p>
        </div>
      </div>

      {/* Por qué importa — solo en hover */}
      <div className="mt-4 flex max-h-0 items-start gap-2 overflow-hidden border-t border-[#ece9e4] pt-0 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-[100px] group-hover:opacity-100 group-hover:pt-3">
        <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-brand-lava" />
        <p className="text-[11px] italic leading-relaxed text-[#999]">
          {outcome.porQueImporta}
        </p>
      </div>
    </div>
  )
}

export default function OutcomesSection() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()
  const [footerRef, footerInView] = useInView()

  return (
    <section id="lo-que-cambia" className="bg-[#f4f3f0] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-14 grid grid-cols-1 items-end gap-12 transition-all duration-500 ease-out md:grid-cols-2 ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-brand-lava">
              Lo que cambia
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0a0a0a] sm:text-4xl">
              No métricas<br />
              de consultoría.<br />
              <em className="not-italic text-brand-lava">Cambios reales.</em>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <p className="border-l-2 border-[#dddbd6] pl-4 text-sm leading-relaxed text-[#666]">
              No te vamos a decir que{' '}
              <strong className="font-medium text-[#0a0a0a]">"mejorarás la consistencia comercial".</strong>
            </p>
            <p className="border-l-2 border-[#dddbd6] pl-4 text-sm leading-relaxed text-[#666]">
              Te decimos exactamente qué es diferente{' '}
              <strong className="font-medium text-[#0a0a0a]">la semana después</strong>
              {' '}de trabajar con nosotros.
            </p>
          </div>
        </div>

        {/* Grid de outcomes */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-2xl bg-[#e8e6e2] md:grid-cols-2"
        >
          {outcomes.map((o, i) =>
            o.wide
              ? <WideCard key={o.num} outcome={o} visible={gridInView} index={i} />
              : <OutcomeCard key={o.num} outcome={o} visible={gridInView} index={i} />
          )}
        </div>

        {/* Footer strip */}
        <div
          ref={footerRef}
          className={`mt-10 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#eceae6] px-6 py-5 transition-all duration-500 ease-out sm:flex-row sm:items-center ${
            footerInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${5 * 80}ms` }}
        >
          <p className="text-[13px] leading-relaxed text-[#666]">
            Estos son los cambios que{' '}
            <strong className="font-medium text-[#0a0a0a]">+45 startups</strong>
            {' '}ya tienen en marcha.{' '}
            <strong className="font-medium text-[#0a0a0a]">
              El tuyo puede estar listo en 16 semanas.
            </strong>
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
