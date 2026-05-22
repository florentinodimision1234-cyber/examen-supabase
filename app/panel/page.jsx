
export default function PanelPage() {
  const completados = lista.filter(item => item.estado === "completado")
  const pendientes = lista.filter(item => item.estado !== "completado")

  return (
    <>
      <h1 className="titulo">Panel</h1>
      <section className="dos">
        <article className="contador"><span>Pendientes</span><strong>{pendientes.length}</strong></article>
        <article className="contador"><span>Completados</span><strong>{completados.length}</strong></article>
      </section>
    </>
  )
}
