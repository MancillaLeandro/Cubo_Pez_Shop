import "../styles/Community.css";
import { community } from "../data/community";

const Community = () => {
    return (
        <section className="community">
            <h2>COMUNIDAD CUBERA</h2>

            <div className="community-grid">
                {community.map((item) => (
                    <a
                        key={item.id}
                        href={item.enlace}
                        className="community-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={item.imagen}
                            alt={item.titulo}
                        />

                        <div className="overlay">
                            <h3>{item.titulo}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Community;