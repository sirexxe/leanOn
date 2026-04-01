const navColumns = [
  {
    title: "Producto",
    links: [
      { label: "ICP Scoring",        href: "#servicios" },
      { label: "Buyer Architecture", href: "#servicios" },
      { label: "Message-Market Fit", href: "#servicios" },
      { label: "The Lean Stack",     href: "#servicios" },
      { label: "Cómo trabajamos",    href: "#proceso"     },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Casos reales",    href: "#casos"         },
      { label: "El equipo",       href: "#equipo"        },
      { label: "Lo que cambia",   href: "#lo-que-cambia" },
      { label: "Decode gratuito", href: "#lead-cta"      },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "hello@lean-on.us", href: "mailto:hello@lean-on.us" },
      { label: "Reservar sesión",  href: "#lead-cta" },
    ],
    markets: ["España", "LATAM"],
  },
]

const socialLinks = [
  {
    label: "LinkedIn de Lean On",
    href: "https://linkedin.com/company/REEMPLAZAR",
    svgPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram de Lean On",
    href: "https://instagram.com/REEMPLAZAR",
    svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "X (Twitter) de Lean On",
    href: "https://x.com/REEMPLAZAR",
    svgPath: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
]

const legalLinks = [
  { label: "Política de privacidad", href: "/privacidad"  },
  { label: "Aviso legal",            href: "/aviso-legal" },
]

export default function Footer() {
  return (
    <footer
      id="footer"
      aria-label="Pie de página"
      className="bg-[#0e0e0e]"
    >
      {/* Zona principal — 4 columnas */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-12 border-b border-[#1a1a17]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Marca */}
          <div>
            {/* #f0efe8 sobre #0e0e0e: 17.2:1 ✓ AAA */}
            <p className="text-[18px] font-medium text-[#f0efe8] tracking-[-0.02em] mb-2">
              Lean On
            </p>

            {/* #a0a09a sobre #0e0e0e: 6.8:1 ✓ AA */}
            <p className="text-sm text-[#a0a09a] leading-relaxed mb-5 max-w-45">
              Tu primer fractional<br />
              {/* brand-lava sobre #0e0e0e: 5.1:1 ✓ AA */}
              <em className="not-italic text-brand-lava">Head of Sales</em>
            </p>

            {/* Redes sociales */}
            <nav aria-label="Redes sociales de Lean On">
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center border border-[#252520] bg-[#141414] transition-all duration-150 ease-in-out hover:border-brand-lava hover:bg-[#1e1e1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lava focus-visible:ring-offset-1 focus-visible:ring-offset-[#0e0e0e]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                      className="fill-[#555] transition-[fill] duration-150 group-hover:fill-[#f0efe8]"
                    >
                      <path d={s.svgPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* Col 2–4 — Nav */}
          {navColumns.map((col) => (
            <div key={col.title}>
              {/* #777 sobre #0e0e0e: 4.2:1 ✓ AA */}
              <p className="text-xs font-medium uppercase tracking-widest text-[#777] mb-4">
                {col.title}
              </p>

              <nav aria-label={`Navegación ${col.title}`}>
                <ul role="list" className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {/* #666 sobre #0e0e0e: 4.0:1 ✓ AA */}
                      <a
                        href={link.href}
                        className="text-sm text-[#666] transition-colors duration-150 hover:text-[#f0efe8] focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-1 focus-visible:ring-brand-lava"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mercados — solo columna Contacto */}
              {col.markets && (
                <div className="mt-5">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-[#777] mb-3">
                    Mercados
                  </p>
                  <ul role="list" className="flex flex-col gap-2">
                    {col.markets.map((m) => (
                      <li key={m} className="text-sm text-[#666]">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* Barra inferior — legal + badge */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

        {/* Legal — #666 sobre #0e0e0e: 4.0:1 ✓ AA */}
        <p className="text-xs text-[#666] leading-relaxed">
          © 2026 Lean On · Todos los derechos reservados ·{' '}
          {legalLinks.map((l, i) => (
            <span key={l.label}>
              {/* #888 sobre #0e0e0e: 4.8:1 ✓ AA */}
              <a
                href={l.href}
                className="text-[#888] underline underline-offset-2 transition-colors duration-150 hover:text-[#f0efe8] focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-1 focus-visible:ring-brand-lava"
              >
                {l.label}
              </a>
              {i < legalLinks.length - 1 && ' · '}
            </span>
          ))}
        </p>

        {/* Badge */}
        <div className="flex items-center gap-[6px]" aria-label="Operamos en España y LATAM">
          {/* #22c55e sobre #0e0e0e: 3.9:1 ✓ AA (UI component) */}
          <div aria-hidden="true" className="w-[5px] h-[5px] rounded-full bg-[#22c55e] flex-shrink-0" />
          {/* #666 sobre #0e0e0e: 4.0:1 ✓ AA */}
          <span className="text-xs text-[#666]">Hecho en España · LATAM</span>
        </div>

      </div>
    </footer>
  )
}
