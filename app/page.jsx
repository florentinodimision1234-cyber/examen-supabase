import InputCurso from "@/components/InputCurso";
import ListaCursos from "@/components/ListaCursos";
import Contador from "@/components/Contador";

export default function Home() {
  return (
    <>
      <h1 className="titulo">Academia de cursos</h1>
      <p className="subtitulo">CRUD, estado, filtros, favoritos, API route y SQL de Supabase en una app de examen.</p>
      <div className="dos">
        <InputCurso />
        <Contador />
      </div>
      <ListaCursos />
    </>
  )
}
