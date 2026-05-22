"use client"
import Link from "next/link";
import { useState } from "react";
import { useCursosStorage } from "@/store/useCursosStorage";

export default function Curso({ item }) {
  const cambiarEstado = useCursosStorage(state => state.cambiarEstado)
  const eliminarCurso = useCursosStorage(state => state.eliminarCurso)
  const toggleFavorito = useCursosStorage(state => state.toggleFavorito)
  const favoritos = useCursosStorage(state => state.favoritos)
  const [marcado, setMarcado] = useState(item.estado === "completado")

  const completar = () => {
    const siguiente = marcado ? "pendiente" : "completado"
    setMarcado(!marcado)
    cambiarEstado(item.id, siguiente)
  }

  return (
    <article className="card">
      <span className="estado">{item.estado}</span>
      <h2 className={marcado ? "tachado" : ""}>{item.titulo}</h2>
      <p>{item.descripcion}</p>
      <p>Prioridad: {item.prioridad} | Cantidad: {item.cantidad}</p>
      <div className="acciones">
        <Link className="btn azul" href={`/${item.id}`}>Ficha</Link>
        <button className="btn" onClick={completar}>Estado</button>
        <button className="btn ambar" onClick={() => toggleFavorito(item.id)}>
          {favoritos.includes(item.id) ? "Quitar fav" : "Favorito"}
        </button>
        <button className="btn rojo" onClick={() => eliminarCurso(item.id)}>Borrar</button>
      </div>
    </article>
  )
}
