"use client"
import lista from "@/data/cursos";
import { useCursosStorage } from "@/store/useCursosStorage";

export default function FavoritosPage() {
  const favoritos = useCursosStorage(state => state.favoritos)
  const datos = lista.filter(item => favoritos.includes(item.id))

  return (
    <>
      <h1 className="titulo">Favoritos</h1>
      <div className="grid">
        {datos.length ? datos.map(item => (
          <article className="card" key={item.id}>
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
          </article>
        )) : <p>No hay favoritos todavia.</p>}
      </div>
    </>
  )
}
