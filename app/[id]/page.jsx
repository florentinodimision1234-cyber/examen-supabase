import lista from "@/data/cursos";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params
  const item = lista.find(elemento => String(elemento.id) === String(id))
  return {
    title: item ? `${item.titulo} | Academia de cursos` : "Academia de cursos",
    description: "Ficha dinamica con params"
  }
}

export default async function FichaPage({ params }) {
  const { id } = await params
  const item = lista.find(elemento => String(elemento.id) === String(id))

  if (!item) {
    return (
      <>
        <h1 className="titulo">No encontrado</h1>
        <Link className="btn" href="/">Volver</Link>
      </>
    )
  }

  return (
    <>
      <Link className="btn" href="/">Volver</Link>
      <h1 className="titulo">{item.titulo}</h1>
      <p className="subtitulo">{item.descripcion}</p>
      <article className="card">
        <p>Estado: {item.estado}</p>
        <p>Prioridad: {item.prioridad}</p>
        <p>Cantidad: {item.cantidad}</p>
      </article>
    </>
  )
}
