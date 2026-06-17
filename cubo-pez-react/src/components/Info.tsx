import "../styles/Info.css";

import {
    FaTruck,
    FaStar,
    FaSyncAlt,
    FaHeadset,
    FaCreditCard
} from "react-icons/fa";

const Info = () => {
    return (
        <section className="info">

            <div className="info-item">
                <FaTruck />
                <p>Envíos rápidos</p>
            </div>

            <div className="info-item">
                <FaStar />
                <p>Calidad garantizada</p>
            </div>

            <div className="info-item">
                <FaSyncAlt />
                <p>Devoluciones fáciles</p>
            </div>

            <div className="info-item">
                <FaHeadset />
                <p>Atención al cliente</p>
            </div>

            <div className="info-item">
                <FaCreditCard />
                <p>Pagos seguros</p>
            </div>

        </section>
    );
};

export default Info;