import { CALENDLY_URL } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-dark/5 bg-brand-snow/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="text-xl font-semibold tracking-tightest text-brand-dark">
          Lean On
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#servicios" className="text-sm text-brand-dusty transition hover:text-brand-dark">
            Servicios
          </a>
          <a href="#equipo" className="text-sm text-brand-dusty transition hover:text-brand-dark">
            Equipo
          </a>
          <a href="#contacto" className="text-sm text-brand-dusty transition hover:text-brand-dark">
            Contacto
          </a>
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-brand-lava px-5 py-3 text-sm font-medium text-brand-snow shadow-soft transition duration-200 hover:-translate-y-0.5 hover:opacity-95"
        >
          Solicitar diagnóstico
        </a>
      </div>
    </header>
  );
}