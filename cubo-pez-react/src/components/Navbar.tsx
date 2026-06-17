import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#cubos">Cubos</a></li>
        <li><a href="#puzzles">Puzzles</a></li>
        <li><a href="#juegos-de-mesa">Juegos De Mesa</a></li>
        <li><a href="#rompecabezas">Rompecabezas</a></li>
        <li><a href="#maquetas">Maquetas</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;