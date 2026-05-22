import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Academia de cursos",
  description: "Proyecto posible de examen con Next.js, Supabase y Zustand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav className="sidebar">
          <h2>Academia de cursos</h2>
          <Link href="/">Inicio</Link>
          <Link href="/panel">Panel</Link>
          <Link href="/buscar">Buscar</Link>
          <Link href="/favoritos">Favoritos</Link>
        </nav>
        <main className="contenido">{children}</main>
      </body>
    </html>
  );
}
