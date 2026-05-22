import lista from "@/data/cursos";
import BarraBusqueda from "@/components/BarraBusqueda";

export const metadata = {
  title: "Buscar | Academia de cursos",
};

export default async function BuscarPage({ searchParams }) {
  const { q } = await searchParams
  const resultados = q
    ? lista.filter(item => `${item.titulo} ${item.descripcion}`.toLowerCase().includes(q.toLowerCase()))
    : lista

  return (
    <>
      <h1 className="titulo">Buscar</h1>
      <BarraBusqueda />
      <div className="grid">
        {resultados.map(item => (
          <article className="card" key={item.id}>
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
          </article>
        ))}
      </div>
    </>
  )
}
