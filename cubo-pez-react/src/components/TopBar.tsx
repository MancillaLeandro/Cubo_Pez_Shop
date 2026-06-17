import "../styles/Navbar.css";
import logo from "../assets/images/Logo.png";

const TopBar = () => {
  return (
    <section className="top-bar">
      <div className="logo">
        <img src={logo} alt="Cubo Pez" />
        <h1>Cubo Pez</h1>
      </div>

      <div className="busqueda">
        <input type="text" placeholder="Buscar productos..." />
      </div>

      <div className="acciones">
        <span>Login</span>
        <span>Carrito 🛒</span>
      </div>
    </section>
  );
};

export default TopBar;