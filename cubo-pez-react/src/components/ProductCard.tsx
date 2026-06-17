import "../styles/ProductCard.css";

type Props = {
    nombre: string;
    precio: number;
    imagen: string;
};


const ProductCard = ({ nombre, precio, imagen }: Props) => {
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />

            <h3>{nombre}</h3>

            <p>
                ${precio.toLocaleString("es-AR")}
            </p>
        </div>
    );
};


export default ProductCard;