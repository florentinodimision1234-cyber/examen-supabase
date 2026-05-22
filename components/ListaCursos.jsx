"use client"
import { useEffect, useMemo, useState } from "react";
import listaInicial from "@/data/cursos";
import { useCursosStorage } from "@/store/useCursosStorage";
import Curso from "@/components/Curso";

export default function ListaCursos() {
  const cursos = useCursosStorage(state => state.cursos)
  const hidratarCursos = useCursosStorage(state => state.hidratarCursos)
  const [texto, setTexto] = useState("")

  useEffect(() => {
    hidratarCursos(listaInicial)
  }, [hidratarCursos])

  const filtrados = useMemo(() => {
    if (!texto.trim()) return cursos
    return cursos.filter(item =>
      `${item.titulo} ${item.descripcion} ${item.estado}`.toLowerCase().includes(texto.toLowerCase())
    )
  }, [cursos, texto])

  return (
    <section>
      <div className="campo">
        <input value={texto} onChange={e => setTexto(e.target.value)} placeholder="Filtrar en cliente" />
      </div>
      <div className="grid">
        {filtrados.length ? filtrados.map(item => <Curso key={item.id} item={item} />) : <p>No hay resultados</p>}
      </div>
    </section>
  )
}
