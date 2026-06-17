import ProductCard from "./ProductCard";
import { products } from "../data/products";
import "../styles/ProductSection.css";

const ProductSection = () => {

    const categorias = [
        ...new Set(products.map(producto => producto.categoria))
    ];

    const crearSlug = (texto: string) => {
        return texto
            .toLowerCase()
            .replace(/\s+/g, "-");
    };

    return (
        <>
            {categorias.map((categoria) => (
                <section
                    key={categoria}
                    className="productos-section"
                    id={crearSlug(categoria)}
                >
                    <h2>{categoria.toUpperCase()}</h2>

                    <div className="productos-grid">
                        {products
                            .filter(
                                producto => producto.categoria === categoria
                            )
                            .map((producto) => (
                                <ProductCard
                                    key={producto.id}
                                    nombre={producto.nombre}
                                    precio={producto.precio}
                                    imagen={producto.imagen}
                                />
                            ))}
                    </div>
                </section>
            ))}
        </>
    );
};

export default ProductSection;