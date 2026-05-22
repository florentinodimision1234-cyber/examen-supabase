import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "@/lib/supabase";

export const useCursosStorage = create(
  persist(
    (set) => ({
      cursos: [],
      favoritos: [],
      loading: false,

      cargarCursos: async () => {
        set({ loading: true })
        const { data, error } = await supabase.from("app2_03_academia_cursos").select("*")
        if (error) {
          console.error(error)
          set({ loading: false })
          return
        }
        set({ cursos: data, loading: false })
      },

      hidratarCursos: (datos) => set({ cursos: datos }),

      insertarCurso: async (curso) => {
        const { data, error } = await supabase
          .from("app2_03_academia_cursos")
          .insert({
            titulo: curso.titulo,
            descripcion: curso.descripcion,
            estado: curso.estado,
            prioridad: curso.prioridad,
            cantidad: curso.cantidad
          })
          .select()

        if (error) {
          console.error(error)
          set((state) => ({ cursos: [{ ...curso, id: Date.now() }, ...state.cursos] }))
          return
        }
        set((state) => ({ cursos: [data[0], ...state.cursos] }))
      },

      cambiarEstado: async (id, estado) => {
        const { error } = await supabase.from("app2_03_academia_cursos").update({ estado }).eq("id", id)
        if (error) console.error(error)
        set((state) => ({
          cursos: state.cursos.map((item) => item.id === id ? { ...item, estado } : item)
        }))
      },

      eliminarCurso: async (id) => {
        const { error } = await supabase.from("app2_03_academia_cursos").delete().eq("id", id)
        if (error) console.error(error)
        set((state) => ({
          cursos: state.cursos.filter((item) => item.id !== id),
          favoritos: state.favoritos.filter((fav) => fav !== id)
        }))
      },

      toggleFavorito: (id) => set((state) => ({
        favoritos: state.favoritos.includes(id)
          ? state.favoritos.filter((fav) => fav !== id)
          : [...state.favoritos, id]
      }))
    }),
    { name: "cursos-storage" }
  )
);

