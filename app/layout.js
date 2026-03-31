import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Lean On | Sales Playbooks para startups early-stage",
  description:
    "Ayudamos a startups pre-seed y seed a convertir ventas dispersas en un sistema comercial claro, documentado y repetible.",
  keywords: [
    "sales playbook",
    "consultoría comercial",
    "startup sales",
    "ventas b2b",
    "playbook de ventas",
    "revenue operations",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}