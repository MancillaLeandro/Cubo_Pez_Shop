import { useState } from "react";
import "../styles/Subscribe.css";

const Subscribe = () => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        edad: "",
        fecha: "",
        pais: "Argentina",
        nivel: "",
        intereses: [],
        comentarios: "",
    });

    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setForm({
                ...form,
                intereses: [...form.intereses, value],
            });
        } else {
            setForm({
                ...form,
                intereses: form.intereses.filter(i => i !== value),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.nombre.length < 3) {
            setMensaje("El nombre debe tener al menos 3 caracteres.");
            return;
        }

        const suscripciones =
            JSON.parse(localStorage.getItem("suscripciones")) || [];

        suscripciones.push(form);

        localStorage.setItem(
            "suscripciones",
            JSON.stringify(suscripciones)
        );

        setMensaje("✅ ¡Gracias por suscribirte!");

        setForm({
            nombre: "",
            email: "",
            edad: "",
            fecha: "",
            pais: "Argentina",
            nivel: "",
            intereses: [],
            comentarios: "",
        });
    };

    return (
        <section className="suscripcion">

            <h2>Suscribite Para Novedades Y Descuentos!!!</h2>

            <form className="formulario" onSubmit={handleSubmit}>

                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                />

                <label>Edad</label>
                <input
                    type="number"
                    name="edad"
                    value={form.edad}
                    onChange={handleChange}
                    min="10"
                    max="100"
                />

                <label>Fecha de nacimiento</label>
                <input
                    type="date"
                    name="fecha"
                    value={form.fecha}
                    onChange={handleChange}
                />

                <label>País</label>
                <select
                    name="pais"
                    value={form.pais}
                    onChange={handleChange}
                >
                    <option>Argentina</option>
                    <option>España</option>
                    <option>México</option>
                    <option>Chile</option>
                </select>

                <label>Nivel de speedcubing</label>

                <div className="radio">
                    {["Principiante", "Intermedio", "Avanzado"].map(nivel => (
                        <label key={nivel}>
                            <input
                                type="radio"
                                name="nivel"
                                value={nivel}
                                checked={form.nivel === nivel}
                                onChange={handleChange}
                            />
                            {nivel}
                        </label>
                    ))}
                </div>

                <label>Intereses</label>

                <div className="checkbox">

                    {["Cubos", "Puzzles", "Juegos de mesa"].map(interes => (
                        <label key={interes}>
                            <input
                                type="checkbox"
                                value={interes}
                                checked={form.intereses.includes(interes)}
                                onChange={handleCheckbox}
                            />
                            {interes}
                        </label>
                    ))}

                </div>

                <label>Comentarios</label>

                <textarea
                    name="comentarios"
                    value={form.comentarios}
                    onChange={handleChange}
                    placeholder="Escribí algo..."
                />

                <button type="submit">
                    Suscribirme
                </button>

                {mensaje && <p>{mensaje}</p>}

            </form>

        </section>
    );
};

export default Subscribe;