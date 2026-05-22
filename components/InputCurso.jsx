"use client"
import { useState } from "react";
import { useCursosStorage } from "@/store/useCursosStorage";

export default function InputCurso() {
  const insertarCurso = useCursosStorage(state => state.insertarCurso)
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    prioridad: "media",
    estado: "pendiente",
    cantidad: 1
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.titulo.trim()) return
    await insertarCurso({
      ...formData,
      cantidad: Number(formData.cantidad)
    })
    setFormData({ titulo: "", descripcion: "", prioridad: "media", estado: "pendiente", cantidad: 1 })
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Nuevo curso</h2>
      <div className="campo">
        <input name="titulo" value={formData.titulo} onChange={handleChange} placeholder="Titulo" />
      </div>
      <div className="campo">
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripcion" />
      </div>
      <div className="dos">
        <div className="campo">
          <select name="prioridad" value={formData.prioridad} onChange={handleChange}>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </div>
        <div className="campo">
          <input type="number" min="1" name="cantidad" value={formData.cantidad} onChange={handleChange} />
        </div>
      </div>
      <button className="btn">Guardar</button>
    </form>
  )
}
