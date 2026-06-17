import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            <h2>CUBO PEZ SHOP</h2>

            <div className="footer-container">

                <div className="footer-column">

                    <h3>Contacto</h3>

                    <p>📍 Buenos Aires, Argentina</p>
                    <p>📧 cubopezshop@gmail.com</p>
                    <p>📱 +54 11 1234-5678</p>

                </div>


                <div className="footer-column">

                    <h3>Navegación</h3>

                    <a href="#productos">Productos</a>
                    <a href="#comunidad">Comunidad</a>
                    <a href="#marcas">Marcas</a>

                </div>


                <div className="footer-column">

                    <h3>Ayuda</h3>

                    <a href="#">Envíos</a>
                    <a href="#">Cambios y devoluciones</a>
                    <a href="#">Preguntas frecuentes</a>

                </div>


                <div className="footer-column">

                    <h3>Redes</h3>

                    <a href="#">Instagram</a>
                    <a href="#">YouTube</a>
                    <a href="#">TikTok</a>

                </div>

            </div>


            <div className="footer-copy">
                © 2026 Cubo Pez Shop - Todos los derechos reservados
            </div>

        </footer>
    );
};

export default Footer;