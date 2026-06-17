import "../styles/Brands.css";
import { brands } from "../data/brands";

const Brands = () => {
    const logos = [...brands, ...brands, ...brands];

    return (
        <section className="brands">
            <h2>MARCAS</h2>

            <div className="brands-container">
                {logos.map((brand, index) => (
                    <div 
                        key={index}
                        className="brand-card"
                    >
                        <img 
                            src={brand.imagen}
                            alt={brand.nombre}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Brands;