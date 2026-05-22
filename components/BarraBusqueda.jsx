"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BarraBusqueda() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [texto, setTexto] = useState(searchParams.get("q") ?? "")

  function buscar() {
    if (!texto.trim()) return
    const params = new URLSearchParams(searchParams)
    params.set("q", texto.trim())
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="campo">
      <input value={texto} onChange={e => setTexto(e.target.value)} onKeyDown={e => e.key === "Enter" && buscar()} placeholder="Buscar..." />
      <button className="btn" onClick={buscar}>Enviar</button>
    </div>
  )
}
