import './SideBar.css'

const SideBar = () => {
  return (
    <>
      {/* Barra lateral */}
      <aside className="lateral">
          <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
              <input type="text" id="search_field" />
              <button id="search">Buscar</button>
            </form>
          </div>

          <div className="add">
            <h3 className="title">Añadir película</h3>
            <form>
              <input type="text" id="title" placeholder="Título" />
              <textarea id="description" placeholder="Descripción"></textarea>
              <input type="submit" id="save" value="Guardar" />
            </form>
          </div>
        </aside>
    </>
  )
}

export default SideBar
