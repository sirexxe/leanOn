import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Lean On | Sales Playbooks para startups early-stage",
  description:
    "Ayudamos a startups pre-seed y seed a convertir ventas dispersas en un sistema comercial claro, documentado y repetible.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}