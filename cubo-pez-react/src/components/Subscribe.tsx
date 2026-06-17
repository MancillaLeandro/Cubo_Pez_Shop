import "../styles/Subscribe.css";

const Subscribe = () => {
    return (
        <section className="suscripcion">

            <h2>Suscribite Para Novedades Y Descuentos!!!</h2>

            <form className="formulario">

                <label>Nombre</label>
                <input 
                    type="text" 
                    placeholder="Tu nombre"
                    required
                />

                <label>Email</label>
                <input 
                    type="email"
                    placeholder="tu@email.com"
                    required
                />

                <label>Edad</label>
                <input 
                    type="number"
                    min="10"
                    max="100"
                />

                <label>Fecha de nacimiento</label>
                <input type="date" />

                <label>País</label>
                <select>
                    <option>Argentina</option>
                    <option>España</option>
                    <option>México</option>
                    <option>Chile</option>
                </select>

                <label>Nivel de speedcubing</label>

                <div className="radio">
                    <label>
                        <input type="radio" name="nivel"/>
                        Principiante
                    </label>

                    <label>
                        <input type="radio" name="nivel"/>
                        Intermedio
                    </label>

                    <label>
                        <input type="radio" name="nivel"/>
                        Avanzado
                    </label>
                </div>


                <label>Intereses</label>

                <div className="checkbox">

                    <label>
                        <input type="checkbox"/>
                        Cubos
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Puzzles
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Juegos de mesa
                    </label>

                </div>


                <label>Comentarios</label>

                <textarea 
                    placeholder="Escribí algo..."
                />


                <button type="submit">
                    Suscribirme
                </button>

            </form>

        </section>
    );
};

export default Subscribe;