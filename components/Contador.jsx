"use client"
import { useCursosStorage } from "@/store/useCursosStorage";

export default function Contador() {
  const cursos = useCursosStorage(state => state.cursos)
  const favoritos = useCursosStorage(state => state.favoritos)
  const total = cursos.reduce((sum, item) => sum + Number(item.cantidad || 0), 0)

  return (
    <div className="dos">
      <article className="contador"><span>Registros</span><strong>{cursos.length}</strong></article>
      <article className="contador"><span>Total cantidades</span><strong>{total}</strong></article>
      <article className="contador"><span>Favoritos</span><strong>{favoritos.length}</strong></article>
      <article className="contador"><span>Pendientes</span><strong>{cursos.filter(item => item.estado !== "completado").length}</strong></article>
    </div>
  )
}
