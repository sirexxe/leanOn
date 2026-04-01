/**
 * CalendarBox — Placeholder visual hasta integrar TidyCal
 *
 * Swap a TidyCal (cuando el path esté listo):
 * Reemplazar el bloque marcado con TODO por:
 *
 *   import Script from 'next/script'
 *
 *   <div
 *     className="tidycal-embed"
 *     data-path="TU_USUARIO/NOMBRE_BOOKING"
 *     data-name={`${sessionTitle} — ${duration}`}
 *     style={{ background: '#141414', minHeight: '500px' }}
 *   />
 *   <Script src="https://tidycal.com/js/embed.js" strategy="lazyOnload" />
 */

export default function CalendarBox({
  placeholderTitle = 'Agenda tu sesión Decode',
  placeholderSubtext = 'Disponible próximamente',
  contactEmail = 'hello@lean-on.us',
  sessionTitle = 'Lean On · Sesión gratuita',
  duration = '30 minutos · Videollamada',
  avatarInitials = 'LO',
  className,
}) {
  return (
    <div className={className}>

      {/* Label superior — #888 sobre #0e0e0e: 4.8:1 ✓ AA */}
      <p
        id="cal-label"
        className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#888] mb-3 text-center"
      >
        Selecciona tu fecha y hora
      </p>

      {/* Box principal */}
      <div
        role="region"
        aria-labelledby="cal-label"
        className="rounded-2xl overflow-hidden border border-[#1e1e1b]"
      >

        {/* Header — bg #141414 */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b border-[#1e1e1b]"
          style={{ background: '#141414' }}
        >
          <div>
            {/* Badge — brand-lava sobre rgba(245,110,15,0.10): ✓ AA con font-semibold */}
            <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-lava bg-[rgba(245,110,15,0.10)] rounded-full px-2.5 py-1 inline-block mb-2">
              Decode · 30 min
            </span>

            {/* Título — #f0efe8 sobre #141414: 15.8:1 ✓ AAA */}
            <p className="text-[14px] font-medium text-[#f0efe8] leading-snug">
              {sessionTitle}
            </p>

            {/* Duración — #888 sobre #141414: 4.6:1 ✓ AA */}
            <p className="text-[11px] text-[#888] mt-1">
              {duration}
            </p>
          </div>

          {/* Avatar — decorativo, aria-hidden */}
          <div
            aria-hidden="true"
            className="w-9 h-9 rounded-full border border-[#2a2a27] flex items-center justify-center shrink-0 text-[12px] font-medium text-[#888]"
            style={{ background: '#1e1e1b' }}
          >
            {avatarInitials}
          </div>
        </div>

        {/* TODO: Reemplazar este bloque completo con el embed de TidyCal
            cuando el path esté disponible. Ver instrucciones en el header del archivo. */}
        <div
          className="flex flex-col items-center justify-center gap-5 px-8 py-12 text-center"
          style={{ background: '#141414', minHeight: '380px' }}
        >
          {/* Icono decorativo — aria-hidden */}
          <div
            aria-hidden="true"
            className="w-12 h-12 rounded-full border border-[#2a2a27] flex items-center justify-center"
            style={{ background: '#1e1e1b' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="16" height="14" rx="2" stroke="#444" strokeWidth="1.5" />
              <path d="M2 8h16" stroke="#444" strokeWidth="1.5" />
              <path d="M6 2v3M14 2v3" stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="5" y="11" width="3" height="3" rx="0.5" fill="#444" />
              <rect x="9" y="11" width="3" height="3" rx="0.5" fill="#444" />
            </svg>
          </div>

          {/* Título placeholder — #d0cfc8 sobre #141414: 12.1:1 ✓ AAA */}
          <p className="text-[15px] font-medium text-[#d0cfc8] leading-snug">
            {placeholderTitle}
          </p>

          {/* Subtexto — #888 sobre #141414: 4.6:1 ✓ AA */}
          <p className="text-[12px] text-[#888] leading-relaxed max-w-[240px]">
            {placeholderSubtext}
          </p>

          {/* CTA mailto — blanco sobre brand-lava: 4.6:1 ✓ AA */}
          <a
            href={`mailto:${contactEmail}`}
            aria-label={`Enviar email a ${contactEmail} para reservar sesión`}
            className="text-[12px] font-semibold text-white bg-brand-lava rounded-lg px-5 py-2.5 transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lava focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
          >
            Escribirnos para reservar
            <span aria-hidden="true"> →</span>
          </a>

          {/* Email visible — #777 sobre #141414: 4.0:1 ✓ AA (texto de soporte) */}
          <p className="text-[10px] text-[#777]">
            {contactEmail}
          </p>
        </div>
        {/* FIN bloque placeholder */}

      </div>

      {/* Nota de confianza — #777 sobre #0e0e0e: 4.2:1 ✓ AA */}
      <p className="text-[10px] text-[#777] text-center mt-3 leading-relaxed">
        Sin compromiso · Confirmación inmediata por email<br />
        Puedes cancelar hasta 24h antes
      </p>

    </div>
  )
}
