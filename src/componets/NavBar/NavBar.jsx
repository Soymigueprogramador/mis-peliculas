import './NavBar.css'

const NavBar = () => {
  return (
    <>
      {/* Barra de navegación */}
      <nav className="nav">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Peliculas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
    </>
  )
}

export default NavBar
