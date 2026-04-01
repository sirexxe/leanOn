'use client'

import { useEffect, useState } from 'react'
import { CALENDLY_URL } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neutral-900 bg-brand-dark'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="text-2xl font-semibold tracking-tightest text-brand-snow">
          Lean On
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <a href="#servicios" className="text-sm text-neutral-300 transition-colors hover:text-white">
            El método
          </a>
          <a href="#equipo" className="text-sm text-neutral-300 transition-colors hover:text-white">
            Nuestro Equipo
          </a>
          <a href="#lead-cta" className="text-sm text-neutral-300 transition-colors hover:text-white">
            Contáctanos
          </a>
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-brand-lava hover:bg-brand-lava"
        >
          Quiero mi sales playbook
        </a>
      </div>
    </header>
  );
}
