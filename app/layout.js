import "./globals.css";

export const metadata = {
  title: "Lean On | Sales Playbooks para startups early-stage",
  description:
    "Ayudamos a startups pre-seed y seed a convertir ventas dispersas en un sistema comercial claro, documentado y repetible.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}