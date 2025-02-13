import './MainContent.css'

const MainContent = () => {
  return (
    <>
      {/* Contenido principal */}
      <section id="content" className="content">
          {/* Aquí van las películas */}
          {[...Array(4)].map((_, index) => (
            <article key={index} className="peli-item">
              <h3 className="title">Desarrollo web</h3>
              <p className="description">victorroblesweb.es</p>

              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </article>
          ))}
        </section>
    </>
  )
}

export default MainContent
