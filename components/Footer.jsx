export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-brand-dark/10 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-brand-snow">Lean On</p>
            <a
              href="mailto:hello@lean-on.us"
              className="mt-2 block text-sm text-brand-snow/70 transition hover:text-brand-snow"
            >
              hello@lean-on.us
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-brand-snow/70">
            <a href="#servicios" className="transition hover:text-brand-snow">
              El método
            </a>
            <a href="#equipo" className="transition hover:text-brand-snow">
              Nuestro Equipo
            </a>
            <a href="#contacto" className="transition hover:text-brand-snow">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
