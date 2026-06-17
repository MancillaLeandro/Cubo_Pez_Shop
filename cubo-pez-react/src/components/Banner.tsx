import "../styles/Banner.css";
import banner from "../assets/images/Banners/banner2.jpg";

const Banner = () => {
    return (
        <section className="banner">
            <h2>¡Los mejores cubos para speedcubing!</h2>

            <div className="banner-img">
                <img src={banner} alt="Novedades" />
            </div>
        </section>
    );
};

export default Banner;